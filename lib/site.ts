/**
 * Single place to change the deployment domain, contact details and social handles.
 * Everything else in the app reads from here.
 */
export const siteConfig = {
  name: 'Nexa',
  /** Replace with the production origin before launch. No trailing slash. */
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://nexa.studio',
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
