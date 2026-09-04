/**
 * PLACEHOLDER BRAND NAMES for the trust marquee.
 *
 * These are invented names used as visual placeholders. They are NOT Nexa clients and must
 * not be presented as such. The marquee labels them as demonstration content in the UI.
 */
export const placeholderClients = ['ALBA', 'MIRA', 'NOVA', 'KORA', 'FORMA', 'NORDIC'] as const

export const clientsArePlaceholder = true

export const processSteps = [
  {
    index: '01',
    title: 'Discovery',
    description: 'We learn the business, the goals, and what the website actually has to achieve.',
  },
  {
    index: '02',
    title: 'Design',
    description: 'We set the visual direction and the experience that makes the brand stand apart.',
  },
  {
    index: '03',
    title: 'Development',
    description: 'We build it with clean, fast, well-structured code.',
  },
  {
    index: '04',
    title: 'Launch & growth',
    description: 'We ship it, test it, and keep improving it.',
  },
] as const
