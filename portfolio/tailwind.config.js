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
    zIndex: {
      '1':1,
      '2':2,
      '3':3,
      '4':4,
      '5':5,
      '100': 100,
      '150':150,
      '200':200,
      '250':250,
      '300':300,
      '400':400,
      '1000': 1000,
    },
    screens: {
      'xs': '375px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      fontFamily: {
        'audiowide': 'Audiowide'
      },
      letterSpacing: {
        widest: '.30em',
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [require('tailwind-scrollbar-hide')],
}
