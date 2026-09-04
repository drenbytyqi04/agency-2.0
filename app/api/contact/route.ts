import { NextResponse } from 'next/server'

/**
 * Contact endpoint.
 *
 * Validates the payload and returns JSON. It deliberately does not send email yet.
 *
 * TODO: integrate an email provider (Resend or SendGrid). Read the API key from an
 * environment variable inside this route — never expose it to the client — and send the
 * validated `data` object below to the studio inbox. Consider adding rate limiting and a
 * spam check (honeypot field or a captcha) at the same time.
 */

const BUDGETS = [
  'Under €700',
  '€700–€1,500',
  '€1,500–€3,000',
  'Over €3,000',
  'Not sure yet',
] as const

interface ContactPayload {
  name: string
  email: string
  business: string
  budget: string
  message: string
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

function validate(body: Partial<ContactPayload>): Record<string, string> {
  const errors: Record<string, string> = {}

  if (!body.name?.trim() || body.name.trim().length < 2) {
    errors.name = 'Please enter your name.'
  }
  if (!body.email?.trim() || !EMAIL_PATTERN.test(body.email.trim())) {
    errors.email = 'Please enter a valid email address.'
  }
  if (!body.message?.trim() || body.message.trim().length < 10) {
    errors.message = 'Tell us briefly about the project (at least 10 characters).'
  }
  if (body.budget && !BUDGETS.includes(body.budget as (typeof BUDGETS)[number])) {
    errors.budget = 'Invalid selection.'
  }
  // Length caps keep an abusive payload from reaching the mail provider later.
  if (body.message && body.message.length > 4000) {
    errors.message = 'That message is too long.'
  }

  return errors
}

export async function POST(request: Request) {
  let body: Partial<ContactPayload>

  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ ok: false, error: 'Invalid request.' }, { status: 400 })
  }

  const errors = validate(body)

  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ ok: false, errors }, { status: 422 })
  }

  const data: ContactPayload = {
    name: body.name!.trim(),
    email: body.email!.trim(),
    business: body.business?.trim() ?? '',
    budget: body.budget ?? '',
    message: body.message!.trim(),
  }

  // TODO: replace with the email provider call described above.
  console.info('[contact] new enquiry', { email: data.email, budget: data.budget })

  return NextResponse.json({ ok: true, message: 'Thank you. We will get back to you within 24 hours.' })
}
