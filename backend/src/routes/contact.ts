import { Router, type Request, type Response } from "express";
import { insertLead } from "../db.js";
import { sendLeadEmails } from "../email.js";
import { isRateLimited } from "../rateLimit.js";
import { verifyTurnstile } from "../turnstile.js";
import { contactSchema, formatValidationErrors } from "../validation.js";

export const contactRouter = Router();

contactRouter.post("/contact", async (req: Request, res: Response) => {
  const parsed = contactSchema.safeParse(req.body);

  if (!parsed.success) {
    return res.status(400).json({
      success: false,
      message: "Please fix the highlighted fields.",
      errors: formatValidationErrors(parsed.error),
    });
  }

  const payload = parsed.data;

  if (payload.website) {
    return res.status(400).json({
      success: false,
      message: "Invalid submission.",
    });
  }

  const clientIp = req.ip || req.socket.remoteAddress || "unknown";
  const userAgent = req.get("user-agent") ?? "unknown";

  if (isRateLimited(clientIp)) {
    return res.status(429).json({
      success: false,
      message:
        "That's a lot of tries in a row. Give it a minute, or email us at contact@idaafa.com.",
    });
  }

  const turnstileOk = await verifyTurnstile(payload.turnstileToken ?? "", clientIp);
  if (!turnstileOk) {
    return res.status(400).json({
      success: false,
      message:
        "We couldn't tell you're human. Refresh and try again, or email contact@idaafa.com.",
    });
  }

  try {
    await insertLead({
      name: payload.name,
      email: payload.email,
      company: payload.company,
      path: payload.path,
      message: payload.message,
      ip: clientIp,
      userAgent,
    });
  } catch (error) {
    console.error("Failed to save lead", error);
    return res.status(500).json({
      success: false,
      message:
        "Something broke on our end. Email us at contact@idaafa.com and we'll pick it up.",
    });
  }

  try {
    await sendLeadEmails({
      name: payload.name,
      email: payload.email,
      company: payload.company,
      path: payload.path,
      message: payload.message,
    });
  } catch (error) {
    console.error(`Lead saved but email delivery failed for ${payload.email}`, error);
  }

  return res.json({
    success: true,
    message: "Got it. We'll come back to you within two working days.",
  });
});
