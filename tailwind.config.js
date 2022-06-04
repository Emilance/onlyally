module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  corePlugins: {
    aspectRatio: false,
  },
  theme: {
    extend: {
      animation: {
        loader: 'loader 0.6s infinite alternate'
      },
      keyframes: {
        loader: {
          to: {
            opacity: 0.1,
            transform: 'translate3d(0, -1rem, 0)'
          }
        }
      }
    ,
      colors: {
        'playRed' : '#BA253D',
        'lightPlayRed' : '#FF1636',
        'textPlayRed' : '#CF0A08',
        'bgtext' : '#EDE7E7',
      },
      screens: {
        'xs': '359px',
        'xx': '376px',
        'ss': "411px"
      }
    },
  },
  plugins: [
    require('tailwind-scroll-behavior')(),
    require('tailwind-scrollbar-hide'),
    require('@tailwindcss/forms'),
    require('tailwind-scrollbar'),
    require('@tailwindcss/aspect-ratio'),
  ],
}