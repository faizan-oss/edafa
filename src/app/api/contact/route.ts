import { NextResponse } from "next/server";

type ContactPayload = {
  name?: string;
  email?: string;
  message?: string;
};

export async function POST(request: Request) {
  const body = (await request.json()) as ContactPayload;

  const { name, email, message } = body;

  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    return NextResponse.json(
      { error: "Name, email, and message are required." },
      { status: 400 },
    );
  }

  // TODO: Wire up email delivery (e.g. Resend, SendGrid) or a CRM webhook.
  console.log("New contact submission:", { name, email, message });

  return NextResponse.json({ success: true });
}
