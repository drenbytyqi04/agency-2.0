/**
 * PLACEHOLDER TESTIMONIALS.
 *
 * These are written examples, not statements from real clients. Nexa has no relationship
 * with the names below — they are fictional and marked as such so the UI can label them.
 * Replace with real, attributable quotes (with permission) before launch.
 */

export interface Testimonial {
  id: string
  quote: string
  /** Fictional attribution. */
  author: string
  role: string
  /** Always true while this file holds demonstration content. */
  isPlaceholder: boolean
}

export const testimonialsArePlaceholder = true

export const testimonials: Testimonial[] = [
  {
    id: 'placeholder-1',
    quote:
      'Website-i i ri na dha një prezencë shumë më profesionale dhe procesi i rezervimeve u bë shumë më i thjeshtë.',
    author: 'Klient demonstrues',
    role: 'Hotelieri',
    isPlaceholder: true,
  },
  {
    id: 'placeholder-2',
    quote:
      'Për herë të parë e kuptojmë se nga vijnë kërkesat. Faqja nuk është vetëm e bukur, është e matshme.',
    author: 'Klient demonstrues',
    role: 'Shërbime profesionale',
    isPlaceholder: true,
  },
  {
    id: 'placeholder-3',
    quote:
      'Punuan shpejt dhe pa zhurmë. Çdo pyetje mori përgjigje të qartë, edhe kur përgjigjja ishte “kjo nuk ia vlen”.',
    author: 'Klient demonstrues',
    role: 'Retail',
    isPlaceholder: true,
  },
]
