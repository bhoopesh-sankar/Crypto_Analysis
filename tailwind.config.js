/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "Bg" : "url('../src/components/images/bg.png')",
      }
    },
  },
  plugins: [],
}