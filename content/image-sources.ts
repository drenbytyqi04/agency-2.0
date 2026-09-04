/**
 * Image manifest — single source of truth for every photograph on the site.
 *
 * Every entry below is a real, verified Unsplash photo (id + photographer + source URL).
 * No URL here is invented. `scripts/download-images.ts` reads this file, downloads each
 * photo into `public/images/projects/`, and — when UNSPLASH_ACCESS_KEY is set — also pings
 * Unsplash's download endpoint as their API guidelines require.
 *
 * To swap imagery: replace the entries here and re-run `npm run images`.
 */

export interface ImageSource {
  /** Path served to the browser, relative to /public. */
  file: string
  /** Unsplash photo id. */
  photoId: string
  /** Base image URL (Unsplash dynamic resizing params are appended by the download script). */
  baseUrl: string
  /** Public photo page — used for attribution links. */
  sourceUrl: string
  /** Unsplash API download-tracking endpoint (only called when an API key is present). */
  downloadLocation: string
  photographer: string
  /** Photographer profile — used for attribution links. */
  photographerUrl: string
  /** Human-written alt text. Describes the photo, not the fictional project. */
  alt: string
}

const UNSPLASH_UTM = '?utm_source=nexa&utm_medium=referral'

/** Appends the referral params Unsplash asks for on attribution links. */
export function withAttribution(url: string): string {
  return `${url}${UNSPLASH_UTM}`
}

export const imageSources: ImageSource[] = [
  // --- NOVA STAYS (hospitality) ---
  {
    file: '/images/projects/nova-stays-01.jpg',
    photoId: 'l1ONpGNOZeE',
    baseUrl: 'https://images.unsplash.com/photo-1756154787365-c1a0b4dc4ed5',
    sourceUrl: 'https://unsplash.com/photos/two-chairs-facing-a-window-with-city-buildings-l1ONpGNOZeE',
    downloadLocation: 'https://api.unsplash.com/photos/l1ONpGNOZeE/download',
    photographer: 'Franco Debartolo',
    photographerUrl: 'https://unsplash.com/@francotheshooter',
    alt: 'Two chairs facing a large window overlooking city buildings',
  },
  {
    file: '/images/projects/nova-stays-02.jpg',
    photoId: 'VGgmG8Se47M',
    baseUrl: 'https://images.unsplash.com/photo-1759101292737-24e1c5ed52d9',
    sourceUrl: 'https://unsplash.com/photos/cozy-bedroom-with-armchair-shelving-and-beds-VGgmG8Se47M',
    downloadLocation: 'https://api.unsplash.com/photos/VGgmG8Se47M/download',
    photographer: 'Clay Banks',
    photographerUrl: 'https://unsplash.com/@claybanks',
    alt: 'A neutral-toned bedroom with an armchair and wooden shelving',
  },
  {
    file: '/images/projects/nova-stays-03.jpg',
    photoId: 'Ph2AIj8vOwo',
    baseUrl: 'https://images.unsplash.com/photo-1759139445627-5ce9d5fac8f9',
    sourceUrl: 'https://unsplash.com/photos/two-beds-in-a-rustic-bedroom-with-windows-Ph2AIj8vOwo',
    downloadLocation: 'https://api.unsplash.com/photos/Ph2AIj8vOwo/download',
    photographer: 'Clay Banks',
    photographerUrl: 'https://unsplash.com/@claybanks',
    alt: 'Two beds in a rustic room with large windows',
  },
  {
    file: '/images/projects/nova-stays-04.jpg',
    photoId: 'bhoMFZB_6Bg',
    baseUrl: 'https://images.unsplash.com/photo-1758060215425-303300b1c7e2',
    sourceUrl: 'https://unsplash.com/photos/a-bright-bedroom-with-a-desk-and-a-large-bed-bhoMFZB_6Bg',
    downloadLocation: 'https://api.unsplash.com/photos/bhoMFZB_6Bg/download',
    photographer: 'Clay Banks',
    photographerUrl: 'https://unsplash.com/@claybanks',
    alt: 'A bright room with a writing desk and a wide bed',
  },

  // --- FORMA ARCHITECTS (architecture) ---
  {
    file: '/images/projects/forma-architects-01.jpg',
    photoId: 'wMLKJNtml9Q',
    baseUrl: 'https://images.unsplash.com/photo-1759390862014-dd57bf86e641',
    sourceUrl: 'https://unsplash.com/photos/modern-building-facade-with-geometric-patterns-wMLKJNtml9Q',
    downloadLocation: 'https://api.unsplash.com/photos/wMLKJNtml9Q/download',
    photographer: 'Olga Schraven',
    photographerUrl: 'https://unsplash.com/@olgaschraven',
    alt: 'A modern building facade with repeating geometric patterns',
  },
  {
    file: '/images/projects/forma-architects-02.jpg',
    photoId: 'DjclooRnMrY',
    baseUrl: 'https://images.unsplash.com/photo-1759496435064-c81eddcb9b95',
    sourceUrl: 'https://unsplash.com/photos/looking-up-at-modern-skyscrapers-against-a-clear-sky-DjclooRnMrY',
    downloadLocation: 'https://api.unsplash.com/photos/DjclooRnMrY/download',
    photographer: 'rawkkim',
    photographerUrl: 'https://unsplash.com/@rawkkim',
    alt: 'Modern skyscrapers seen from below against a clear sky',
  },
  {
    file: '/images/projects/forma-architects-03.jpg',
    photoId: 'XIWA8_767pU',
    baseUrl: 'https://images.unsplash.com/photo-1759298928528-68604ad099f5',
    sourceUrl: 'https://unsplash.com/photos/symmetrical-abstract-pattern-of-modern-buildings-XIWA8_767pU',
    downloadLocation: 'https://api.unsplash.com/photos/XIWA8_767pU/download',
    photographer: 'Mike Hindle',
    photographerUrl: 'https://unsplash.com/@mikehindle',
    alt: 'A symmetrical abstract composition of modern buildings',
  },
  {
    file: '/images/projects/forma-architects-04.jpg',
    photoId: 'GXezEZC429E',
    baseUrl: 'https://images.unsplash.com/photo-1759405095339-561cb2c618f1',
    sourceUrl: 'https://unsplash.com/photos/aerial-view-of-modern-city-buildings-and-rooftops-GXezEZC429E',
    downloadLocation: 'https://api.unsplash.com/photos/GXezEZC429E/download',
    photographer: 'Alex Lvrs',
    photographerUrl: 'https://unsplash.com/@alexlvrs',
    alt: 'An aerial view of modern city rooftops and buildings',
  },

  // --- MIRA RESTAURANT (hospitality) ---
  {
    file: '/images/projects/mira-restaurant-01.jpg',
    photoId: 'EjHiN2KxTO4',
    baseUrl: 'https://images.unsplash.com/photo-1709548145082-04d0cde481d4',
    sourceUrl: 'https://unsplash.com/photos/a-dimly-lit-restaurant-with-tables-and-chairs-EjHiN2KxTO4',
    downloadLocation: 'https://api.unsplash.com/photos/EjHiN2KxTO4/download',
    photographer: 'Oliver Guhr',
    photographerUrl: 'https://unsplash.com/@oliverguhr',
    alt: 'A dimly lit restaurant room with wooden tables and chairs',
  },
  {
    file: '/images/projects/mira-restaurant-02.jpg',
    photoId: 'WYmNFpyKn1o',
    baseUrl: 'https://images.unsplash.com/photo-1706362723628-60e8f1929ffe',
    sourceUrl: 'https://unsplash.com/photos/a-restaurant-with-tables-chairs-and-plants-WYmNFpyKn1o',
    downloadLocation: 'https://api.unsplash.com/photos/WYmNFpyKn1o/download',
    photographer: 'Martin Baron',
    photographerUrl: 'https://unsplash.com/@elmartinbaron',
    alt: 'A restaurant interior with tables, chairs and green plants',
  },
  {
    file: '/images/projects/mira-restaurant-03.jpg',
    photoId: 'iNmnw2RU5yg',
    baseUrl: 'https://images.unsplash.com/photo-1705402423534-108c8312d1e5',
    sourceUrl: 'https://unsplash.com/photos/a-bar-with-a-lot-of-bottles-on-it-iNmnw2RU5yg',
    downloadLocation: 'https://api.unsplash.com/photos/iNmnw2RU5yg/download',
    photographer: 'Martin Baron',
    photographerUrl: 'https://unsplash.com/@elmartinbaron',
    alt: 'A bar counter with shelves of bottles against a dark background',
  },

  // --- KORA COMMERCE (e-commerce) ---
  {
    file: '/images/projects/kora-commerce-01.jpg',
    photoId: 'KZXk9ip6Y5E',
    baseUrl: 'https://images.unsplash.com/photo-1749137315928-bc96451fa4c0',
    sourceUrl: 'https://unsplash.com/photos/beauty-products-are-displayed-neatly-on-a-shelf-KZXk9ip6Y5E',
    downloadLocation: 'https://api.unsplash.com/photos/KZXk9ip6Y5E/download',
    photographer: 'Valeriia Miller',
    photographerUrl: 'https://unsplash.com/@valeriiamiller',
    alt: 'Cosmetic products arranged neatly on a shelf',
  },
  {
    file: '/images/projects/kora-commerce-02.jpg',
    photoId: '0CQHIvRfbMQ',
    baseUrl: 'https://images.unsplash.com/photo-1745605443047-ea774bf4a77f',
    sourceUrl: 'https://unsplash.com/photos/green-floral-arrangement-casts-a-shadow-0CQHIvRfbMQ',
    downloadLocation: 'https://api.unsplash.com/photos/0CQHIvRfbMQ/download',
    photographer: 'Danielle Suijkerbuijk',
    photographerUrl: 'https://unsplash.com/@vandaantje',
    alt: 'A green botanical arrangement casting a shadow on a bright surface',
  },
  {
    file: '/images/projects/kora-commerce-03.jpg',
    photoId: 'ShEuc7fCL0g',
    baseUrl: 'https://images.unsplash.com/photo-1744198275588-06648407b39a',
    sourceUrl: 'https://unsplash.com/photos/flowers-in-a-vase-sit-on-a-white-table-ShEuc7fCL0g',
    downloadLocation: 'https://api.unsplash.com/photos/ShEuc7fCL0g/download',
    photographer: 'Jon Tyson',
    photographerUrl: 'https://unsplash.com/@jontyson',
    alt: 'A vase of flowers on a minimal white table',
  },

  // --- ALBA SERVICES (professional services) ---
  {
    file: '/images/projects/alba-services-01.jpg',
    photoId: 'oMCC7gKDBYE',
    baseUrl: 'https://images.unsplash.com/photo-1563891925196-a3e34f6d869c',
    sourceUrl: 'https://unsplash.com/photos/the-shadow-of-a-building-on-the-side-of-it-oMCC7gKDBYE',
    downloadLocation: 'https://api.unsplash.com/photos/oMCC7gKDBYE/download',
    photographer: 'Anton Lammert',
    photographerUrl: 'https://unsplash.com/@anton_lammert',
    alt: 'Architectural shadows across a concrete wall, in black and white',
  },
  {
    file: '/images/projects/alba-services-02.jpg',
    photoId: 'ulFAi1jkNcA',
    baseUrl: 'https://images.unsplash.com/photo-1565768502473-c5dc73b7eb33',
    sourceUrl: 'https://unsplash.com/photos/a-black-and-white-photo-of-a-curved-concrete-structure-ulFAi1jkNcA',
    downloadLocation: 'https://api.unsplash.com/photos/ulFAi1jkNcA/download',
    photographer: 'Jonny James',
    photographerUrl: 'https://unsplash.com/@jonnyjames2',
    alt: 'A curved concrete structure, photographed in black and white',
  },
  {
    file: '/images/projects/alba-services-03.jpg',
    photoId: 'irzV4osXXkA',
    baseUrl: 'https://images.unsplash.com/photo-1559763194-521eef49b386',
    sourceUrl: 'https://unsplash.com/photos/a-black-and-white-photo-of-a-concrete-structure-irzV4osXXkA',
    downloadLocation: 'https://api.unsplash.com/photos/irzV4osXXkA/download',
    photographer: 'Robert Keane',
    photographerUrl: 'https://unsplash.com/@keano16',
    alt: 'A detail of a concrete structure with strong lines, in black and white',
  },

  // --- NORDIC INTERIORS (interior design) ---
  {
    file: '/images/projects/nordic-interiors-01.jpg',
    photoId: 'Wkqs3XD8JPk',
    baseUrl: 'https://images.unsplash.com/photo-1759238136818-7b00ec9e782a',
    sourceUrl: 'https://unsplash.com/photos/modern-living-room-with-abstract-art-and-plush-furniture-Wkqs3XD8JPk',
    downloadLocation: 'https://api.unsplash.com/photos/Wkqs3XD8JPk/download',
    photographer: 'Franco Debartolo',
    photographerUrl: 'https://unsplash.com/@francotheshooter',
    alt: 'A modern living room with abstract art and soft furniture',
  },
  {
    file: '/images/projects/nordic-interiors-02.jpg',
    photoId: '33zre8PKCdo',
    baseUrl: 'https://images.unsplash.com/photo-1759109220887-6768eda42293',
    sourceUrl: 'https://unsplash.com/photos/cozy-living-room-with-sectional-sofa-and-wood-stove-33zre8PKCdo',
    downloadLocation: 'https://api.unsplash.com/photos/33zre8PKCdo/download',
    photographer: 'Clay Banks',
    photographerUrl: 'https://unsplash.com/@claybanks',
    alt: 'A living room with a sectional sofa and a wood stove',
  },
  {
    file: '/images/projects/nordic-interiors-03.jpg',
    photoId: 'hh8CQEJGS5Q',
    baseUrl: 'https://images.unsplash.com/photo-1759203111456-b63e81a03cec',
    sourceUrl: 'https://unsplash.com/photos/cozy-living-room-with-sectional-sofa-and-wood-stove-hh8CQEJGS5Q',
    downloadLocation: 'https://api.unsplash.com/photos/hh8CQEJGS5Q/download',
    photographer: 'Clay Banks',
    photographerUrl: 'https://unsplash.com/@claybanks',
    alt: 'A view from the upper floor over a living room with a high ceiling',
  },
]

/**
 * Builds the delivery URL for a photo, using Unsplash's documented resizing parameters.
 *
 * Width and quality are optional on purpose: when next/image consumes this it appends its
 * own `w` and `q` per breakpoint, so setting them here would duplicate the parameters and
 * make the served size harder to reason about. The download script passes them explicitly.
 */
export function remoteImageUrl(source: ImageSource, width?: number, quality?: number): string {
  const url = new URL(source.baseUrl)
  url.searchParams.set('fm', 'jpg')
  url.searchParams.set('fit', 'max')
  if (width) url.searchParams.set('w', String(width))
  if (quality) url.searchParams.set('q', String(quality))
  return url.toString()
}

/** Lookup by public path, used for alt text and photo credits. */
export const imageSourceByFile = new Map(imageSources.map((source) => [source.file, source]))
