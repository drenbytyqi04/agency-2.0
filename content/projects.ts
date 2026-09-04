/**
 * PLACEHOLDER PORTFOLIO CONTENT.
 *
 * Every project below is a fictional demonstration case built to show the layout and the
 * depth of a Nexa case study. None of these are real clients, and every metric is an
 * illustrative example — never a measured result. Replace this file with real work before
 * launch, and keep `isPlaceholder` accurate so the UI keeps labelling demo content honestly.
 */

export type ProjectCategory = 'Ueb-faqe' | 'E-commerce' | 'Branding' | 'Sisteme'

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
  description: string
  image: string
  gallery: string[]
  featured: boolean
  /** True while this is demonstration content rather than a delivered client project. */
  isPlaceholder: boolean
  intro: string
  challenge: string
  approach: string
  solution: string
  result: string
  /** Illustrative only. The UI labels these as demo figures wherever they appear. */
  metrics: ProjectMetric[]
}

export const projects: Project[] = [
  {
    slug: 'nova-stays',
    title: 'Nova Stays',
    category: 'Ueb-faqe',
    sector: 'Hotelieri',
    year: '2025',
    description:
      'Ueb-faqe për një grup apartamentesh me qira afatshkurtër, me rezervim direkt pa komision agjencie.',
    image: '/images/projects/nova-stays-01.jpg',
    gallery: [
      '/images/projects/nova-stays-02.jpg',
      '/images/projects/nova-stays-03.jpg',
      '/images/projects/nova-stays-04.jpg',
    ],
    featured: true,
    isPlaceholder: true,
    intro:
      'Nova Stays menaxhon njësi banimi për qëndrime të shkurtra. Pothuajse i gjithë trafiku vinte nga platforma të huaja, ku çdo rezervim humbte një pjesë të mirë të vlerës në komision.',
    challenge:
      'Mysafirët nuk kishin arsye ta rezervonin direkt. Nuk kishte fotografi të njësive në një vend të vetëm, çmimet nuk ishin të qarta dhe kontakti bëhej vetëm përmes mesazheve.',
    approach:
      'Filluam me strukturën e informacionit: çfarë duhet të dijë një mysafir para se të vendosë. Pastaj ndërtuam një drejtim vizual që i lë fotografitë të flasin, me tipografi të qetë dhe shumë hapësirë.',
    solution:
      'Një faqe për çdo njësi, me galeri, pajisje, rregulla dhe disponueshmëri. Formular rezervimi me hapa të shkurtër dhe konfirmim automatik me email. Përmbajtja menaxhohet nga vetë ekipi, pa ndihmë teknike.',
    result:
      'Rezervimi direkt u bë rruga më e lehtë për mysafirin. Ekipi tani i përditëson çmimet dhe njësitë vetë, brenda pak minutash.',
    metrics: [
      { label: 'Kohë ngarkimi', value: '< 1.2s' },
      { label: 'Hapa deri te rezervimi', value: '3' },
      { label: 'Njësi të menaxhueshme', value: '24' },
    ],
  },
  {
    slug: 'forma-architects',
    title: 'Forma Architects',
    category: 'Branding',
    sector: 'Arkitekturë',
    year: '2025',
    description:
      'Identitet vizual dhe portfolio digjital për një studio arkitekture, me fokus te projektet dhe jo te studio.',
    image: '/images/projects/forma-architects-01.jpg',
    gallery: [
      '/images/projects/forma-architects-02.jpg',
      '/images/projects/forma-architects-03.jpg',
      '/images/projects/forma-architects-04.jpg',
    ],
    featured: true,
    isPlaceholder: true,
    intro:
      'Forma punon me projekte rezidenciale dhe publike. Portfolio-ja ekzistonte vetëm si PDF që dërgohej me email.',
    challenge:
      'Puna ishte e fortë, prezantimi jo. Klientët potencialë nuk kishin ku ta shihnin cilësinë e projekteve pa kërkuar një takim.',
    approach:
      'Ndërtuam një sistem vizual me një familje shkronjash, një rrjet të rreptë dhe shumë të bardhë. Çdo projekt trajtohet si një ese e shkurtër vizuale, jo si një galeri fotosh.',
    solution:
      'Identitet i ri, rrjet tipografik, dhe një portfolio ku çdo projekt ka faqen e vet me plane, detaje dhe kontekst. Studio prezantohet në fund, jo në fillim.',
    result:
      'Prezantimi tani bëhet përmes një linku të vetëm. Projektet shihen në të njëjtën cilësi si në takim.',
    metrics: [
      { label: 'Projekte të publikuara', value: '18' },
      { label: 'Familje shkronjash', value: '1' },
      { label: 'Kohë deri te publikimi', value: '6 javë' },
    ],
  },
  {
    slug: 'mira-restaurant',
    title: 'Mira Restaurant',
    category: 'Sisteme',
    sector: 'Gastronomi',
    year: '2024',
    description:
      'Ueb-faqe me menu dinamike dhe sistem rezervimi tavolinash që zëvendëson rezervimet me telefon.',
    image: '/images/projects/mira-restaurant-01.jpg',
    gallery: [
      '/images/projects/mira-restaurant-02.jpg',
      '/images/projects/mira-restaurant-03.jpg',
    ],
    featured: true,
    isPlaceholder: true,
    intro:
      'Mira është restorant me menu që ndryshon sipas sezonit. Rezervimet vinin me telefon dhe shpesh humbnin në orët e pikut.',
    challenge:
      'Menuja e vjetruar në ueb dhe rezervimet vetëm me telefon krijonin punë shtesë për ekipin dhe siklet për mysafirët.',
    approach:
      'E trajtuam menunë si përmbajtje që ndryshon, jo si imazh. Rezervimin e ndamë në hapa aq të shkurtër sa të bëhet edhe në këmbë, në telefon.',
    solution:
      'Menu që përditësohet nga një panel i thjeshtë, rezervim tavoline me konfirmim automatik, dhe një faqe që ngarkohet shpejt edhe me internet të dobët.',
    result:
      'Rezervimet vijnë të strukturuara dhe menuja ndryshon brenda ditës, pa ndërhyrje teknike.',
    metrics: [
      { label: 'Kohë për rezervim', value: '~40s' },
      { label: 'Përditësim menuje', value: 'vetëshërbim' },
      { label: 'Trafik nga mobili', value: '78%' },
    ],
  },
  {
    slug: 'kora-commerce',
    title: 'Kora Commerce',
    category: 'E-commerce',
    sector: 'Retail',
    year: '2024',
    description:
      'Dyqan online për një markë kozmetike, i ndërtuar rreth checkout-it dhe jo rreth katalogut.',
    image: '/images/projects/kora-commerce-01.jpg',
    gallery: [
      '/images/projects/kora-commerce-02.jpg',
      '/images/projects/kora-commerce-03.jpg',
    ],
    featured: true,
    isPlaceholder: true,
    intro:
      'Kora shet produkte kozmetike që më parë shiteshin vetëm përmes mesazheve në rrjete sociale.',
    challenge:
      'Porositë merreshin manualisht, stoku mbahej në një fletore dhe pagesa negociohej për çdo klient.',
    approach:
      'Nisëm nga fundi: checkout-i i shkurtër, pastaj faqja e produktit, pastaj katalogu. Çdo hap u hoq nëse nuk ndihmonte shitjen.',
    solution:
      'Katalog i strukturuar, faqe produkti me fotografi të mëdha dhe informacion të qartë, checkout në një ekran, dhe njoftime automatike për porositë.',
    result:
      'Porositë vijnë të plota dhe stoku qëndron i saktë. Ekipi merret me produktin, jo me administrimin e mesazheve.',
    metrics: [
      { label: 'Hapa në checkout', value: '1' },
      { label: 'Produkte aktive', value: '60+' },
      { label: 'Kohë ngarkimi', value: '< 1.5s' },
    ],
  },
  {
    slug: 'alba-services',
    title: 'Alba Services',
    category: 'Ueb-faqe',
    sector: 'Shërbime profesionale',
    year: '2024',
    description:
      'Prezencë digjitale për një kompani shërbimesh B2B, e ndërtuar rreth besueshmërisë dhe kërkesave për ofertë.',
    image: '/images/projects/alba-services-01.jpg',
    gallery: [
      '/images/projects/alba-services-02.jpg',
      '/images/projects/alba-services-03.jpg',
    ],
    featured: false,
    isPlaceholder: true,
    intro:
      'Alba punon me klientë institucionalë dhe biznese. Vendimet merren ngadalë dhe pas shumë krahasimesh.',
    challenge:
      'Faqja e vjetër nuk tregonte as kapacitetin, as referencat, as mënyrën e punës. Kërkesat vinin pa informacion.',
    approach:
      'Në vend të fjalëve të përgjithshme, e ndërtuam faqen rreth provave: procesi, ekipi, dokumentacioni dhe rastet e punës.',
    solution:
      'Strukturë e qartë shërbimesh, formular kërkese që mbledh informacionin e duhur që në fillim, dhe faqe që përgatit terrenin për takimin e parë.',
    result:
      'Kërkesat vijnë më të plota dhe takimi i parë fillon nga një bazë më e mirë.',
    metrics: [
      { label: 'Fusha në formular', value: '5' },
      { label: 'Faqe shërbimesh', value: '7' },
      { label: 'Kohë ngarkimi', value: '< 1.1s' },
    ],
  },
  {
    slug: 'nordic-interiors',
    title: 'Nordic Interiors',
    category: 'Ueb-faqe',
    sector: 'Dizajn interieri',
    year: '2023',
    description:
      'Portfolio për një studio interieri, ku fotografia mban gjithë peshën vizuale.',
    image: '/images/projects/nordic-interiors-01.jpg',
    gallery: [
      '/images/projects/nordic-interiors-02.jpg',
      '/images/projects/nordic-interiors-03.jpg',
    ],
    featured: false,
    isPlaceholder: true,
    intro:
      'Nordic dizajnon hapësira banimi dhe zyra. Puna shpërndahej në rrjete sociale, pa një vend të vetin.',
    challenge:
      'Imazhet ishin të shkëlqyera, por të shpërndara dhe të kompresuara. Nuk kishte një rrëfim që i lidhte projektet.',
    approach:
      'E ndërtuam faqen rreth fotografisë: pak tekst, kompozime të mëdha, ngarkim progresiv që nuk e prish përvojën në telefon.',
    solution:
      'Rrjet asimetrik projektesh, faqe projekti me galeri të plotë, dhe optimizim imazhesh që i mban të mprehta pa i rënduar.',
    result:
      'Studio ka tani një vend ku puna shihet në cilësinë e vet, jo në kompresimin e rrjeteve sociale.',
    metrics: [
      { label: 'Imazhe të optimizuara', value: '120+' },
      { label: 'Format', value: 'AVIF / WebP' },
      { label: 'CLS', value: '0' },
    ],
  },
]

export const featuredProjects = projects.filter((project) => project.featured)

export const projectCategories: Array<ProjectCategory | 'Të gjitha'> = [
  'Të gjitha',
  'Ueb-faqe',
  'E-commerce',
  'Branding',
  'Sisteme',
]

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug)
}

/** Next project in the list, wrapping around — used at the end of a case study. */
export function getNextProject(slug: string): Project {
  const index = projects.findIndex((project) => project.slug === slug)
  return projects[(index + 1) % projects.length]
}
