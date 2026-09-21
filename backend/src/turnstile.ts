import { config } from "./config.js";

export async function verifyTurnstile(token: string, remoteIp?: string): Promise<boolean> {
  if (!config.turnstileSecretKey) {
    return true;
  }

  const payload = new URLSearchParams({
    secret: config.turnstileSecretKey,
    response: token,
  });

  if (remoteIp) {
    payload.set("remoteip", remoteIp);
  }

  const response = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: payload,
  });

  if (!response.ok) {
    return false;
  }

  const data = (await response.json()) as { success?: boolean };
  return Boolean(data.success);
}
