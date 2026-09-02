import { NextResponse } from 'next/server';
import { Resend } from 'resend';

import { contactSchema } from '@/lib/contact-schema';
import { site } from '@/content/site';

/**
 * Contact form handler.
 *
 * Order matters: validate, then verify the human check, then send. Each step
 * fails closed. The client's own validation is treated as advisory — a raw
 * POST bypassing the form hits exactly the same checks.
 */

const TURNSTILE_VERIFY_URL = 'https://challenges.cloudflare.com/turnstile/v0/siteverify';

async function verifyTurnstile(token: string | undefined, ip: string | null) {
  const secret = process.env.TURNSTILE_SECRET_KEY;

  // No secret configured (local dev, or before Turnstile is set up): skip the
  // check rather than blocking every submission. Logged so it cannot be
  // silently the case in production.
  if (!secret) {
    console.warn('[contact] TURNSTILE_SECRET_KEY not set — skipping bot verification.');
    return true;
  }

  if (!token) return false;

  const body = new URLSearchParams({ secret, response: token });
  if (ip) body.append('remoteip', ip);

  try {
    const res = await fetch(TURNSTILE_VERIFY_URL, { method: 'POST', body });
    const data = (await res.json()) as { success: boolean };
    return data.success === true;
  } catch (error) {
    console.error('[contact] Turnstile verification failed', error);
    return false;
  }
}

export async function POST(request: Request) {
  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: 'Malformed request.' }, { status: 400 });
  }

  const parsed = contactSchema.safeParse(payload);
  if (!parsed.success) {
    return NextResponse.json(
      {
        ok: false,
        error: 'Please check the form and try again.',
        issues: parsed.error.issues.map((i) => ({ path: i.path.join('.'), message: i.message })),
      },
      { status: 400 },
    );
  }

  const { name, email, company, service, message, token, website } = parsed.data;

  // Honeypot filled means a bot. Return 200 so it does not learn anything.
  if (website) {
    return NextResponse.json({ ok: true });
  }

  const ip =
    request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ??
    request.headers.get('x-real-ip');

  if (!(await verifyTurnstile(token, ip))) {
    return NextResponse.json(
      { ok: false, error: 'We could not verify that you are human. Please try again.' },
      { status: 400 },
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error('[contact] RESEND_API_KEY is not set — cannot deliver enquiry from', email);
    return NextResponse.json(
      {
        ok: false,
        error: `Our form is not delivering mail right now. Please email us directly at ${site.email}.`,
      },
      { status: 503 },
    );
  }

  // Until the sending domain is verified in Resend, fall back to their
  // onboarding sender so the form works rather than silently failing.
  const from = process.env.CONTACT_FROM_EMAIL ?? 'DevMations <onboarding@resend.dev>';
  const to = process.env.CONTACT_TO_EMAIL ?? site.email;

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from,
      to,
      replyTo: email,
      subject: `New enquiry — ${name}${company ? ` (${company})` : ''}`,
      text: [
        `Name:    ${name}`,
        `Email:   ${email}`,
        `Company: ${company || '—'}`,
        `Service: ${service || '—'}`,
        '',
        message,
      ].join('\n'),
    });

    if (error) {
      console.error('[contact] Resend rejected the message', error);
      return NextResponse.json(
        { ok: false, error: `Something went wrong sending that. Please email ${site.email}.` },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error('[contact] Unexpected failure', error);
    return NextResponse.json(
      { ok: false, error: `Something went wrong sending that. Please email ${site.email}.` },
      { status: 500 },
    );
  }
}
