/**
 * Single place to change the deployment domain, contact details and social handles.
 * Everything else in the app reads from here.
 */

/** Used whenever NEXT_PUBLIC_SITE_URL is absent, blank or unparseable. */
const FALLBACK_SITE_URL = 'https://nexa.studio'

/**
 * Resolves the public origin.
 *
 * `metadataBase` feeds this straight into `new URL()`, which throws and fails the whole
 * build if the value is empty — and a hosting provider setting the variable to an empty
 * string is exactly the case `??` does not catch, since '' is neither null nor undefined.
 * So the value is trimmed, given a protocol if it lacks one, and parsed; anything invalid
 * falls back rather than breaking the build.
 */
function resolveSiteUrl(): string {
  const configured = process.env.NEXT_PUBLIC_SITE_URL?.trim()
  if (!configured) return FALLBACK_SITE_URL

  const withProtocol = /^https?:\/\//i.test(configured) ? configured : `https://${configured}`

  try {
    const url = new URL(withProtocol)
    // Keep any base path, drop the trailing slash so joined URLs never double up.
    return `${url.origin}${url.pathname}`.replace(/\/$/, '')
  } catch {
    return FALLBACK_SITE_URL
  }
}

export const siteConfig = {
  name: 'Nexa',
  /**
   * Production origin, without a trailing slash. Override with NEXT_PUBLIC_SITE_URL,
   * or change FALLBACK_SITE_URL above.
   */
  url: resolveSiteUrl(),
  tagline: 'Ndërtojmë ueb-faqe që sjellin klientë, jo vetëm dizajn.',
  supporting: 'Strategji. Dizajn. Zhvillim. Rritje.',
  description:
    'Nexa është studio digjitale nga Prishtina. Dizajnojmë dhe zhvillojmë ueb-faqe moderne për biznese në Kosovë dhe jashtë saj.',
  locale: 'sq_AL',
  // Placeholder contact details — replace with the real ones.
  contact: {
    city: 'Prishtinë, Kosovë',
    email: 'hello@nexa.studio',
    phone: '+383 44 000 000',
    /** Digits only, for tel: links. */
    phoneHref: '+38344000000',
  },
  social: {
    instagram: 'https://instagram.com/',
    linkedin: 'https://linkedin.com/',
  },
  /** Where the primary CTA points. Swap for a Cal.com / Calendly link when one exists. */
  bookingHref: '/kontakt',
} as const

export const navigation = [
  { href: '/sherbimet', label: 'Shërbimet' },
  { href: '/pune', label: 'Punët' },
  { href: '/rreth-nesh', label: 'Rreth nesh' },
  { href: '/kontakt', label: 'Kontakt' },
] as const

export const ctas = {
  primary: 'Rezervo thirrje 15 min',
  primaryShort: 'Rezervo thirrje',
  secondary: 'Shiko punët',
} as const
