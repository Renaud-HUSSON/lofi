module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'montserrat': ['Montserrat'],
        'bangers': ['Bangers']
      },
      colors: {
        black: '#161616'
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
