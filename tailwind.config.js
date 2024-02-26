/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      'sans': ['Inter, ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
        {
          fontFeatureSettings: '"liga", "calt", "case", "cv10", "dlig", "cv01"',
          fontVariationSettings: 'normal'
        }
      ]
    },
    fontSize: {
      'xs': '0.75rem',
      'sm': '0.888888rem',  /* body-2 */
      'base': '1rem',       /* body-1 */
      'lg': '1.125rem',     /* h4 */
      'xl': '1.25rem',      /* h3 */
      '2xl': '1.333333rem', /* h2 */
      '3xl': '1.777777rem', /* h1 */
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '3.75rem',
      '7xl': '4.5rem',
      '8xl': '6rem',
      '9xl': '8rem',
    },
    container: {
      center: true,
    },
    extend: {
      colors: {
        
        /* Semantic Colors */

        /* Light Mode */
        'adn-light': {
          'bg': colors.zinc[100],
          'bg-lighter': colors.white,
          'bg-dark': colors.zinc[200],

          'text': colors.zinc[700],
          'text-active': colors.zinc[900],
          'text-placeholder': colors.zinc[500],
          'text-disabled': colors.zinc[400],
          'link': colors.indigo[600],

          'border-lighter': colors.zinc[300],
        },
        
        /* Dark Mode */
        'adn-dark': {
          'bg': colors.zinc[900],
          'bg-lighter': colors.black,
          'bg-dark': colors.zinc[800],

          'text': colors.zinc[300],
          'text-active': colors.zinc[100],
          'text-placeholder': colors.zinc[500],
          'text-disabled': colors.zinc[600],
          'link': colors.indigo[400],

          'border-lighter': colors.zinc[700],
        }

      },
      typography: ({ theme }) => ({
        'adn-color': {
          css: {
            /* Light Mode */
            '--tw-prose-body': theme('colors.adn-light.text'),
            '--tw-prose-headings': theme('colors.adn-light.text'),
            '--tw-prose-lead': theme('colors.adn-light.text'),
            '--tw-prose-links': theme('colors.adn-light.link'),
            '--tw-prose-bold': theme('colors.adn-light.text'),
            '--tw-prose-counters': theme('colors.adn-light.text'),
            '--tw-prose-bullets': theme('colors.adn-light.text'),
            '--tw-prose-hr': theme('colors.adn-light.border-lighter'),
            '--tw-prose-quotes': theme('colors.adn-light.text'),
            '--tw-prose-quote-borders': theme('colors.adn-light.border-lighter'),
            '--tw-prose-captions': theme('colors.adn-light.text'),
            '--tw-prose-code': theme('colors.adn-light.text'),
            '--tw-prose-pre-code': theme('colors.adn-light.text'),
            '--tw-prose-pre-bg': theme('colors.adn-light.bg-dark'),
            '--tw-prose-th-borders': theme('colors.adn-light.border-lighter'),
            '--tw-prose-td-borders': theme('colors.adn-light.border-lighter'),

            /* Dark Mode */
            '--tw-prose-invert-body': theme('colors.adn-dark.text'),
            '--tw-prose-invert-headings': theme('colors.adn-dark.text'),
            '--tw-prose-invert-lead': theme('colors.adn-dark.text'),
            '--tw-prose-invert-links': theme('colors.adn-dark.link'),
            '--tw-prose-invert-bold': theme('colors.adn-dark.text'),
            '--tw-prose-invert-counters': theme('colors.adn-dark.text'),
            '--tw-prose-invert-bullets': theme('colors.adn-dark.text'),
            '--tw-prose-invert-hr': theme('colors.adn-dark.border-lighter'),
            '--tw-prose-invert-quotes': theme('colors.adn-dark.text'),
            '--tw-prose-invert-quote-borders': theme('colors.adn-dark.border-lighter'),
            '--tw-prose-invert-captions': theme('colors.adn-dark.text'),
            '--tw-prose-invert-code': theme('colors.adn-dark.text'),
            '--tw-prose-invert-pre-code': theme('colors.adn-dark.text'),
            '--tw-prose-invert-pre-bg': theme('colors.adn-dark.bg-dark'),
            '--tw-prose-invert-th-borders': theme('colors.adn-dark.border-lighter'),
            '--tw-prose-invert-td-borders': theme('colors.adn-dark.border-lighter'),
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

