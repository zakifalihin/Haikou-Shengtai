<?php
declare(strict_types=1);

header('Content-Type: application/json; charset=utf-8');

$method = $_SERVER['REQUEST_METHOD'] ?? 'GET';

if ($method === 'OPTIONS') {
    http_response_code(204);
    exit;
}

if ($method !== 'POST') {
    http_response_code(405);
    echo json_encode([
        'success' => false,
        'message' => 'Method not allowed. Use POST.',
    ], JSON_UNESCAPED_UNICODE);
    exit;
}

/**
 * Load SMTP credentials from one directory above public_html (outside web root).
 * Example structure on Hostinger:
 *   /home/<user>/domains/haikoushengtaitropical.com/rfq-config.php
 *   /home/<user>/domains/haikoushengtaitropical.com/public_html/api/rfq.php
 */
$configPath = dirname(__DIR__, 2) . '/rfq-config.php';
if (!is_file($configPath)) {
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'message' => 'Server email config missing.',
    ], JSON_UNESCAPED_UNICODE);
    exit;
}

$config = require $configPath;
if (!is_array($config)) {
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'message' => 'Invalid server email configuration.',
    ], JSON_UNESCAPED_UNICODE);
    exit;
}

$smtpHost = trim((string)($config['smtp_host'] ?? 'smtp.hostinger.com'));
$smtpPort = (int)($config['smtp_port'] ?? 465);
$smtpUser = trim((string)($config['smtp_user'] ?? ''));
$smtpPass = (string)($config['smtp_pass'] ?? '');
$toEmail  = trim((string)($config['to_email'] ?? 'info@haikoushengtaitropical.com'));
$rawCc    = $config['cc_emails'] ?? [];

if ($smtpHost === '' || $smtpPort <= 0 || $smtpUser === '' || $smtpPass === '' || !filter_var($toEmail, FILTER_VALIDATE_EMAIL)) {
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'message' => 'Incomplete server SMTP configuration.',
    ], JSON_UNESCAPED_UNICODE);
    exit;
}

$rawBody = file_get_contents('php://input');
$input = is_string($rawBody) ? json_decode($rawBody, true) : null;

if (!is_array($input)) {
    http_response_code(400);
    echo json_encode([
        'success' => false,
        'message' => 'Invalid JSON request body.',
    ], JSON_UNESCAPED_UNICODE);
    exit;
}

// Honeypot check — silently accept bots without sending email
$honeypot = trim((string)($input['website'] ?? ''));
if ($honeypot !== '') {
    http_response_code(200);
    echo json_encode([
        'success' => true,
        'message' => 'Inquiry sent successfully.',
    ], JSON_UNESCAPED_UNICODE);
    exit;
}

/**
 * Strip CR/LF from single-line fields to prevent SMTP header injection.
 */
function sanitizeLine(mixed $value): string
{
    $str = trim((string)($value ?? ''));
    return preg_replace('/[\r\n]+/', ' ', $str) ?? '';
}

$name            = sanitizeLine($input['name'] ?? '');
$company         = sanitizeLine($input['company'] ?? '');
$buyerEmail      = sanitizeLine($input['email'] ?? '');
$division        = sanitizeLine($input['division'] ?? '');
$estimatedVolume = sanitizeLine($input['estimated_volume'] ?? '');
$source          = sanitizeLine($input['source'] ?? 'Website RFQ Form');
$message         = trim((string)($input['message'] ?? ''));

if ($name === '' || $company === '' || $buyerEmail === '' || $division === '' || $estimatedVolume === '') {
    http_response_code(422);
    echo json_encode([
        'success' => false,
        'message' => 'Please complete all required fields.',
    ], JSON_UNESCAPED_UNICODE);
    exit;
}

if (!filter_var($buyerEmail, FILTER_VALIDATE_EMAIL)) {
    http_response_code(422);
    echo json_encode([
        'success' => false,
        'message' => 'Please provide a valid business email address.',
    ], JSON_UNESCAPED_UNICODE);
    exit;
}

// Normalize optional CC emails
$ccList = [];
if (is_string($rawCc) && trim($rawCc) !== '') {
    $rawCc = explode(',', $rawCc);
}
if (is_array($rawCc)) {
    foreach ($rawCc as $addr) {
        $clean = sanitizeLine($addr);
        if ($clean !== '' && filter_var($clean, FILTER_VALIDATE_EMAIL) && strcasecmp($clean, $toEmail) !== 0) {
            $ccList[] = $clean;
        }
    }
}
$ccList = array_values(array_unique($ccList));

/**
 * Read single-line or multi-line SMTP response.
 * Returns [int $code, string $message].
 */
function smtpRead($socket): array
{
    $lines = [];
    $code = 0;

    while (!feof($socket)) {
        $line = fgets($socket, 1024);
        if ($line === false) {
            break;
        }
        $trimmed = rtrim($line, "\r\n");
        $lines[] = $trimmed;

        if (preg_match('/^(\d{3})([ -])(.*)$/', $trimmed, $matches)) {
            $code = (int)$matches[1];
            if ($matches[2] === ' ') {
                break;
            }
        } else {
            break;
        }
    }

    return [$code, implode(' | ', $lines)];
}

/**
 * Send one SMTP command and validate expected status code(s).
 */
function smtpExpect($socket, ?string $command, array $expectedCodes, string $step): array
{
    if ($command !== null) {
        $written = fwrite($socket, $command . "\r\n");
        if ($written === false) {
            return [false, "SMTP write failed during {$step}."];
        }
    }

    [$code, $resp] = smtpRead($socket);
    if (!in_array($code, $expectedCodes, true)) {
        $detail = $resp !== '' ? $resp : 'No response from SMTP server';
        return [false, "SMTP error at {$step} (code {$code}): {$detail}"];
    }

    return [true, $resp];
}

// Build UTF-8 plain-text email body
$submittedAt = gmdate('Y-m-d H:i:s') . ' UTC';
$textBody = implode("\r\n", [
    'New B2B RFQ Inquiry — Haikou Shengtai Tropical-Crop Co., Ltd.',
    '==============================================================',
    "Full Name:        {$name}",
    "Company Name:     {$company}",
    "Business Email:   {$buyerEmail}",
    "Division:         {$division}",
    "Estimated Volume: {$estimatedVolume}",
    "Source Page:      {$source}",
    "Submitted At:     {$submittedAt}",
    '',
    'Technical Requirements / Message:',
    '--------------------------------------------------------------',
    $message !== '' ? str_replace(["\r\n", "\r", "\n"], "\r\n", $message) : '(No additional technical notes provided)',
    '',
]);

$subjectPlain   = "New B2B RFQ Inquiry — {$company} ({$name})";
$subjectEncoded = '=?UTF-8?B?' . base64_encode($subjectPlain) . '?=';
$messageId      = sprintf('<%s.%s@haikoushengtaitropical.com>', bin2hex(random_bytes(8)), time());

$headers = [
    'Date: ' . gmdate('r'),
    'Message-ID: ' . $messageId,
    'From: "Haikou Shengtai Website" <' . $smtpUser . '>',
    'To: ' . $toEmail,
];

if (count($ccList) > 0) {
    $headers[] = 'Cc: ' . implode(', ', $ccList);
}

$headers[] = 'Reply-To: ' . $buyerEmail;
$headers[] = 'Subject: ' . $subjectEncoded;
$headers[] = 'MIME-Version: 1.0';
$headers[] = 'Content-Type: text/plain; charset=UTF-8';
$headers[] = 'Content-Transfer-Encoding: base64';

$mimePayload = implode("\r\n", $headers)
    . "\r\n\r\n"
    . chunk_split(base64_encode($textBody), 76, "\r\n")
    . "\r\n.";

// Connect via SSL/TLS to Hostinger SMTP
$sslContext = stream_context_create([
    'ssl' => [
        'verify_peer' => true,
        'verify_peer_name' => true,
        'allow_self_signed' => false,
    ],
]);

$errno = 0;
$errstr = '';
$socket = @stream_socket_client(
    "ssl://{$smtpHost}:{$smtpPort}",
    $errno,
    $errstr,
    15,
    STREAM_CLIENT_CONNECT,
    $sslContext
);

if ($socket === false) {
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'message' => "SMTP connection failed ({$errno}): {$errstr}",
    ], JSON_UNESCAPED_UNICODE);
    exit;
}

stream_set_timeout($socket, 15);

$fail = static function (string $msg) use ($socket): never {
    @fwrite($socket, "QUIT\r\n");
    @fclose($socket);
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'message' => $msg,
    ], JSON_UNESCAPED_UNICODE);
    exit;
};

[$ok, $err] = smtpExpect($socket, null, [220], 'server greeting');
if (!$ok) {
    $fail($err);
}

[$ok, $err] = smtpExpect($socket, 'EHLO haikoushengtaitropical.com', [250], 'EHLO');
if (!$ok) {
    $fail($err);
}

[$ok, $err] = smtpExpect($socket, 'AUTH LOGIN', [334], 'AUTH LOGIN');
if (!$ok) {
    $fail($err);
}

[$ok, $err] = smtpExpect($socket, base64_encode($smtpUser), [334], 'AUTH username');
if (!$ok) {
    $fail($err);
}

// Never leak smtp_pass in error responses
[$ok, $err] = smtpExpect($socket, base64_encode($smtpPass), [235], 'AUTH password');
if (!$ok) {
    $fail('SMTP authentication failed. Check server SMTP credentials.');
}

[$ok, $err] = smtpExpect($socket, "MAIL FROM:<{$smtpUser}>", [250], 'MAIL FROM');
if (!$ok) {
    $fail($err);
}

$recipients = array_merge([$toEmail], $ccList);
foreach ($recipients as $rcpt) {
    [$ok, $err] = smtpExpect($socket, "RCPT TO:<{$rcpt}>", [250, 251], "RCPT TO ({$rcpt})");
    if (!$ok) {
        $fail($err);
    }
}

[$ok, $err] = smtpExpect($socket, 'DATA', [354], 'DATA command');
if (!$ok) {
    $fail($err);
}

[$ok, $err] = smtpExpect($socket, $mimePayload, [250], 'DATA transmission');
if (!$ok) {
    $fail($err);
}

@fwrite($socket, "QUIT\r\n");
@fclose($socket);

http_response_code(200);
echo json_encode([
    'success' => true,
    'message' => 'Inquiry sent successfully.',
], JSON_UNESCAPED_UNICODE);
