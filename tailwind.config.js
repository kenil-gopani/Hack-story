/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ['IBM Plex Mono', 'Courier New', 'monospace'],
      },
      colors: {
        'hacker-green': '#00ff00',
        'hacker-blue': '#00ffff',
        'dark-bg': '#0a0a0a',
      },
    },
  },
  plugins: [],
} 