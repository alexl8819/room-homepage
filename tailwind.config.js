/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'league-spartan': ['League Spartan', 'sans-serif']
      },
      colors: {
        'dark-gray': 'hsl(0, 0%, 63%)',
        'black': 'hsl(0, 0%, 0%)',
        'custom-white': 'hsl(0, 0%, 63%)',
        'very-dark-gray': 'hsl(0, 0%, 27%)'
      }
    }
  },
  plugins: []
}

