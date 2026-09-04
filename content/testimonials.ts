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
      'The new website gave us a far more professional presence, and booking became much simpler for our guests.',
    author: 'Placeholder client',
    role: 'Hospitality',
    isPlaceholder: true,
  },
  {
    id: 'placeholder-2',
    quote:
      'For the first time we understand where our enquiries come from. The site is not just good-looking, it is measurable.',
    author: 'Placeholder client',
    role: 'Professional services',
    isPlaceholder: true,
  },
  {
    id: 'placeholder-3',
    quote:
      'They worked fast and without noise. Every question got a straight answer, including when the answer was “this is not worth doing”.',
    author: 'Placeholder client',
    role: 'Retail',
    isPlaceholder: true,
  },
]
