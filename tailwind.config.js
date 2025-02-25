/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#60a5fa',
        secondary: '#a78bfa',
        dark: '#0f172a',
        'dark-light': '#1e293b',
        'text-primary': '#e2e8f0',
        'text-secondary': '#94a3b8',
      },
    },
  },
  plugins: [],
} 