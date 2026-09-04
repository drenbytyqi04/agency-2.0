import type { Metadata, Viewport } from 'next'
import { Barlow_Condensed, Jost } from 'next/font/google'

import { CustomCursor } from '@/components/layout/custom-cursor'
import { Footer } from '@/components/layout/footer'
import { Header } from '@/components/layout/header'
import { JsonLd } from '@/components/layout/json-ld'
import { siteConfig } from '@/lib/site'

import './globals.css'

const display = Barlow_Condensed({
  subsets: ['latin', 'latin-ext'],
  weight: ['600'],
  variable: '--font-display',
  display: 'swap',
})

const body = Jost({
  subsets: ['latin', 'latin-ext'],
  weight: ['400', '500'],
  variable: '--font-body',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — ${siteConfig.tagline}`,
    template: `%s — ${siteConfig.name}`,
  },
  description: siteConfig.description,
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: siteConfig.locale,
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} — ${siteConfig.tagline}`,
    description: siteConfig.description,
    images: [{ url: '/images/og/default.svg', width: 1200, height: 630, alt: siteConfig.name }],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteConfig.name} — ${siteConfig.tagline}`,
    description: siteConfig.description,
    images: ['/images/og/default.svg'],
  },
  robots: { index: true, follow: true },
}

export const viewport: Viewport = {
  themeColor: '#0B0B0D',
  colorScheme: 'dark',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="sq" className={`${display.variable} ${body.variable}`}>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-accent focus:px-4 focus:py-2 focus:font-sans focus:text-sm focus:text-accent-ink"
        >
          Kalo te përmbajtja
        </a>
        <CustomCursor />
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <JsonLd />
      </body>
    </html>
  )
}
