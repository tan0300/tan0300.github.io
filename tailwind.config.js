/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './assets/app.js'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: { ink: '#07132b', brand: '#4057ff' },
      fontFamily: { sans: ['Inter', 'system-ui', 'sans-serif'] }
    }
  },
  plugins: []
}
