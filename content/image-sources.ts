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

interface BaseImageSource {
  /** Path used throughout the app, relative to /public. */
  file: string
  /** Human-written alt text. Describes the image, not the project. */
  alt: string
}

/** A licensed stock photo. Carries everything needed to credit the photographer. */
export interface UnsplashImageSource extends BaseImageSource {
  kind: 'unsplash'
  photoId: string
  /** Base image URL; resizing parameters are appended when it is requested. */
  baseUrl: string
  /** Public photo page — used for attribution links. */
  sourceUrl: string
  /** Unsplash API download-tracking endpoint (only called when an API key is present). */
  downloadLocation: string
  photographer: string
  photographerUrl: string
}

/**
 * Our own work — a screenshot or asset from a project we built.
 * No attribution, because there is no third party to credit.
 */
export interface OwnImageSource extends BaseImageSource {
  kind: 'own'
  /** Where the asset is served from, used as-is. */
  baseUrl: string
}

export type ImageSource = UnsplashImageSource | OwnImageSource

const UNSPLASH_UTM = '?utm_source=nexa&utm_medium=referral'

/** Appends the referral params Unsplash asks for on attribution links. */
export function withAttribution(url: string): string {
  return `${url}${UNSPLASH_UTM}`
}

export const imageSources: ImageSource[] = [
  // --- NOVA STAYS (hospitality) ---
  {
    kind: 'unsplash',
    file: '/images/projects/nova-stays-01.jpg',
    photoId: 'v2nO45qoGU0',
    baseUrl: 'https://images.unsplash.com/photo-1702814160779-4a88cfb330c7',
    sourceUrl: 'https://unsplash.com/photos/a-room-with-tables-chairs-and-candles-v2nO45qoGU0',
    downloadLocation: 'https://api.unsplash.com/photos/v2nO45qoGU0/download',
    photographer: 'Marek Okon',
    photographerUrl: 'https://unsplash.com/@marekokon',
    alt: 'A dimly lit hotel lobby with tables, chairs and candlelight',
  },
  {
    kind: 'unsplash',
    file: '/images/projects/nova-stays-02.jpg',
    photoId: 'mr-NvuceJl0',
    baseUrl: 'https://images.unsplash.com/photo-1639198288691-708e4031548c',
    sourceUrl: 'https://unsplash.com/photos/a-black-and-white-photo-of-a-building-at-night-mr-NvuceJl0',
    downloadLocation: 'https://api.unsplash.com/photos/mr-NvuceJl0/download',
    photographer: 'Aaron Boucicault',
    photographerUrl: 'https://unsplash.com/@nwiths',
    alt: 'A building at night, photographed in black and white',
  },
  {
    kind: 'unsplash',
    file: '/images/projects/nova-stays-03.jpg',
    photoId: '8po_nVPlfXk',
    baseUrl: 'https://images.unsplash.com/photo-1568382920853-c4f3bf8d58c4',
    sourceUrl: 'https://unsplash.com/photos/black-wooden-church-pew-8po_nVPlfXk',
    downloadLocation: 'https://api.unsplash.com/photos/8po_nVPlfXk/download',
    photographer: 'Anthony Chiado',
    photographerUrl: 'https://unsplash.com/@achiado',
    alt: 'Dark wooden seating in low light',
  },
  {
    kind: 'unsplash',
    file: '/images/projects/nova-stays-04.jpg',
    photoId: 'ypHN17P9EK4',
    baseUrl: 'https://images.unsplash.com/photo-1571275293295-7a6d0d4dadd6',
    sourceUrl: 'https://unsplash.com/photos/grey-concrete-building-interior-ypHN17P9EK4',
    downloadLocation: 'https://api.unsplash.com/photos/ypHN17P9EK4/download',
    photographer: 'Lianhao Qu',
    photographerUrl: 'https://unsplash.com/@lianhao',
    alt: 'A shadowed concrete interior',
  },

  // --- FORMA ARCHITECTS (architecture) ---
  {
    kind: 'unsplash',
    file: '/images/projects/forma-architects-01.jpg',
    photoId: 't6fOnFP65CE',
    baseUrl: 'https://images.unsplash.com/photo-1660404871825-6172f096ebfd',
    sourceUrl: 'https://unsplash.com/photos/a-long-hallway-with-benches-t6fOnFP65CE',
    downloadLocation: 'https://api.unsplash.com/photos/t6fOnFP65CE/download',
    photographer: 'Chris Johnson',
    photographerUrl: 'https://unsplash.com/@cj580',
    alt: 'A long concrete hallway lined with benches',
  },
  {
    kind: 'unsplash',
    file: '/images/projects/forma-architects-02.jpg',
    photoId: '72XYRWKK7FE',
    baseUrl: 'https://images.unsplash.com/photo-1651510693062-02e599a4ebca',
    sourceUrl: 'https://unsplash.com/photos/a-concrete-walkway-with-a-bridge-over-it-72XYRWKK7FE',
    downloadLocation: 'https://api.unsplash.com/photos/72XYRWKK7FE/download',
    photographer: 'Heloísa Oss Boll',
    photographerUrl: 'https://unsplash.com/@hossboll',
    alt: 'A concrete walkway running beneath a bridge',
  },
  {
    kind: 'unsplash',
    file: '/images/projects/forma-architects-04.jpg',
    photoId: 'Dh2TU6l4AjA',
    baseUrl: 'https://images.unsplash.com/photo-1651510693064-2035fe70787a',
    sourceUrl: 'https://unsplash.com/photos/a-large-glass-covered-patio-with-trees-Dh2TU6l4AjA',
    downloadLocation: 'https://api.unsplash.com/photos/Dh2TU6l4AjA/download',
    photographer: 'Heloísa Oss Boll',
    photographerUrl: 'https://unsplash.com/@hossboll',
    alt: 'A glass-covered courtyard seen from below',
  },

  // --- MIRA RESTAURANT (hospitality) ---
  {
    kind: 'unsplash',
    file: '/images/projects/mira-restaurant-01.jpg',
    photoId: 'gN49R_5vhT8',
    baseUrl: 'https://images.unsplash.com/photo-1571866735550-7b1ae3bdb144',
    sourceUrl: 'https://unsplash.com/photos/low-light-photo-of-turned-on-light-gN49R_5vhT8',
    downloadLocation: 'https://api.unsplash.com/photos/gN49R_5vhT8/download',
    photographer: '𝗔𝗹𝗲𝘅 𝘙𝘢𝘪𝘯𝘦𝘳',
    photographerUrl: 'https://unsplash.com/@alex_rainer',
    alt: 'A single warm light in a darkened room',
  },
  {
    kind: 'unsplash',
    file: '/images/projects/mira-restaurant-02.jpg',
    photoId: 'EX8UtPjOFhY',
    baseUrl: 'https://images.unsplash.com/photo-1613577813903-e9e9bc994cdb',
    sourceUrl: 'https://unsplash.com/photos/clear-wine-glass-on-table-EX8UtPjOFhY',
    downloadLocation: 'https://api.unsplash.com/photos/EX8UtPjOFhY/download',
    photographer: 'Anastasiia Krutota',
    photographerUrl: 'https://unsplash.com/@krutota',
    alt: 'A wine glass on a table in low light',
  },
  {
    kind: 'unsplash',
    file: '/images/projects/mira-restaurant-03.jpg',
    photoId: '8po_nVPlfXk',
    baseUrl: 'https://images.unsplash.com/photo-1568382920853-c4f3bf8d58c4',
    sourceUrl: 'https://unsplash.com/photos/black-wooden-church-pew-8po_nVPlfXk',
    downloadLocation: 'https://api.unsplash.com/photos/8po_nVPlfXk/download',
    photographer: 'Anthony Chiado',
    photographerUrl: 'https://unsplash.com/@achiado',
    alt: 'Dark timber seating in shadow',
  },

  // --- KORA COMMERCE (e-commerce) ---
  {
    kind: 'unsplash',
    file: '/images/projects/kora-commerce-01.jpg',
    photoId: 'd0Sl3AH8Tlg',
    baseUrl: 'https://images.unsplash.com/photo-1511140973288-19bf21d7e771',
    sourceUrl: 'https://unsplash.com/photos/black-iphone-turned-on-d0Sl3AH8Tlg',
    downloadLocation: 'https://api.unsplash.com/photos/d0Sl3AH8Tlg/download',
    photographer: 'Tyler Lastovich',
    photographerUrl: 'https://unsplash.com/@lastly',
    alt: 'A phone screen glowing against a black background',
  },
  {
    kind: 'unsplash',
    file: '/images/projects/kora-commerce-02.jpg',
    photoId: 'OtAFjcrAQGI',
    baseUrl: 'https://images.unsplash.com/photo-1656231267330-f605c1c16a57',
    sourceUrl: 'https://unsplash.com/photos/a-close-up-of-a-device-OtAFjcrAQGI',
    downloadLocation: 'https://api.unsplash.com/photos/OtAFjcrAQGI/download',
    photographer: 'Egor Komarov',
    photographerUrl: 'https://unsplash.com/@egorkomarov',
    alt: 'A close-up of a device on a dark surface',
  },
  {
    kind: 'unsplash',
    file: '/images/projects/kora-commerce-03.jpg',
    photoId: 'vGwnm-RDbNE',
    baseUrl: 'https://images.unsplash.com/photo-1580744996977-bcb703315d8a',
    sourceUrl: 'https://unsplash.com/photos/black-camera-on-brown-wooden-table-vGwnm-RDbNE',
    downloadLocation: 'https://api.unsplash.com/photos/vGwnm-RDbNE/download',
    photographer: 'Joshua Hanson',
    photographerUrl: 'https://unsplash.com/@joshuahanson43',
    alt: 'A black camera resting on a dark wooden table',
  },

  // --- ALBA SERVICES (professional services) ---
  {
    kind: 'unsplash',
    file: '/images/projects/alba-services-01.jpg',
    photoId: 'CosHjyONRk8',
    baseUrl: 'https://images.unsplash.com/photo-1555209183-8facf96a4349',
    sourceUrl: 'https://unsplash.com/photos/flat-screen-monitor-turned-on-CosHjyONRk8',
    downloadLocation: 'https://api.unsplash.com/photos/CosHjyONRk8/download',
    photographer: 'Fernando Hernandez',
    photographerUrl: 'https://unsplash.com/@_ferh97',
    alt: 'A monitor lit up in a dark room at night',
  },
  {
    kind: 'unsplash',
    file: '/images/projects/alba-services-02.jpg',
    photoId: 'YoIq2GyYcAU',
    baseUrl: 'https://images.unsplash.com/photo-1650661926447-9efb2610f64c',
    sourceUrl: 'https://unsplash.com/photos/a-laptop-sits-on-a-desk-YoIq2GyYcAU',
    downloadLocation: 'https://api.unsplash.com/photos/YoIq2GyYcAU/download',
    photographer: 'Faraaz Zuberi',
    photographerUrl: 'https://unsplash.com/@ffz_20',
    alt: 'A laptop on a desk in a dimly lit workspace',
  },
  {
    kind: 'unsplash',
    file: '/images/projects/alba-services-03.jpg',
    photoId: 'B3FwR-Hf9w8',
    baseUrl: 'https://images.unsplash.com/photo-1514732831-a02c97ac2c30',
    sourceUrl: 'https://unsplash.com/photos/macbook-laptop-computer-turned-on-B3FwR-Hf9w8',
    downloadLocation: 'https://api.unsplash.com/photos/B3FwR-Hf9w8/download',
    photographer: 'James McKinven',
    photographerUrl: 'https://unsplash.com/@jmckinven',
    alt: 'An open laptop glowing in a dark room',
  },

  // --- NORDIC INTERIORS (interior design) ---
  {
    kind: 'unsplash',
    file: '/images/projects/nordic-interiors-01.jpg',
    photoId: 'FaX7N_DdJjw',
    baseUrl: 'https://images.unsplash.com/photo-1708169967312-889c71da622b',
    sourceUrl: 'https://unsplash.com/photos/a-dark-room-with-a-bed-and-a-rocking-chair-FaX7N_DdJjw',
    downloadLocation: 'https://api.unsplash.com/photos/FaX7N_DdJjw/download',
    photographer: 'Peter Herrmann',
    photographerUrl: 'https://unsplash.com/@tama66',
    alt: 'A dark room with a bed and a rocking chair',
  },
  {
    kind: 'unsplash',
    file: '/images/projects/nordic-interiors-02.jpg',
    photoId: 'gumXxSBxPtg',
    baseUrl: 'https://images.unsplash.com/photo-1639259885955-89b27152ec6e',
    sourceUrl: 'https://unsplash.com/photos/a-living-room-with-a-white-couch-and-a-lamp-gumXxSBxPtg',
    downloadLocation: 'https://api.unsplash.com/photos/gumXxSBxPtg/download',
    photographer: 'Guven Gunes',
    photographerUrl: 'https://unsplash.com/@guvengunes',
    alt: 'A living room lit by a single lamp',
  },
  {
    kind: 'unsplash',
    file: '/images/projects/nordic-interiors-03.jpg',
    photoId: 'ypHN17P9EK4',
    baseUrl: 'https://images.unsplash.com/photo-1571275293295-7a6d0d4dadd6',
    sourceUrl: 'https://unsplash.com/photos/grey-concrete-building-interior-ypHN17P9EK4',
    downloadLocation: 'https://api.unsplash.com/photos/ypHN17P9EK4/download',
    photographer: 'Lianhao Qu',
    photographerUrl: 'https://unsplash.com/@lianhao',
    alt: 'A concrete interior in deep shadow',
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
  // Our own assets are served exactly as given; the resizing parameters below are
  // Unsplash's and mean nothing elsewhere.
  if (source.kind === 'own') return source.baseUrl

  const url = new URL(source.baseUrl)
  url.searchParams.set('fm', 'jpg')
  url.searchParams.set('fit', 'max')
  if (width) url.searchParams.set('w', String(width))
  if (quality) url.searchParams.set('q', String(quality))
  return url.toString()
}

/** Lookup by public path, used for alt text and photo credits. */
export const imageSourceByFile = new Map(imageSources.map((source) => [source.file, source]))
