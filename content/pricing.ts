/** Pricing packages. Values live here so no price is ever hardcoded inside a component. */

export interface PricingTier {
  id: string
  name: string
  /** Entry price, e.g. "€700". */
  price: string
  /** Prefix shown before the price, e.g. "From". */
  pricePrefix?: string
  /** Recurring add-on, e.g. "+€350/month". */
  recurring?: string
  description: string
  features: string[]
  cta: string
  /** The visually highlighted package. Exactly one tier should set this. */
  highlighted: boolean
}

export const pricingNote = 'Prices are indicative. Every project is quoted against what it actually needs.'

export const pricingTiers: PricingTier[] = [
  {
    id: 'start',
    name: 'Start',
    pricePrefix: 'From',
    price: '€700',
    description: 'For businesses that need a professional presence online.',
    features: [
      'Custom website',
      'Responsive design',
      'Basic SEO',
      'Contact form',
      'Analytics',
      'Deployment and setup',
    ],
    cta: 'Start a project',
    highlighted: false,
  },
  {
    id: 'growth',
    name: 'Growth',
    pricePrefix: 'From',
    price: '€1,500',
    recurring: '+€350/month',
    description: 'For businesses that want the site to sell, not just to look the part.',
    features: [
      'Everything in Start',
      'Advanced UX/UI',
      'CMS where it is needed',
      'Conversion optimisation',
      'SEO foundation',
      'Analytics and reporting',
      'Monthly improvements',
    ],
    cta: 'Choose Growth',
    highlighted: true,
  },
  {
    id: 'partner',
    name: 'Partner',
    price: '€600–900',
    recurring: '/month',
    description: 'For businesses that need an ongoing digital partner.',
    features: [
      'Continuous improvements',
      'Landing pages',
      'Performance optimisation',
      'Website maintenance',
      'Technical support',
      'Monthly strategy',
    ],
    cta: 'Become a partner',
    highlighted: false,
  },
]
