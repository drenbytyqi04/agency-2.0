import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [375, 640, 768, 1024, 1280, 1440, 1920],
    // Project photography is served from Unsplash's CDN unless a local copy has been
    // downloaded with `npm run images`. Next still optimises and resizes it.
    remotePatterns: [{ protocol: 'https', hostname: 'images.unsplash.com' }],
  },
  eslint: {
    // Linting is its own gate (`npm run lint`, and CI). Keeping it out of the production
    // build means a lint tooling problem on a build machine can never block a deploy.
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Type errors must always fail the build. Never set this to true.
    ignoreBuildErrors: false,
  },
}

export default nextConfig
