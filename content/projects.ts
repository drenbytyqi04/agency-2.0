/**
 * PLACEHOLDER PORTFOLIO CONTENT.
 *
 * Every project below is a fictional demonstration case built to show the layout and the
 * depth of a Nexa case study. None of these are real clients, and every metric is an
 * illustrative example — never a measured result. Replace this file with real work before
 * launch, and keep `isPlaceholder` accurate so the UI keeps labelling demo content honestly.
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
  /** True while this is demonstration content rather than a delivered client project. */
  isPlaceholder: boolean
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
   * Optional. Demonstration projects carry illustrative figures, which the UI labels as such.
   * Real projects should only carry numbers that can actually be stood behind.
   */
  metrics?: ProjectMetric[]
}

export const projects: Project[] = [
  {
    slug: 'az-utah',
    title: 'AZ Utah',
    category: 'Websites',
    sector: 'Webflow template',
    year: '2024',
    liveUrl: 'https://az-utah.webflow.io/home',
    linksToLiveSite: true,
    image: '/images/projects/az-utah-01.png',
    gallery: [],
    featured: true,
    isPlaceholder: false,
    intro: '',
  },

  {
    slug: 'az-iowa',
    title: 'AZ Iowa',
    category: 'Websites',
    sector: 'Webflow template',
    year: '2024',
    liveUrl: 'https://az-lowa.webflow.io/home/home-v1',
    linksToLiveSite: true,
    image: '/images/projects/az-iowa-01.avif',
    gallery: [],
    featured: true,
    isPlaceholder: false,
    intro: '',
  },

  {
    slug: 'az-vermont',
    title: 'AZ Vermont',
    category: 'Websites',
    sector: 'Webflow template',
    year: '2024',
    liveUrl: 'https://az-vermont.webflow.io/home',
    linksToLiveSite: true,
    image: '/images/projects/az-vermont-01.png',
    gallery: [],
    featured: true,
    isPlaceholder: false,
    intro: '',
  },

  {
    slug: 'az-montana',
    title: 'AZ Montana',
    category: 'Websites',
    sector: 'Webflow template',
    year: '2024',
    liveUrl: 'https://az-montana.webflow.io/home',
    linksToLiveSite: true,
    image: '/images/projects/az-montana-01.png',
    gallery: [],
    featured: true,
    isPlaceholder: false,
    intro: '',
  },

  {
    slug: 'az-melbourne',
    title: 'AZ Melbourne',
    category: 'Websites',
    sector: 'Webflow template',
    year: '2024',
    liveUrl: 'https://az-melbourne.webflow.io/home',
    linksToLiveSite: true,
    image: '/images/projects/az-melbourne-01.png',
    gallery: [],
    featured: true,
    isPlaceholder: false,
    intro: '',
  },

  {
    slug: 'az-bali',
    title: 'AZ Bali',
    category: 'Websites',
    sector: 'Webflow template',
    year: '2024',
    liveUrl: 'https://az-bali.webflow.io/home',
    linksToLiveSite: true,
    image: '/images/projects/az-bali-01.webp',
    gallery: [],
    featured: true,
    isPlaceholder: false,
    intro: '',
  },

  {
    slug: 'az-new-zealand',
    title: 'AZ New Zealand',
    category: 'Websites',
    sector: 'Webflow template',
    year: '2024',
    liveUrl: 'https://az-new-zealand.webflow.io/home',
    linksToLiveSite: true,
    image: '/images/projects/az-new-zealand-01.png',
    gallery: [],
    featured: true,
    isPlaceholder: false,
    intro: '',
  },

  {
    slug: 'nova-stays',
    title: 'Nova Stays',
    category: 'Websites',
    sector: 'Hospitality',
    year: '2025',
    description:
      'A website for a group of short-stay apartments, with direct booking and no agency commission.',
    image: '/images/projects/nova-stays-01.jpg',
    gallery: [
      '/images/projects/nova-stays-02.jpg',
      '/images/projects/nova-stays-03.jpg',
      '/images/projects/nova-stays-04.jpg',
    ],
    featured: true,
    isPlaceholder: true,
    intro:
      'Nova Stays manages apartments for short stays. Almost all traffic came through foreign platforms, where every booking lost a sizeable share of its value to commission.',
    challenge:
      'Guests had no reason to book direct. There was nowhere to see all the units in one place, pricing was unclear, and every enquiry happened over private messages.',
    approach:
      'We started with the information architecture: what a guest needs to know before deciding. Then we built a visual direction that lets the photography carry the page, with quiet typography and plenty of space.',
    solution:
      'A page per unit with a gallery, amenities, house rules and availability. A booking form with few steps and automatic email confirmation. The team manages content themselves, with no technical help.',
    result:
      'Booking direct became the easiest path for the guest. The team now updates pricing and units in minutes.',
    metrics: [
      { label: 'Load time', value: '< 1.2s' },
      { label: 'Steps to book', value: '3' },
      { label: 'Units managed', value: '24' },
    ],
  },
  {
    slug: 'forma-architects',
    title: 'Forma Architects',
    category: 'Branding',
    sector: 'Architecture',
    year: '2025',
    description:
      'Visual identity and digital portfolio for an architecture studio, focused on the projects rather than the studio.',
    image: '/images/projects/forma-architects-01.jpg',
    gallery: [
      '/images/projects/forma-architects-02.jpg',
      '/images/projects/forma-architects-04.jpg',
    ],
    featured: true,
    isPlaceholder: true,
    intro:
      'Forma works on residential and public projects. Their portfolio existed only as a PDF sent over email.',
    challenge:
      'The work was strong, the presentation was not. Prospective clients had no way to see the quality of the projects without asking for a meeting.',
    approach:
      'We built a visual system around one typeface, a strict grid and a lot of white space. Each project is treated as a short visual essay rather than a photo gallery.',
    solution:
      'A new identity, a typographic grid, and a portfolio where every project has its own page with plans, details and context. The studio introduces itself at the end, not the beginning.',
    result:
      'The studio now presents through a single link, and the work is seen at the same quality as in the room.',
    metrics: [
      { label: 'Projects published', value: '18' },
      { label: 'Typefaces', value: '1' },
      { label: 'Time to launch', value: '6 weeks' },
    ],
  },
  {
    slug: 'mira-restaurant',
    title: 'Mira Restaurant',
    category: 'Systems',
    sector: 'Food & drink',
    year: '2024',
    description:
      'A website with a live menu and a table booking system that replaced bookings by phone.',
    image: '/images/projects/mira-restaurant-01.jpg',
    gallery: [
      '/images/projects/mira-restaurant-02.jpg',
      '/images/projects/mira-restaurant-03.jpg',
    ],
    featured: true,
    isPlaceholder: true,
    intro:
      'Mira is a restaurant whose menu changes with the season. Bookings came by phone and were often lost during service.',
    challenge:
      'An out-of-date menu online and phone-only bookings created extra work for the team and friction for guests.',
    approach:
      'We treated the menu as content that changes, not as an image. We cut booking into steps short enough to complete standing up, on a phone.',
    solution:
      'A menu updated from a simple panel, table booking with automatic confirmation, and a page that loads fast even on a weak connection.',
    result:
      'Bookings arrive structured, and the menu changes within the day with no technical help.',
    metrics: [
      { label: 'Time to book', value: '~40s' },
      { label: 'Menu updates', value: 'self-serve' },
      { label: 'Mobile traffic', value: '78%' },
    ],
  },
  {
    slug: 'kora-commerce',
    title: 'Kora Commerce',
    category: 'E-commerce',
    sector: 'Retail',
    year: '2024',
    description:
      'An online store for a cosmetics brand, built around the checkout rather than the catalogue.',
    image: '/images/projects/kora-commerce-01.jpg',
    gallery: [
      '/images/projects/kora-commerce-02.jpg',
      '/images/projects/kora-commerce-03.jpg',
    ],
    featured: true,
    isPlaceholder: true,
    intro:
      'Kora sells cosmetics that were previously sold only through social media messages.',
    challenge:
      'Orders were taken by hand, stock lived in a notebook, and payment was negotiated with every customer.',
    approach:
      'We started from the end: the short checkout first, then the product page, then the catalogue. Every step that did not help the sale was removed.',
    solution:
      'A structured catalogue, product pages with large photography and clear information, a single-screen checkout, and automatic order notifications.',
    result:
      'Orders arrive complete and stock stays accurate. The team works on the product instead of managing messages.',
    metrics: [
      { label: 'Checkout steps', value: '1' },
      { label: 'Active products', value: '60+' },
      { label: 'Load time', value: '< 1.5s' },
    ],
  },
  {
    slug: 'alba-services',
    title: 'Alba Services',
    category: 'Websites',
    sector: 'Professional services',
    year: '2024',
    description:
      'A digital presence for a B2B services company, built around credibility and qualified enquiries.',
    image: '/images/projects/alba-services-01.jpg',
    gallery: [
      '/images/projects/alba-services-02.jpg',
      '/images/projects/alba-services-03.jpg',
    ],
    featured: false,
    isPlaceholder: true,
    intro:
      'Alba works with institutional and business clients. Decisions are slow and follow a lot of comparison.',
    challenge:
      'The old site showed neither capacity, nor references, nor how the company works. Enquiries arrived with no information.',
    approach:
      'Instead of generic claims, we built the site around evidence: the process, the team, the documentation and the case work.',
    solution:
      'A clear service structure, an enquiry form that gathers the right information up front, and a site that prepares the ground for the first meeting.',
    result:
      'Enquiries arrive more complete, and the first meeting starts from a better base.',
    metrics: [
      { label: 'Form fields', value: '5' },
      { label: 'Service pages', value: '7' },
      { label: 'Load time', value: '< 1.1s' },
    ],
  },
  {
    slug: 'nordic-interiors',
    title: 'Nordic Interiors',
    category: 'Websites',
    sector: 'Interior design',
    year: '2023',
    description:
      'A portfolio for an interior studio, where photography carries the entire visual weight.',
    image: '/images/projects/nordic-interiors-01.jpg',
    gallery: [
      '/images/projects/nordic-interiors-02.jpg',
      '/images/projects/nordic-interiors-03.jpg',
    ],
    featured: false,
    isPlaceholder: true,
    intro:
      'Nordic designs homes and workspaces. Their work was scattered across social media, without a home of its own.',
    challenge:
      'The images were excellent but scattered and compressed. There was no narrative holding the projects together.',
    approach:
      'We built the site around the photography: little text, large compositions, and progressive loading that does not spoil the experience on a phone.',
    solution:
      'An asymmetric project grid, a project page with the full gallery, and image optimisation that keeps everything sharp without the weight.',
    result:
      'The studio now has a place where the work is seen at its own quality, not at social media compression.',
    metrics: [
      { label: 'Images optimised', value: '120+' },
      { label: 'Formats', value: 'AVIF / WebP' },
      { label: 'CLS', value: '0' },
    ],
  },
]

export const featuredProjects = projects.filter((project) => project.featured)

export const projectCategories: Array<ProjectCategory | 'All'> = [
  'All',
  'Websites',
  'E-commerce',
  'Branding',
  'Systems',
]

/** Projects that have a case study page. Straight links to a live site do not. */
export const caseStudyProjects = projects.filter((project) => !project.linksToLiveSite)

export function getProject(slug: string): Project | undefined {
  return caseStudyProjects.find((project) => project.slug === slug)
}

/** Next project in the list, wrapping around — used at the end of a case study. */
export function getNextProject(slug: string): Project {
  const index = caseStudyProjects.findIndex((project) => project.slug === slug)
  return caseStudyProjects[(index + 1) % caseStudyProjects.length]
}
