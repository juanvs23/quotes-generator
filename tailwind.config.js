const colors = require('tailwindcss/colors')
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    minHeight: {
      '1/2': '50vh',
      '1':'100vh'
    },
    container:{
      padding:'15px',
      maxWidth:"900px",
      center:true
    },
    colors:{
      transparent: 'transparent',
      'white': '#ffffff',
      gray:{
        51:"#333"
      },
      yellow:{
        F7DF94:'#F7DF94'
      }
    },
    extend: {

    },
  },
  plugins: [],
}
