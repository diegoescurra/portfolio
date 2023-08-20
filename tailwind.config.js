/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'ssm': '640px',
      // => @media (min-width: 640px) { ... }

      'smd': '768px',
      // => @media (min-width: 768px) { ... }

      'slg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'sxl': '1280px',
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
      }
    },
  },
  plugins: [],
};

