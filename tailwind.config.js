/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto Mono", "sans-serif"],
        serif: ['Helvetica Neue', "sans-serif"]
      },
    },
  },
  plugins: [],
}