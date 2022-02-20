const plugin = require('tailwindcss/plugin')

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      'apfel-grotezk': ['ApfelGrotezk', 'sans-serif'],
    },
    extend: {
      colors: {
        primary: '#970400',
        secondary: '#F9C100',
        tertiary: '#DF2C1D',
        black: '#380E09',
        white: '#F1EFF1',
      },
      keyframes: {
        'roll-down-enter': {
          from: {
            'clip-path': 'inset(0 0 100% 0)',
          },
          to: { 'clip-path': 'inset(0)' },
        },
      },
      animation: {
        'roll-down-enter': 'roll-down-enter 0.4s forwards ease-in-out',
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({})
    }),
  ],
}
