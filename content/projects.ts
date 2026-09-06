/**
 * The portfolio: delivered work only.
 *
 * Most entries set `linksToLiveSite`, so their card opens the live site and no case study
 * page is generated. A project that has a write-up can leave that off and fill in the
 * narrative fields instead — those are optional precisely so nothing is ever padded with
 * invented copy.
 */

export type ProjectCategory = 'Websites' | 'E-commerce' | 'Branding' | 'Systems'

export interface ProjectMetric {
  label: string
  value: string
}

export interface Project {
  slug: string
  title: string
  category: ProjectCategory
  /** Short descriptor shown under the title, e.g. the sector. */
  sector: string
  year: string
  /** Optional: a project shown as a straight link out may carry no blurb at all. */
  description?: string
  /** Public URL of the live site, when there is one to link to. */
  liveUrl?: string
  /**
   * When true the card opens `liveUrl` directly and no case study page is generated.
   * For work that speaks for itself and has no write-up behind it.
   */
  linksToLiveSite?: boolean
  image: string
  gallery: string[]
  featured: boolean
  intro: string
  /**
   * The case-study narrative. Optional on purpose: a project should never carry a story
   * written from guesswork. Sections with nothing to say are omitted rather than filled.
   */
  challenge?: string
  approach?: string
  solution?: string
  result?: string
  /**
   * Optional. Only include numbers that can actually be stood behind.
   */
  metrics?: ProjectMetric[]
}

export const projects: Project[] = [
  {
    slug: 'az-napoli',
    title: 'AZ Napoli',
    category: 'Websites',
    sector: 'Webflow template',
    year: '2026',
    liveUrl: 'https://az-napoli.webflow.io/aboutus',
    linksToLiveSite: true,
    image: '/images/projects/az-napoli-01.webp',
    gallery: [],
    featured: true,
    intro: '',
  },

  {
    slug: 'az-utah',
    title: 'AZ Utah',
    category: 'Websites',
    sector: 'Webflow template',
    year: '2026',
    liveUrl: 'https://az-utah.webflow.io/home',
    linksToLiveSite: true,
    image: '/images/projects/az-utah-01.png',
    gallery: [],
    featured: true,
    intro: '',
  },

  {
    slug: 'az-iowa',
    title: 'AZ Iowa',
    category: 'Websites',
    sector: 'Webflow template',
    year: '2026',
    liveUrl: 'https://az-lowa.webflow.io/home/home-v1',
    linksToLiveSite: true,
    image: '/images/projects/az-iowa-01.avif',
    gallery: [],
    featured: true,
    intro: '',
  },

  {
    slug: 'az-vermont',
    title: 'AZ Vermont',
    category: 'Websites',
    sector: 'Webflow template',
    year: '2026',
    liveUrl: 'https://az-vermont.webflow.io/home',
    linksToLiveSite: true,
    image: '/images/projects/az-vermont-01.png',
    gallery: [],
    featured: true,
    intro: '',
  },

  {
    slug: 'az-montana',
    title: 'AZ Montana',
    category: 'Websites',
    sector: 'Webflow template',
    year: '2026',
    liveUrl: 'https://az-montana.webflow.io/home',
    linksToLiveSite: true,
    image: '/images/projects/az-montana-01.png',
    gallery: [],
    featured: true,
    intro: '',
  },

  {
    slug: 'az-melbourne',
    title: 'AZ Melbourne',
    category: 'Websites',
    sector: 'Webflow template',
    year: '2026',
    liveUrl: 'https://az-melbourne.webflow.io/home',
    linksToLiveSite: true,
    image: '/images/projects/az-melbourne-01.png',
    gallery: [],
    featured: true,
    intro: '',
  },

  {
    slug: 'az-bali',
    title: 'AZ Bali',
    category: 'Websites',
    sector: 'Webflow template',
    year: '2026',
    liveUrl: 'https://az-bali.webflow.io/home',
    linksToLiveSite: true,
    image: '/images/projects/az-bali-01.webp',
    gallery: [],
    featured: true,
    intro: '',
  },

  {
    slug: 'az-new-zealand',
    title: 'AZ New Zealand',
    category: 'Websites',
    sector: 'Webflow template',
    year: '2026',
    liveUrl: 'https://az-new-zealand.webflow.io/home',
    linksToLiveSite: true,
    image: '/images/projects/az-new-zealand-01.png',
    gallery: [],
    featured: true,
    intro: '',
  },

  {
    slug: 'az-palermo',
    title: 'AZ Palermo',
    category: 'Websites',
    sector: 'Webflow template',
    year: '2026',
    liveUrl: 'https://az-palermo.webflow.io/home',
    linksToLiveSite: true,
    image: '/images/projects/az-palermo-01.png',
    gallery: [],
    featured: true,
    intro: '',
  },

  {
    slug: 'az-hawaii',
    title: 'AZ Hawaii',
    category: 'Websites',
    sector: 'Webflow template',
    year: '2026',
    liveUrl: 'https://az-hawaii.webflow.io/home',
    linksToLiveSite: true,
    image: '/images/projects/az-hawaii-01.png',
    gallery: [],
    featured: true,
    intro: '',
  },

  {
    slug: 'az-washington',
    title: 'AZ Washington',
    category: 'Websites',
    sector: 'Webflow template',
    year: '2026',
    liveUrl: 'https://az-washington.webflow.io/home',
    linksToLiveSite: true,
    image: '/images/projects/az-washington-01.webp',
    gallery: [],
    featured: true,
    intro: '',
  },

  {
    slug: 'az-panama',
    title: 'AZ Panama',
    category: 'Websites',
    sector: 'Webflow template',
    year: '2026',
    liveUrl: 'https://az-panama.webflow.io/home',
    linksToLiveSite: true,
    image: '/images/projects/az-panama-01.png',
    gallery: [],
    featured: true,
    intro: '',
  },

  {
    slug: 'az-tirana',
    title: 'AZ Tirana',
    category: 'Websites',
    sector: 'Webflow template',
    year: '2025',
    liveUrl: 'https://az-tirana.webflow.io/home',
    linksToLiveSite: true,
    image: '/images/projects/az-tirana-01.webp',
    gallery: [],
    featured: true,
    intro: '',
  },

  {
    slug: 'az-doha',
    title: 'AZ Doha',
    category: 'Websites',
    sector: 'Webflow template',
    year: '2025',
    liveUrl: 'https://az-doha.webflow.io/home',
    linksToLiveSite: true,
    image: '/images/projects/az-doha-01.jpg',
    gallery: [],
    featured: true,
    intro: '',
  },

  {
    slug: 'az-galway',
    title: 'AZ Galway',
    category: 'Websites',
    sector: 'Webflow template',
    year: '2025',
    liveUrl: 'https://az-galway.webflow.io/home',
    linksToLiveSite: true,
    image: '/images/projects/az-galway-01.webp',
    gallery: [],
    featured: true,
    intro: '',
  },

  {
    slug: 'az-belfast',
    title: 'AZ Belfast',
    category: 'Websites',
    sector: 'Webflow template',
    year: '2025',
    liveUrl: 'https://az-belfast.webflow.io/homepage/homepage-v1',
    linksToLiveSite: true,
    image: '/images/projects/az-belfast-01.png',
    gallery: [],
    featured: true,
    intro: '',
  },

]

export const featuredProjects = projects.filter((project) => project.featured)

/**
 * Filters are derived from the projects that actually exist, in a fixed order. Listing every
 * category up front meant offering filters that could only ever return nothing.
 */
const CATEGORY_ORDER: ProjectCategory[] = ['Websites', 'E-commerce', 'Branding', 'Systems']

export const projectCategories: Array<ProjectCategory | 'All'> = [
  'All',
  ...CATEGORY_ORDER.filter((category) => projects.some((project) => project.category === category)),
]

/** Projects that have a case study page. Straight links to a live site do not. */
export const caseStudyProjects = projects.filter((project) => !project.linksToLiveSite)

export function getProject(slug: string): Project | undefined {
  return caseStudyProjects.find((project) => project.slug === slug)
}

/** Next case study, wrapping around. Undefined when this is the only one. */
export function getNextProject(slug: string): Project | undefined {
  if (caseStudyProjects.length < 2) return undefined
  const index = caseStudyProjects.findIndex((project) => project.slug === slug)
  return caseStudyProjects[(index + 1) % caseStudyProjects.length]
}
