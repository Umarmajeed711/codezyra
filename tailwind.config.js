/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      //   spacing:{
      //   13: "1000px"
      // },
      colors:{
        // 'main-color': {
        //   100: "#05050d",
        //   200: "#05051d",
        //   300: "#00FF00"
        // }
        'main-color' : " #F9FAFB"
        /* 
        #0ee6b7  #1D4ED8 #10B981 */

      }
    },
  },
  plugins: [],
}

