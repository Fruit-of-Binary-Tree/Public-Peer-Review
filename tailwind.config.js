/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily:{
        lato: "'Crimson Text', serif",
        dm:"'Exo 2', sans-serif",
        prompt:"'prrompt',Regular 400"
      }
    },
  },
  plugins: [],
}
