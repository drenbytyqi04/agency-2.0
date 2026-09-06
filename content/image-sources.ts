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
  // --- AZ NAPOLI (our own work) ---
  {
    kind: 'own',
    file: '/images/projects/az-napoli-01.webp',
    baseUrl:
      'https://uploads-ssl.webflow.com/64c8badb57edee159dbe8044/64dd0d875bc91ba230d775ae_N-Share.webp',
    alt: 'The AZ Napoli website',
  },

  // --- AZ UTAH (our own work) ---
  {
    kind: 'own',
    file: '/images/projects/az-utah-01.png',
    baseUrl:
      'https://uploads-ssl.webflow.com/662b9c7b69053462362f22b0/664483b7d9d802583f57501b_Share%20Image.png',
    alt: 'The AZ Utah website',
  },

  // --- AZ IOWA (our own work) ---
  {
    kind: 'own',
    file: '/images/projects/az-iowa-01.avif',
    baseUrl:
      'https://uploads-ssl.webflow.com/66b0deec483a0496679c6baf/66b8eee1f8f1d06c15729cb0_Share%20Image.avif',
    alt: 'The AZ Iowa website',
  },

  // --- AZ VERMONT (our own work) ---
  {
    kind: 'own',
    file: '/images/projects/az-vermont-01.png',
    baseUrl:
      'https://uploads-ssl.webflow.com/66b9ee8bc51587ba1b688d9d/66bf56435092aff8a1a38d1d_Share%20Image.png',
    alt: 'The AZ Vermont website',
  },

  // --- AZ MONTANA (our own work) ---
  {
    kind: 'own',
    file: '/images/projects/az-montana-01.png',
    baseUrl:
      'https://uploads-ssl.webflow.com/668e45daa5a9b2e423712e85/66ac984c55e6fb26e0910a56_Share%20Image.png',
    alt: 'The AZ Montana website',
  },

  // --- AZ MELBOURNE (our own work) ---
  {
    kind: 'own',
    file: '/images/projects/az-melbourne-01.png',
    baseUrl:
      'https://uploads-ssl.webflow.com/6686b34714ab28490660b6fe/6697c410a624e37eca7f6177_Share%20Image.png',
    alt: 'The AZ Melbourne website',
  },

  // --- AZ BALI (our own work) ---
  {
    kind: 'own',
    file: '/images/projects/az-bali-01.webp',
    baseUrl:
      'https://uploads-ssl.webflow.com/65b0d975ca7b9ae3079f600a/65c0cc1a267f73938f38d0eb_Bali%20Share%20Image.webp',
    alt: 'The AZ Bali website',
  },

  // --- AZ NEW ZEALAND (our own work) ---
  {
    kind: 'own',
    file: '/images/projects/az-new-zealand-01.png',
    baseUrl:
      'https://uploads-ssl.webflow.com/65fc09cc06f822c9e0bce732/660ea76827b989d0c1c7efdf_Share%20Image.png',
    alt: 'The AZ New Zealand website',
  },

  // --- AZ PALERMO (our own work) ---
  {
    kind: 'own',
    file: '/images/projects/az-palermo-01.png',
    baseUrl:
      'https://uploads-ssl.webflow.com/65c0fb3cadeb13600562bfe2/65dda83f5c31d4c732ba38ea_Share%20Image.png',
    alt: 'The AZ Palermo website',
  },

  // --- AZ HAWAII (our own work) ---
  {
    kind: 'own',
    file: '/images/projects/az-hawaii-01.png',
    baseUrl:
      'https://uploads-ssl.webflow.com/65ddd6fdff73da8b76febd81/65eef1a91d177030788731d8_Share%20Image.png',
    alt: 'The AZ Hawaii website',
  },

  // --- AZ WASHINGTON (our own work) ---
  {
    kind: 'own',
    file: '/images/projects/az-washington-01.webp',
    baseUrl:
      'https://uploads-ssl.webflow.com/64c8d0026165123ac91679b5/64df68ad46ca4c034d2930af_Share%20Image.webp',
    alt: 'The AZ Washington website',
  },

  // --- AZ PANAMA (our own work) ---
  {
    kind: 'own',
    file: '/images/projects/az-panama-01.png',
    baseUrl:
      'https://uploads-ssl.webflow.com/66436189035e4b5076a33ee8/6655e88529b4019ad9e564d0_Share%20Image.png',
    alt: 'The AZ Panama website',
  },

  // --- AZ TIRANA (our own work) ---
  {
    kind: 'own',
    file: '/images/projects/az-tirana-01.webp',
    baseUrl:
      'https://uploads-ssl.webflow.com/654a42c3e8cf6332f79e80b8/654e4eccbcd32bdad6a316bc_Tirana-Share.webp',
    alt: 'The AZ Tirana website',
  },

  // --- AZ DOHA (our own work) ---
  {
    kind: 'own',
    file: '/images/projects/az-doha-01.jpg',
    baseUrl:
      'https://uploads-ssl.webflow.com/651ec1e289febb8d52431f26/654114ea280959436d6cf2c5_Share%20Image.jpg',
    alt: 'The AZ Doha website',
  },

  // --- AZ GALWAY (our own work) ---
  {
    kind: 'own',
    file: '/images/projects/az-galway-01.webp',
    baseUrl:
      'https://cdn.prod.website-files.com/64f709df5f44977b52a39183/64ff2334e7dbb2c6416a9e82_Buy-Image.webp',
    alt: 'The AZ Galway website',
  },

  // --- AZ BELFAST (our own work) ---
  {
    kind: 'own',
    file: '/images/projects/az-belfast-01.png',
    baseUrl:
      'https://cdn.prod.website-files.com/66f2c90a1e2adf5e253e3d6d/66fa7f7a569bf012aeb65c43_Share%20Image.png',
    alt: 'The AZ Belfast website',
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
