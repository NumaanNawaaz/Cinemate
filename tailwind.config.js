/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      screens:{
        "other":{'min':'340px' , 'max':'1280px'},
      },
      colors:{
        "grad":'#ffafbd',
      },
    },
  },
  plugins: [],
}

