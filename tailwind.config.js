/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        emerald: {
          deep: '#054734',
          rich: '#0F6B4F',
          green: '#2E8B6E',
          sage: '#7FA68C',
          mint: '#B9D6C2',
        },
        ivory: {
          pearl: '#F4F1E6',
        },
        silver: '#C0C0C0',
        gold: '#C9A84C',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
};
