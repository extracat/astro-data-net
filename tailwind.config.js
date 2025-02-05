const colors = require('tailwindcss/colors')
const plugin = require('tailwindcss/plugin')

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {

    fontFamily: {
      'sans': ['InterVariable, Inter, ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
        {
          fontFeatureSettings: '"liga", "liga", "case", "cv10", "dlig", "cv01"',
          fontVariationSettings: 'normal'
        }
      ]
    },
    supports: {
      variableFonts: 'font-variation-settings: normal',
    },

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

        /* Light Mode */
        'adn-light': {
          'primary-lighter':  colors.indigo[400],
          'primary-light':    colors.indigo[600],
          'primary':          colors.indigo[700],
          'primary-dark':     colors.indigo[800],
          
          'error-light':      colors.red[400],
          'error':            colors.red[500],
          'error-dark':       colors.red[600],

          'warning-light':    colors.orange[400],
          'warning':          colors.orange[500],
          'warning-dark':     colors.orange[600],

          'fill-bg-lighter':  colors.white,
          'fill-bg-light':    colors.zinc[50],
          'fill-bg':          colors.zinc[100],
          'fill-bg-dark':     colors.zinc[200],
          
          'border-lighter':   colors.zinc[300],
          'border-light':     colors.zinc[400],

          'text-default':     colors.zinc[700],
          'text-active':      colors.zinc[900],
          'text-placeholder': colors.zinc[400],
          'text-label':       colors.zinc[500],
          'text-disabled':    colors.zinc[400],

          'link-default': ({ theme }) => theme('colors.adn-light.primary-light'),

          'control-bg': colors.zinc[100],
          'control-bg-active': colors.zinc[50],
          'control-bg-disable': colors.zinc[200],

          'control-primary-bg-default': ({ theme }) => theme('colors.adn-light.primary'),
          'control-primary-bg-hover': ({ theme }) => theme('colors.adn-light.primary-light'),

          'tag-sky':      colors.sky[300],
          'tag-purple':   colors.purple[300],
          'tag-amber':    colors.amber[300],
          'tag-emerald':  colors.emerald[300],
          'tag-zinc':     colors.zinc[300],
        },
        
        /* Dark Mode */
        'adn-dark': {
          'primary-lighter':  colors.indigo[400],
          'primary-light':    colors.indigo[600],
          'primary':          colors.indigo[700],
          'primary-dark':     colors.indigo[800],

          'error-light':      colors.red[400],
          'error':            colors.red[500],
          'error-dark':       colors.red[600],

          'warning-light':    colors.orange[400],
          'warning':          colors.orange[500],
          'warning-dark':     colors.orange[600],

          'fill-bg-lighter':  colors.black,
          'fill-bg-light':    colors.zinc[950],
          'fill-bg':          colors.zinc[900],
          'fill-bg-dark':     colors.zinc[800],
          
          'border-lighter':   colors.zinc[700],
          'border-light':     colors.zinc[600],

          'text-default':     colors.zinc[300],
          'text-active':      colors.zinc[100],
          'text-placeholder': colors.zinc[600],
          'text-label':       colors.zinc[500],
          'text-disabled':    colors.zinc[600],

          'link-default': ({ theme }) => theme('colors.adn-dark.primary-lighter'),

          'control-bg': colors.zinc[800],
          'control-bg-active': colors.zinc[800],
          'control-bg-disable': colors.zinc[900],

          'control-primary-bg-default': ({ theme }) => theme('colors.adn-dark.primary'),
          'control-primary-bg-hover': ({ theme }) => theme('colors.adn-dark.primary-light'),

          'tag-sky':      colors.sky[900],
          'tag-purple':   colors.purple[900],
          'tag-amber':    colors.amber[900],
          'tag-emerald':  colors.emerald[900],
          'tag-zinc':     colors.zinc[700],
        }

      },

      typography: ({ theme }) => ({

        DEFAULT: {
          css: {
            maxWidth: '800px', // max width of the prose acticle
            a: {
              // change anchor color and on hover
              color: '#03989E',
              cursor: 'resize',
                '&:hover': { // could be any. It's like extending css selector
                  color: '#F7941E',
                  cursor: 'resize',
                },
            },
          }
        },

        'adn-color': {
          css: {

            /* Light Mode */
            '--tw-prose-body': theme('colors.adn-light.text-default'),
            '--tw-prose-headings': theme('colors.adn-light.text-default'),
            '--tw-prose-lead': theme('colors.adn-light.text-default'),
            '--tw-prose-links': theme('colors.adn-light.link-default'),
            '--tw-prose-bold': theme('colors.adn-light.text-default'),
            '--tw-prose-counters': theme('colors.adn-light.text-default'),
            '--tw-prose-bullets': theme('colors.adn-light.text-default'),
            '--tw-prose-hr': theme('colors.adn-light.border-lighter'),
            '--tw-prose-quotes': theme('colors.adn-light.text-default'),
            '--tw-prose-quote-borders': theme('colors.adn-light.border-lighter'),
            '--tw-prose-captions': theme('colors.adn-light.text-default'),
            '--tw-prose-code': theme('colors.adn-light.text-default'),
            '--tw-prose-pre-code': theme('colors.adn-light.text-default'),
            '--tw-prose-pre-bg': theme('colors.adn-light.fill-bg-dark'),
            '--tw-prose-th-borders': theme('colors.adn-light.border-lighter'),
            '--tw-prose-td-borders': theme('colors.adn-light.border-lighter'),

            /* Dark Mode */
            '--tw-prose-invert-body': theme('colors.adn-dark.text-default'),
            '--tw-prose-invert-headings': theme('colors.adn-dark.text-default'),
            '--tw-prose-invert-lead': theme('colors.adn-dark.text-default'),
            '--tw-prose-invert-links': theme('colors.adn-dark.link-default'),
            '--tw-prose-invert-bold': theme('colors.adn-dark.text-default'),
            '--tw-prose-invert-counters': theme('colors.adn-dark.text-default'),
            '--tw-prose-invert-bullets': theme('colors.adn-dark.text-default'),
            '--tw-prose-invert-hr': theme('colors.adn-dark.border-lighter'),
            '--tw-prose-invert-quotes': theme('colors.adn-dark.text-default'),
            '--tw-prose-invert-quote-borders': theme('colors.adn-dark.border-lighter'),
            '--tw-prose-invert-captions': theme('colors.adn-dark.text-default'),
            '--tw-prose-invert-code': theme('colors.adn-dark.text-default'),
            '--tw-prose-invert-pre-code': theme('colors.adn-dark.text-default'),
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

    plugin(function({ addComponents }) {
      addComponents({

        //
        // '.text-h1-example': {
        // '@apply text-slate-900 dark:text-white text-2xl md:text-3xl lg:text-4xl font-bold': {},
        // // you can add additional CSS properties directly
        // lineHeight: '1.2',
        // },
        //
        
      })
    })
  ],
}

