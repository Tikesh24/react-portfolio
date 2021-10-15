module.exports = {
  mode: 'jit',
  purge: [
    // './src/**/*.html',
    //  './src/**/*.js',
     './pages/**/*.{js,ts,jsx,tsx}',
     './components/**/*.{js,ts,jsx,tsx}'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'audiowide': 'Audiowide'
      },
      letterSpacing: {
        widest: '.30em',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('tailwind-scrollbar-hide')],
}
