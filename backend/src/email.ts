import { Resend } from "resend";
import { config } from "./config.js";

const pathLabels: Record<string, string> = {
  validate: "Validate first",
  build: "Build now",
  "not-sure": "Not sure yet",
};

export async function sendLeadEmails({
  name,
  email,
  company,
  path,
  message,
}: {
  name: string;
  email: string;
  company?: string;
  path: string;
  message: string;
}): Promise<void> {
  if (!config.resendApiKey) {
    console.warn("RESEND_API_KEY missing; skipping email delivery");
    return;
  }

  const resend = new Resend(config.resendApiKey);
  const pathLabel = pathLabels[path] ?? path;
  const companyLine = company || "Not provided";

  const [notification, autoReply] = await Promise.all([
    resend.emails.send({
      from: config.mailFrom,
      to: [config.mailToStudio],
      subject: `New lead: ${name} · ${pathLabel}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Company/Product: ${companyLine}`,
        `Where they are: ${pathLabel}`,
        "",
        "Message:",
        message,
      ].join("\n"),
    }),
    resend.emails.send({
      from: config.mailFrom,
      to: [email],
      replyTo: config.mailFrom,
      subject: "Thanks, we've got your note",
      text: [
        `Hi ${name},`,
        "",
        "Thanks for reaching out to idaafa. Your message landed with us and we'll get back to you within two working days.",
        "",
        "If it's urgent, message us on WhatsApp: https://wa.me/918337945472",
        "",
        "Talk soon,",
        "The idaafa team",
      ].join("\n"),
    }),
  ]);

  console.info("Notification email id:", notification.data?.id);
  console.info("Auto-reply email id:", autoReply.data?.id);
}
