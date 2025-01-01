/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'color1': '#DAFFFB',
        'color2': '#64CCC5',
        'color3': '#176B87',
        'color4': '#001C30',
        // 'color2-hover': '#50A39D',
      },
      fontFamily: {
        nunito: ['Nunito', 'sans-serif'],
      },
      scrollbarWidth: {
        none: 'none'
      },
    },
  },
  plugins: [
    function ({ addUtilities }){
      addUtilities(
        {
          '.scrollbar-none':{
            scrollbarWidth: 'none',
          },
        },
        ['responsive', 'hover']
      );
    }
  ],
}

