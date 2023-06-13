/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'league-spartan': ['League Spartan', 'sans-serif']
      },
      backgroundImage: {
        'mobile-hero-1': 'url("./images/mobile-image-hero-1.jpg")',
        'mobile-hero-2': 'url("./images/mobile-image-hero-2.jpg")',
        'mobile-hero-3': 'url("./images/mobile-image-hero-3.jpg")'
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

