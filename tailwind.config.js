/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ivory: '#FAF7F2',
        stone: '#EDE7DD',
        'stone-deep': '#E3DBCE',
        charcoal: '#2B2724',
        'charcoal-soft': '#5C564F',
        brass: '#B08D57',
        'brass-line': '#C9A876',
        'brass-deep': '#9A7742',
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        body: ['"Inter"', 'sans-serif'],
      },
      letterSpacing: {
        wider2: '0.18em',
        widest2: '0.24em',
      },
      maxWidth: {
        prose2: '68ch',
      },
    },
  },
  plugins: [],
};
