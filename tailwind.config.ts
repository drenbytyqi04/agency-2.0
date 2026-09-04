import type { Config } from 'tailwindcss'

/**
 * Nexa design tokens.
 * Colours, spacing rhythm and type scale live here so components never carry raw hex values.
 */
const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './content/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        base: '#0B0B0D',
        surface: '#141417',
        'surface-raised': '#1B1B1F',
        ink: '#F2F0EB',
        muted: '#A0A09B',
        accent: '#C6FF3F',
        'accent-ink': '#0B0B0D',
        line: 'rgba(255,255,255,0.08)',
        'line-strong': 'rgba(255,255,255,0.18)',
        danger: '#FF6B5A',
      },
      fontFamily: {
        display: ['var(--font-display)', 'Barlow Condensed', 'Impact', 'sans-serif'],
        sans: ['var(--font-body)', 'Jost', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        // Editorial display scale. Fluid so 375px and 1920px each get an intentional size.
        'display-sm': ['clamp(2.25rem, 7vw, 3.5rem)', { lineHeight: '0.92', letterSpacing: '-0.01em' }],
        'display-md': ['clamp(2.75rem, 9vw, 6rem)', { lineHeight: '0.9', letterSpacing: '-0.015em' }],
        'display-lg': ['clamp(3.25rem, 11.5vw, 9.5rem)', { lineHeight: '0.86', letterSpacing: '-0.02em' }],
      },
      maxWidth: {
        shell: '1400px',
      },
      spacing: {
        gutter: 'clamp(1.25rem, 4vw, 3.5rem)',
        section: 'clamp(5rem, 11vw, 10rem)',
      },
      transitionTimingFunction: {
        editorial: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
      keyframes: {
        marquee: {
          from: { transform: 'translate3d(0,0,0)' },
          to: { transform: 'translate3d(-50%,0,0)' },
        },
      },
      animation: {
        marquee: 'marquee 42s linear infinite',
      },
    },
  },
  plugins: [],
}

export default config
