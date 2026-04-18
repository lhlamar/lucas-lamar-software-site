import { NextResponse } from "next/server";
import { Resend } from "resend";

type ContactPayload = {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
};

export async function POST(request: Request) {
  const payload = (await request.json()) as ContactPayload;

  if (!payload.name || !payload.email || !payload.subject || !payload.message) {
    return NextResponse.json(
      { error: "Please fill out all required fields." },
      { status: 400 },
    );
  }

  if (!payload.email.includes("@")) {
    return NextResponse.json({ error: "Please enter a valid email." }, { status: 400 });
  }

  const resendApiKey = process.env.RESEND_API_KEY;
  if (!resendApiKey) {
    return NextResponse.json(
      { error: "Server email configuration is missing. Please set RESEND_API_KEY." },
      { status: 500 },
    );
  }

  const toEmail = process.env.CONTACT_TO_EMAIL ?? "contact@lucas-lamar.com";
  const fromEmail = process.env.CONTACT_FROM_EMAIL ?? "Portfolio Contact <contact@lucas-lamar.com>";

  const resend = new Resend(resendApiKey);

  try {
    await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      replyTo: payload.email,
      subject: `Portfolio contact: ${payload.subject}`,
      text: [
        `Name: ${payload.name}`,
        `Email: ${payload.email}`,
        "",
        "Message:",
        payload.message,
      ].join("\n"),
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.5; color: #111827;">
          <h2 style="margin: 0 0 12px;">New portfolio contact message</h2>
          <p style="margin: 0 0 8px;"><strong>Name:</strong> ${escapeHtml(payload.name ?? "")}</p>
          <p style="margin: 0 0 8px;"><strong>Email:</strong> ${escapeHtml(payload.email ?? "")}</p>
          <p style="margin: 0 0 8px;"><strong>Subject:</strong> ${escapeHtml(payload.subject ?? "")}</p>
          <p style="margin: 16px 0 8px;"><strong>Message:</strong></p>
          <p style="white-space: pre-wrap; margin: 0;">${escapeHtml(payload.message ?? "")}</p>
        </div>
      `,
    });
  } catch (error) {
    console.error("Resend send failed:", error);
    return NextResponse.json({ error: "Unable to send message right now." }, { status: 500 });
  }

  return NextResponse.json({
    message: "Message sent successfully.",
  });
}

function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}