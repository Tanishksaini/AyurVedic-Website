/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        Mehaai: {
          primary: '#C6A45C',     // Rich gold
          secondary: '#006C45',   // Deep green
          accent: '#E9B96E',      // Warm gold
          light: '#FDF6E9',       // Cream
          dark: '#2C4F3E',        // Forest green
          beige: '#F5EDE3',       // Soft beige
          brown: '#8B4513',       // Earthy brown
          sage: '#7FA886'         // Soft sage
        }
      },
      fontFamily: {
        serif: ['Crimson Text', 'serif'],
        display: ['Crimson Text', 'serif']
      },
      backgroundImage: {
        'texture': "url('https://www.transparenttextures.com/patterns/natural-paper.png')"
      }
    },
  },
  plugins: [],
};