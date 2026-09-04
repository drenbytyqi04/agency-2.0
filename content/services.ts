/** Service catalogue. Prices are orientation ranges, not quotes. */

export interface ServiceFaq {
  question: string
  answer: string
}

export interface Service {
  slug: string
  index: string
  title: string
  summary: string
  /** What the client actually receives. */
  deliverables: string[]
  priceRange: string
  idealFor: string
  cta: string
  faq: ServiceFaq[]
}

/** Compact three-column grouping used on the homepage. */
export interface ServiceGroup {
  index: string
  title: string
  items: string[]
}

export const serviceGroups: ServiceGroup[] = [
  {
    index: '01',
    title: 'Websites & systems',
    items: [
      'Marketing websites',
      'Online stores',
      'Booking systems',
      'Integrations',
      'Automation',
    ],
  },
  {
    index: '02',
    title: 'Brand & design',
    items: ['Visual identity', 'Logo', 'UI/UX', 'Art direction', 'Social media assets'],
  },
  {
    index: '03',
    title: 'Marketing & growth',
    items: ['Foundational SEO', 'Landing pages', 'Performance optimisation', 'Analytics', 'Maintenance'],
  },
]

export const services: Service[] = [
  {
    slug: 'marketing-website',
    index: '01',
    title: 'Marketing website',
    summary:
      'The site that shows what the business does, who it does it for, and why it can be trusted. Fast, clear, and built to get you contacted.',
    deliverables: [
      'Content structure and edited copy',
      'Custom design, not a template',
      'Built with Next.js and deployed on Vercel',
      'Contact form with validation',
      'Technical SEO and analytics',
    ],
    priceRange: '€700 – €1,500',
    idealFor: 'Businesses that already have customers but no serious presence online.',
    cta: 'Start a project',
    faq: [
      {
        question: 'How long does a marketing website take?',
        answer:
          'Usually two to four weeks, depending on how quickly the content arrives. If your copy and photography are ready, it moves faster.',
      },
      {
        question: 'Can I edit the text myself afterwards?',
        answer:
          'Yes. Where content changes often we add a simple admin panel and show you how to use it.',
      },
      {
        question: 'Is hosting included?',
        answer:
          'We handle the setup. Hosting and domain costs are paid directly to the provider and stay in your name.',
      },
    ],
  },
  {
    slug: 'online-stores',
    index: '02',
    title: 'Online stores',
    summary:
      'Selling online without friction: a clear catalogue, product pages that convince, and a checkout that does not lose people on the way.',
    deliverables: [
      'Catalogue and category structure',
      'Product pages built for conversion',
      'Short checkout and payments',
      'Stock and order management',
      'Automated email notifications',
    ],
    priceRange: '€1,500 – €4,000',
    idealFor: 'Brands already selling through direct messages who want a repeatable process.',
    cta: 'Start a store',
    faq: [
      {
        question: 'Which payment methods are supported?',
        answer:
          'Card payments through international providers, cash on delivery, and bank transfer. The right mix depends on the market you sell into.',
      },
      {
        question: 'Can I sell outside Kosovo?',
        answer:
          'Yes. We configure currencies, shipping zones and languages for the markets you are targeting.',
      },
    ],
  },
  {
    slug: 'booking-systems',
    index: '03',
    title: 'Booking systems',
    summary:
      'Online booking for restaurants, clinics, hotels and any service that runs on a schedule. Fewer phone calls, fewer mistakes.',
    deliverables: [
      'Calendar and availability',
      'Booking form with minimal steps',
      'Automatic confirmation and reminders',
      'Admin panel for the team',
      'Integration with existing calendars',
    ],
    priceRange: '€1,200 – €3,500',
    idealFor: 'Businesses losing staff hours to taking bookings over the phone.',
    cta: 'Discuss a system',
    faq: [
      {
        question: 'Does it integrate with the system we already use?',
        answer:
          'In most cases yes. If your system has an API we connect to it; if not, we propose the simplest alternative that does not interrupt how you work.',
      },
      {
        question: 'What about double bookings?',
        answer:
          'Availability is checked in real time and the slot is held the moment it is confirmed, so double booking does not happen.',
      },
    ],
  },
  {
    slug: 'brand-identity',
    index: '04',
    title: 'Brand & visual identity',
    summary:
      'A visual system that works the same in print, on screen and on social — not just a logo.',
    deliverables: [
      'Visual direction and concept territory',
      'Logo and its variants',
      'Colour palette and type system',
      'Usage rules',
      'Social media templates',
    ],
    priceRange: '€900 – €2,500',
    idealFor: 'New businesses, or brands that have drifted out of shape over the years.',
    cta: 'Build the brand',
    faq: [
      {
        question: 'Do I need a new brand before a website?',
        answer:
          'Not necessarily. If the current identity works, we use it. If it gets in the way, we say so plainly and propose what needs fixing.',
      },
      {
        question: 'What gets delivered at the end?',
        answer:
          'Source files, exported versions for web and print, and a short document covering the usage rules.',
      },
    ],
  },
  {
    slug: 'ui-ux-design',
    index: '05',
    title: 'UI/UX design',
    summary:
      'Interface design for products and platforms, where clarity and user flow come before decoration.',
    deliverables: [
      'Short research and flow mapping',
      'Wireframes and screen structure',
      'Full visual design',
      'Reusable component system',
      'Developer-ready handoff',
    ],
    priceRange: '€1,000 – €3,000',
    idealFor: 'Teams with a product or platform that needs to become usable and consistent.',
    cta: 'Discuss the product',
    faq: [
      {
        question: 'Do you work with our development team?',
        answer:
          'Yes. We hand over a component system and specifications your developers can implement directly.',
      },
    ],
  },
  {
    slug: 'marketing-seo',
    index: '06',
    title: 'Marketing & foundational SEO',
    summary:
      'The groundwork that makes you findable: sound structure, speed, clear content, and real measurement.',
    deliverables: [
      'Technical SEO and page structure',
      'Speed and Core Web Vitals work',
      'Landing pages for campaigns',
      'Analytics and goal setup',
      'A simple monthly report',
    ],
    priceRange: '€400 – €1,200',
    idealFor: 'Businesses with an existing site that brings in no enquiries.',
    cta: 'Request an audit',
    faq: [
      {
        question: 'Do you guarantee first position on Google?',
        answer:
          'No, and nobody can. We work on what actually moves the needle: structure, speed, content and measurement.',
      },
      {
        question: 'How quickly do results show?',
        answer:
          'Technical improvements show within weeks. Organic ranking takes months and consistent content.',
      },
    ],
  },
  {
    slug: 'maintenance',
    index: '07',
    title: 'Monthly maintenance',
    summary:
      'The site stays fast, secure and up to date — without you having to chase it every time.',
    deliverables: [
      'Technical and security updates',
      'Content changes',
      'Performance monitoring',
      'Backups',
      'Priority response',
    ],
    priceRange: '€150 – €900 / month',
    idealFor: 'Businesses that treat the website as a working tool, not a finished project.',
    cta: 'See the packages',
    faq: [
      {
        question: 'Am I tied into a long contract?',
        answer:
          'No. Maintenance is monthly and can be ended with one month’s notice.',
      },
      {
        question: 'What if I need a new page mid-month?',
        answer:
          'Small jobs are covered by the package. For larger work we quote separately before starting.',
      },
    ],
  },
]
