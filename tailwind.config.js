/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    'index.html',
  ],
  theme: {
    extend: {
      colors: {
        clifford: '#da373d',
        "btn-color": '#ABEF5F',
      }
    }
  },
  plugins: [require('daisyui'),],
}

