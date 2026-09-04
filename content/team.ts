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
    initials: 'ND',
    name: 'Emër demonstrues',
    role: 'Strategji & UX',
    focus: 'Struktura e përmbajtjes, rrjedhat e përdoruesit dhe ajo që faqja duhet të arrijë.',
    isPlaceholder: true,
  },
  {
    id: 'placeholder-design',
    initials: 'AD',
    name: 'Emër demonstrues',
    role: 'Art direction',
    focus: 'Drejtimi vizual, tipografia dhe mënyra si marka duket në çdo pikë kontakti.',
    isPlaceholder: true,
  },
  {
    id: 'placeholder-engineering',
    initials: 'ZH',
    name: 'Emër demonstrues',
    role: 'Zhvillim',
    focus: 'Kod i pastër, shpejtësi, aksesueshmëri dhe sisteme që mbahen lehtë.',
    isPlaceholder: true,
  },
]

export interface Value {
  title: string
  description: string
}

export const values: Value[] = [
  { title: 'Qartësi', description: 'Çdo projekt fillon me një qëllim të qartë.' },
  { title: 'Kujdes', description: 'Detajet bëjnë diferencën.' },
  { title: 'Shpejtësi', description: 'Punojmë shpejt pa sakrifikuar cilësinë.' },
  { title: 'Partneritet', description: 'Nuk duam të jemi vetëm furnizues. Duam të jemi partner.' },
]
