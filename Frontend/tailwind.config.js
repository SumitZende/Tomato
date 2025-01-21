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

