module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
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
