import { Resend } from "resend";
import { config } from "./config.js";

const pathLabels: Record<string, string> = {
  validate: "Validate first",
  build: "Build now",
  fix: "Fix what's broken",
  keep: "Keep it running",
  "not-sure": "Not sure yet",
};

const whatsappUrl = "https://wa.me/918337945472";
const whatsappNumber = "+918337945472";

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function emailShell(preheader: string, content: string) {
  return `<!DOCTYPE html>
<html lang="en">
  <body style="margin:0;padding:0;background:#160b1b;">
    <div style="display:none;max-height:0;overflow:hidden;">${preheader}</div>
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#160b1b;padding:32px 16px;">
      <tr>
        <td align="center">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;background:#2e1a35;border:1px solid #432f4a;border-radius:20px;">
            <tr>
              <td style="padding:36px 36px 8px;font-family:Georgia,'Times New Roman',serif;font-size:28px;line-height:1;color:#f4eef2;">
                <span style="color:#e9a23c;font-family:Consolas,monospace;font-size:22px;">+</span> idaafa
              </td>
            </tr>
            ${content}
            <tr>
              <td style="padding:28px 36px 36px;font-family:Consolas,monospace;font-size:12px;letter-spacing:0.08em;text-transform:uppercase;color:#8ea3bd;">
                Adding what's missing.
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}

function autoReplyHtml(name: string) {
  const safeName = escapeHtml(name);

  return emailShell(
    "We've got your note. We'll reply within two working days.",
    `<tr>
      <td style="padding:8px 36px 0;font-family:Georgia,'Times New Roman',serif;font-size:32px;line-height:1.15;color:#f4eef2;">
        Thanks, we've got your note.
      </td>
    </tr>
    <tr>
      <td style="padding:22px 36px 0;font-family:'Segoe UI',Helvetica,Arial,sans-serif;font-size:16px;line-height:1.6;color:#f4eef2;">
        Hi ${safeName},
      </td>
    </tr>
    <tr>
      <td style="padding:12px 36px 0;font-family:'Segoe UI',Helvetica,Arial,sans-serif;font-size:16px;line-height:1.6;color:#8ea3bd;">
        Thanks for reaching out to idaafa. Your message landed with us and we'll get back to you within two working days.
      </td>
    </tr>
    <tr>
      <td style="padding:22px 36px 0;font-family:'Segoe UI',Helvetica,Arial,sans-serif;font-size:16px;line-height:1.6;color:#8ea3bd;">
        If it's urgent, message us on WhatsApp
      </td>
    </tr>
    <tr>
      <td style="padding:8px 36px 0;">
        <a href="${whatsappUrl}" style="color:#e9a23c;font-family:'Segoe UI',Helvetica,Arial,sans-serif;font-size:20px;font-weight:700;text-decoration:none;">${whatsappNumber}</a>
      </td>
    </tr>
    <tr>
      <td style="padding:28px 36px 0;font-family:'Segoe UI',Helvetica,Arial,sans-serif;font-size:16px;line-height:1.6;color:#f4eef2;">
        Talk soon,<br />The idaafa team
      </td>
    </tr>`,
  );
}

function leadField(label: string, value: string) {
  return `<tr>
    <td style="padding:14px 0 0;font-family:Consolas,monospace;font-size:11px;letter-spacing:0.12em;text-transform:uppercase;color:#8ea3bd;">
      ${label}
    </td>
  </tr>
  <tr>
    <td style="padding:4px 0 0;font-family:'Segoe UI',Helvetica,Arial,sans-serif;font-size:16px;line-height:1.5;color:#f4eef2;">
      ${value}
    </td>
  </tr>`;
}

function leadNotificationHtml({
  name,
  email,
  company,
  pathLabel,
  message,
}: {
  name: string;
  email: string;
  company: string;
  pathLabel: string;
  message: string;
}) {
  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeCompany = escapeHtml(company);
  const safePath = escapeHtml(pathLabel);
  const safeMessage = escapeHtml(message).replaceAll("\n", "<br />");

  return emailShell(
    `New lead from ${safeName}. ${safePath}.`,
    `<tr>
      <td style="padding:8px 36px 0;font-family:Georgia,'Times New Roman',serif;font-size:32px;line-height:1.15;color:#f4eef2;">
        New lead.
      </td>
    </tr>
    <tr>
      <td style="padding:16px 36px 0;font-family:'Segoe UI',Helvetica,Arial,sans-serif;font-size:16px;line-height:1.6;color:#8ea3bd;">
        Someone just sent a note. Reply from here and it goes straight to them.
      </td>
    </tr>
    <tr>
      <td style="padding:8px 36px 0;">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
          ${leadField("Name", safeName)}
          ${leadField("Email", `<a href="mailto:${safeEmail}" style="color:#e9a23c;text-decoration:none;">${safeEmail}</a>`)}
          ${leadField("Company or product", safeCompany)}
          ${leadField("Where they are", `<span style="color:#e9a23c;">${safePath}</span>`)}
        </table>
      </td>
    </tr>
    <tr>
      <td style="padding:22px 36px 0;font-family:Consolas,monospace;font-size:11px;letter-spacing:0.12em;text-transform:uppercase;color:#8ea3bd;">
        Message
      </td>
    </tr>
    <tr>
      <td style="padding:8px 36px 0;">
        <div style="background:#160b1b;border-radius:14px;padding:16px 18px;font-family:'Segoe UI',Helvetica,Arial,sans-serif;font-size:16px;line-height:1.6;color:#f4eef2;">
          ${safeMessage}
        </div>
      </td>
    </tr>`,
  );
}

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
      replyTo: email,
      subject: `New lead: ${name} · ${pathLabel}`,
      html: leadNotificationHtml({ name, email, company: companyLine, pathLabel, message }),
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
      html: autoReplyHtml(name),
      text: [
        `Hi ${name},`,
        "",
        "Thanks for reaching out to idaafa. Your message landed with us and we'll get back to you within two working days.",
        "",
        `If it's urgent, message us on WhatsApp: ${whatsappNumber}`,
        "",
        "Team Idaafa",
      ].join("\n"),
    }),
  ]);

  console.info("Notification email id:", notification.data?.id);
  console.info("Auto-reply email id:", autoReply.data?.id);
}
