/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontSize: {
      'xs':   '0.875rem',
      'sm':   '1rem',       /* body-2 */
      'base': '1.125rem',   /* body-1 */
      'lg':   '1.25rem',    /* h4 */
      'xl':   '1.5rem',     /* h3 */
      '2xl':  '1.875rem',   /* h2 */
      '3xl':  '2.25rem',    /* h1 */
      '4xl':  '3rem',
      '5xl':  '3.75rem',
      '6xl':  '4.5rem',
      '7xl':  '6rem',
      '8xl':  '8rem',
      '9xl':  '12rem',
    },
    container: {
      center: true,
    },
    extend: {
      colors: {   

        /* Semantic Colors */
        'adn-color': {
          'primary-lighter':  'var(--adn-color-primary-lighter)',
          'primary-light':    'var(--adn-color-primary-light)',
          'primary':          'var(--adn-color-primary)',
          'primary-dark':     'var(--adn-color-primary-dark)',
          
          'error-light':      'var(--adn-color-error-light)',
          'error':            'var(--adn-color-error)',
          'error-dark':       'var(--adn-color-error-dark)',

          'warning-light': 'var(--adn-color-warning-light)',
          'warning': 'var(--adn-color-warning)',
          'warning-dark': 'var(--adn-color-warning-dark)',

          'fill-bg-lighter':  colors.white,
          'fill-bg-light': 'var(--adn-color-fill-bg-light)',
          'fill-bg': 'var(--adn-color-fill-bg)',
          'fill-bg-dark': 'var(--adn-color-fill-bg-dark)',
          
          'border-lighter': 'var(--adn-color-border-lighter)',
          'border-light': 'var(--adn-color-border-light)',

          'text-default': 'var(--adn-color-text-default)',
          'text-active': 'var(--adn-color-text-active)',
          'text-placeholder': 'var(--adn-color-text-placeholder)',
          'text-label': 'var(--adn-color-text-label)',
          'text-disabled': 'var(--adn-color-text-disabled)',

          'link-default': 'var(--adn-color-link-default)',

          'control-bg': 'var(--adn-color-control-bg)',
          'control-bg-active': 'var(--adn-color-control-bg-active)',
          'control-bg-disable': 'var(--adn-color-control-bg-disable)',

          'control-primary-bg-default': 'var(--adn-color-control-primary-bg-default)',
          'control-primary-bg-hover': 'var(--adn-color-control-primary-bg-hover)',

          'tag-sky': 'var(--adn-color-tag-sky)',
          'tag-purple': 'var(--adn-color-tag-purple)',
          'tag-amber': 'var(--adn-color-tag-amber)',
          'tag-emerald': 'var(--adn-color-tag-emerald)',
          'tag-zinc': 'var(--adn-color-tag-zinc)',
        },
      },

      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            maxWidth: '800px', // max width of the prose acticle
            a: false,
          }
        },
        'adn-color': {
          css: {
            '--tw-prose-body': theme('colors.adn-color.text-default'),
            '--tw-prose-headings': theme('colors.adn-color.text-default'),
            '--tw-prose-lead': theme('colors.adn-color.text-default'),
            '--tw-prose-links': theme('colors.adn-color.link-default'),
            '--tw-prose-bold': theme('colors.adn-color.text-default'),
            '--tw-prose-counters': theme('colors.adn-color.text-default'),
            '--tw-prose-bullets': theme('colors.adn-color.text-default'),
            '--tw-prose-hr': theme('colors.adn-color.border-lighter'),
            '--tw-prose-quotes': theme('colors.adn-color.text-default'),
            '--tw-prose-quote-borders': theme('colors.adn-color.border-lighter'),
            '--tw-prose-captions': theme('colors.adn-color.text-default'),
            '--tw-prose-code': theme('colors.adn-color.text-default'),
            '--tw-prose-pre-code': theme('colors.adn-color.text-default'),
            '--tw-prose-pre-bg': theme('colors.adn-color.fill-bg-dark'),
            '--tw-prose-th-borders': theme('colors.adn-color.border-lighter'),
            '--tw-prose-td-borders': theme('colors.adn-color.border-lighter'),
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

