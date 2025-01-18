/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'navbar_font': '#49557e',
        'tomato': '#FF6347',
        'chardonte':"#fff4f2"
      },
      transitionDuration: {
        '3000': '3000ms',
      }
    },
  },
  plugins: [],
}

