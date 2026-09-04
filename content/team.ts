/**
 * PLACEHOLDER TEAM.
 *
 * Fictional roles used to show the layout. No photographs of real people are used here —
 * members render as typographic initials, so nobody is misrepresented as working at Nexa.
 * Replace with the real team before launch.
 */

export interface TeamMember {
  id: string
  /** Initials shown in the typographic avatar. */
  initials: string
  name: string
  role: string
  focus: string
  isPlaceholder: boolean
}

export const teamIsPlaceholder = true

export const team: TeamMember[] = [
  {
    id: 'placeholder-strategy',
    initials: 'ST',
    name: 'Placeholder name',
    role: 'Strategy & UX',
    focus: 'Content structure, user flows, and what the site has to achieve.',
    isPlaceholder: true,
  },
  {
    id: 'placeholder-design',
    initials: 'AD',
    name: 'Placeholder name',
    role: 'Art direction',
    focus: 'Visual direction, typography, and how the brand looks at every touchpoint.',
    isPlaceholder: true,
  },
  {
    id: 'placeholder-engineering',
    initials: 'EN',
    name: 'Placeholder name',
    role: 'Engineering',
    focus: 'Clean code, speed, accessibility, and systems that stay easy to maintain.',
    isPlaceholder: true,
  },
]

export interface Value {
  title: string
  description: string
}

export const values: Value[] = [
  { title: 'Clarity', description: 'Every project starts with a clear objective.' },
  { title: 'Craft', description: 'The details are what make the difference.' },
  { title: 'Speed', description: 'We work fast without trading away quality.' },
  { title: 'Partnership', description: 'We do not want to be just a supplier. We want to be a partner.' },
]
