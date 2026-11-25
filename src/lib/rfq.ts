export interface RfqPayload {
  fullName: string;
  companyName: string;
  email: string;
  division: string;
  volume: string;
  message: string;
  website?: string;
  source: string;
}

export interface RfqSubmitResult {
  ok: boolean;
  error?: string;
}

/**
 * Submits a B2B RFQ directly to the Hostinger PHP SMTP endpoint (`/api/rfq.php`).
 * Returns `{ ok: true }` ONLY when the server responds with `response.ok && data.success === true`.
 */
export async function submitRfq(payload: RfqPayload): Promise<RfqSubmitResult> {
  const requestBody: Record<string, string> = {
    name: payload.fullName,
    company: payload.companyName,
    email: payload.email,
    division: payload.division,
    estimated_volume: payload.volume,
    message: payload.message,
    source: payload.source,
  };

  if (payload.website && payload.website.trim() !== "") {
    requestBody.website = payload.website;
  }

  try {
    const response = await fetch("/api/rfq.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(requestBody),
    });

    let data: { success?: boolean; message?: string } = {};
    try {
      data = (await response.json()) as { success?: boolean; message?: string };
    } catch {
      return {
        ok: false,
        error: `Unexpected server response (HTTP ${response.status}).`,
      };
    }

    if (!response.ok || data.success !== true) {
      return {
        ok: false,
        error: data.message || `Request failed (HTTP ${response.status}).`,
      };
    }

    return { ok: true };
  } catch {
    return {
      ok: false,
      error: "Network error while contacting mail server.",
    };
  }
}
