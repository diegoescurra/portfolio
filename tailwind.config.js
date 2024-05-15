/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      
      colors: {
        'arsenic': '#33434F',
        'shadowc': '#628190',
        'pastel-cyan' : '#A4D8D8',
        'solitude' : '#ECEDEF',
      },
      height: {
        '112': '28rem',
        '128': '32rem',
      },
      fontFamily: {
        'roboto' : 'Roboto, sans-serif'
      },
      animation: {
        slide: 'slide 14s infinite linear',
        slideInverse: 'slideInverse 14s infinite linear'
      }
      
    },
  },
  plugins: [],
};

