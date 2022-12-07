const colors = require('tailwindcss/colors');

module.exports = {
  mode: 'jit',
  darkMode: 'class',
  content: [
    './public/**/*.{html,svg}',
    './pages/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
    './lib/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    fontFamily: {
      monst: ['Montserrat'],
      quick: ['Quicksand']
    },
    extend: {
      colors: {
        orange: colors.orange,
        primary: '#16202A',
        secondary: '#292C42',
        tertiary: '#5D7DED',
        accent: '#71C3A8'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: [
    require('@tailwindcss/aspect-ratio')
    // require("@tailwindcss/forms"),
  ]
};
