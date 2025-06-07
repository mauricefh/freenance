// src/lib/email.ts
import { Resend } from "resend";

export async function sendVerificationEmail(email: string, url: string) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  await resend.emails.send({
    from: process.env.EMAIL_FROM!,
    to: email,
    subject: "Sign in to your account",
    html: `<p>Click <a href="${url}">here</a> to sign in.</p>`,
  });
}
