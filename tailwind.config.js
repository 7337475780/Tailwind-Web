/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.html"],
  theme: {
    extend: {
      fontFamily: {
        'main': ['Poppins', 'sans-serif'],
        'par': ['Inter', 'sans-serif']
      },
      colors: {
        'btn': '#3238f2',
        'ver': '#FEFCE8',
        'btn-hover': '#464AF1',
      }
    },
  },
  plugins: [],
}

