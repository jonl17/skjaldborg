const plugin = require('tailwindcss/plugin')

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: 'rgb(190, 69, 69)',
        secondary: 'rgb(188, 220, 186)',
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
