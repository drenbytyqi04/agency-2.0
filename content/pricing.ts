/** Pricing packages. Values live here so no price is ever hardcoded inside a component. */

export interface PricingTier {
  id: string
  name: string
  /** Entry price, e.g. "700€". */
  price: string
  /** Prefix shown before the price, e.g. "Nga". */
  pricePrefix?: string
  /** Recurring add-on, e.g. "+350€/muaj". */
  recurring?: string
  description: string
  features: string[]
  cta: string
  /** The visually highlighted package. Exactly one tier should set this. */
  highlighted: boolean
}

export const pricingNote = 'Çmimet janë orientuese. Çdo projekt vlerësohet sipas nevojave.'

export const pricingTiers: PricingTier[] = [
  {
    id: 'start',
    name: 'Start',
    pricePrefix: 'Nga',
    price: '700€',
    description: 'Për biznese që u duhet një prezencë profesionale online.',
    features: [
      'Website i personalizuar',
      'Dizajn responsiv',
      'SEO bazë',
      'Formular kontakti',
      'Analytics',
      'Publikim dhe konfigurim',
    ],
    cta: 'Fillo projektin',
    highlighted: false,
  },
  {
    id: 'growth',
    name: 'Growth',
    pricePrefix: 'Nga',
    price: '1.500€',
    recurring: '+350€/muaj',
    description: 'Për biznese që duan ta përdorin ueb-faqen për të shitur, jo vetëm për t’u dukur.',
    features: [
      'Gjithçka nga Start',
      'UX/UI i avancuar',
      'CMS aty ku nevojitet',
      'Optimizim për konvertim',
      'Themel SEO',
      'Analytics dhe raportim',
      'Përmirësime mujore',
    ],
    cta: 'Zgjidh Growth',
    highlighted: true,
  },
  {
    id: 'partner',
    name: 'Partner',
    price: '600–900€',
    recurring: '/muaj',
    description: 'Për biznese që u duhet një partner i vazhdueshëm digjital.',
    features: [
      'Përmirësime të vazhdueshme',
      'Landing pages',
      'Optimizim performance',
      'Mirëmbajtje e ueb-faqes',
      'Mbështetje teknike',
      'Strategji mujore',
    ],
    cta: 'Bëhu partner',
    highlighted: false,
  },
]
