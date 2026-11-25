export interface RfqPayload {
  fullName: string;
  companyName: string;
  email: string;
  division: string;
  volume: string;
  message: string;
  botcheck?: boolean;
  source: string;
}

export interface RfqSubmitResult {
  ok: boolean;
  error?: string;
}

/**
 * Submits a B2B RFQ via Web3Forms (`https://api.web3forms.com/submit`)
 * using `process.env.NEXT_PUBLIC_WEB3FORMS_KEY`.
 */
export async function submitRfq(payload: RfqPayload): Promise<RfqSubmitResult> {
  // Honeypot guard — silently reject automated bot submissions
  if (payload.botcheck) {
    return { ok: true };
  }

  const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_KEY?.trim();

  if (!accessKey) {
    return {
      ok: false,
      error: "missing_access_key",
    };
  }

  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: accessKey,
        subject: `New B2B RFQ Inquiry — ${payload.companyName || payload.fullName} (Haikou Shengtai)`,
        from_name: "Haikou Shengtai Website",
        replyto: payload.email,
        botcheck: false,
        name: payload.fullName,
        company: payload.companyName,
        email: payload.email,
        division: payload.division,
        estimated_volume: payload.volume,
        message: payload.message || "(No additional technical notes provided)",
        source: payload.source,
      }),
    });

    const data = (await response.json()) as {
      success?: boolean;
      message?: string;
    };

    if (!response.ok || !data.success) {
      return {
        ok: false,
        error: data.message || "request_failed",
      };
    }

    return { ok: true };
  } catch {
    return {
      ok: false,
      error: "network_error",
    };
  }
}
