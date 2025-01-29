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
        'chardonte':"#fff4f2",
        'custom-gray': '#747474',
        'Eerie-Black':'#262626',
        'Light-Silver':'#d9d9d9',
        'Darck-Charcol':'#323232',
        
      },
      transitionDuration: {
        '3000': '3000ms',
      },
      backgroundImage: {
        'hero-section': "url('/src/assets/frontend_assets/header_img.png')",
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-in',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      gridTemplateColumns: {
        'auto-fill-240': 'repeat(auto-fill, minmax(240px, 1fr))',
        '2fr':'2fr 1fr 1fr',
        '1fr':'1fr 1.5fr 1fr 1fr 1fr  0.5fr'
      },
      boxShadow: {
        '1': '0px 0px 10px #00000015',
      },
      screens:{
        'lg':'1050px',
        'md':'900px',
        'sm':'750px'
      },
      zIndex: {
        '1': '1',
      },
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.hide-scrollbar': {
          /* Hide scrollbar for webkit-based browsers */
          '&::-webkit-scrollbar': {
            display: 'none',
          },
          /* Hide scrollbar for Firefox */
          '-ms-overflow-style': 'none',
          'scrollbar-width': 'none',
        },
      });
    },
  ],
}

