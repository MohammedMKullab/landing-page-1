/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    container:{
      padding:{
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '0rem',
        // '2xl': '195px',
      },
    },
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1040px',
    },
    colors: {
      'primary': '#365B6D', 
      'second': '#FF7B47',
      'tcolor':'#203641',
      'tcolor2':'#737373',
      'purple': '#7e5bef',
      'pink': '#ff49db',
      'orange': '#ff7849',
      'green': '#13ce66',
      'yellow': '#ffc82c',
      'gray-dark': '#273444',
      'gray': '#8492a6',
      'gray-light': '#d3dce6',
      'black': '#000',
      'white': '#fff',
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
      mono: []
    },
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    },
    letterSpacing : {
      normal:'0.2px'
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
  darkMode:'class'
}
