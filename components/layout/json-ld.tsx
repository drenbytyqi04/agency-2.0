import { siteConfig } from '@/lib/site'

/**
 * Organization + LocalBusiness structured data.
 * No street address is claimed — only the city, which is all that is verifiable.
 */
export function JsonLd() {
  const graph = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': `${siteConfig.url}/#organization`,
        name: siteConfig.name,
        url: siteConfig.url,
        description: siteConfig.description,
        email: siteConfig.contact.email,
        telephone: siteConfig.contact.phone,
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Prishtina',
          addressCountry: 'XK',
        },
      },
      {
        '@type': 'LocalBusiness',
        '@id': `${siteConfig.url}/#localbusiness`,
        name: siteConfig.name,
        url: siteConfig.url,
        description: siteConfig.description,
        image: `${siteConfig.url}/images/og/default.svg`,
        email: siteConfig.contact.email,
        telephone: siteConfig.contact.phone,
        priceRange: '€€',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Prishtina',
          addressCountry: 'XK',
        },
        areaServed: ['Kosovo', 'Switzerland', 'Germany', 'Austria'],
      },
    ],
  }

  return (
    <script
      type="application/ld+json"
      // Content is a static object built above, not user input.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  )
}
