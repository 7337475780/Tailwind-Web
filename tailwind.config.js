/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.html"],
  theme: {
    extend: {
      fontFamily: {
        'main': ['Poppins', 'sans-serif'],
        'par': ['Inter', 'sans-serif']
      }
    },
  },
  plugins: [],
}

