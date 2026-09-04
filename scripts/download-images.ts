/**
 * Downloads every photo listed in content/image-sources.ts into public/images/projects/.
 *
 * Run with: npm run images
 *
 * The script is safe to run without credentials. UNSPLASH_ACCESS_KEY is optional and is only
 * used to ping Unsplash's download-tracking endpoint, which their API guidelines require of
 * API consumers. The key is read from the environment inside this Node script and is never
 * bundled into the client — nothing here is imported by the app.
 *
 * Images already present are skipped, so re-running is cheap. Pass --force to re-download.
 */

import { createWriteStream } from 'node:fs'
import { mkdir, stat } from 'node:fs/promises'
import { dirname, join } from 'node:path'
import { Readable } from 'node:stream'
import { pipeline } from 'node:stream/promises'

import { imageSources } from '../content/image-sources'

const PUBLIC_DIR = join(process.cwd(), 'public')
/** Long edge in px. Large enough for a full-bleed hero on a 1920px display, small enough to stay fast. */
const TARGET_WIDTH = 2000
const QUALITY = 72
const force = process.argv.includes('--force')
const accessKey = process.env.UNSPLASH_ACCESS_KEY

/** Unsplash's documented dynamic-resizing parameters. */
function buildUrl(baseUrl: string): string {
  const url = new URL(baseUrl)
  url.searchParams.set('fm', 'jpg')
  url.searchParams.set('fit', 'max')
  url.searchParams.set('w', String(TARGET_WIDTH))
  url.searchParams.set('q', String(QUALITY))
  return url.toString()
}

async function exists(path: string): Promise<boolean> {
  try {
    const info = await stat(path)
    return info.size > 0
  } catch {
    return false
  }
}

/**
 * Unsplash asks API clients to call the download endpoint whenever a photo is used.
 * Without a key we skip it rather than sending an unauthenticated request.
 */
async function trackDownload(downloadLocation: string): Promise<void> {
  if (!accessKey) return
  try {
    await fetch(downloadLocation, {
      headers: { Authorization: `Client-ID ${accessKey}` },
    })
  } catch {
    // Tracking is best-effort; a failure here must never fail the download.
  }
}

async function download(url: string, destination: string): Promise<void> {
  const response = await fetch(url)
  if (!response.ok || !response.body) {
    throw new Error(`HTTP ${response.status} for ${url}`)
  }
  await mkdir(dirname(destination), { recursive: true })
  await pipeline(Readable.fromWeb(response.body as never), createWriteStream(destination))
}

async function main(): Promise<void> {
  console.log(`Nexa · image sync — ${imageSources.length} photos`)
  if (!accessKey) {
    console.log('UNSPLASH_ACCESS_KEY not set: downloading from the verified URLs in the manifest')
    console.log('without download tracking. Set the key in .env.local to enable it.\n')
  }

  let downloaded = 0
  let skipped = 0
  const failures: string[] = []

  for (const source of imageSources) {
    const destination = join(PUBLIC_DIR, source.file)

    if (!force && (await exists(destination))) {
      skipped += 1
      continue
    }

    try {
      await download(buildUrl(source.baseUrl), destination)
      await trackDownload(source.downloadLocation)
      downloaded += 1
      console.log(`  ✓ ${source.file}  · ${source.photographer}`)
    } catch (error) {
      failures.push(`${source.file}: ${(error as Error).message}`)
      console.warn(`  ✗ ${source.file} — ${(error as Error).message}`)
    }
  }

  console.log(`\nDone. ${downloaded} downloaded, ${skipped} already present, ${failures.length} failed.`)

  if (failures.length > 0) {
    // A missing photo must not break the build: components fall back to a styled placeholder.
    console.log('\nFailed downloads are non-fatal — the UI renders a placeholder for missing files.')
    process.exitCode = 0
  }
}

void main()
