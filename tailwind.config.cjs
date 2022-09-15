/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        invoice: 'repeat(8, auto)'
      }
    },
  },
  plugins: [],
}
