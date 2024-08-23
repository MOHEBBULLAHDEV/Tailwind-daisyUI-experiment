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
        "ground-color":'background: linear-gradient(0.00deg, rgb(255, 255, 255),rgba(255, 255, 255, 0) 100%);'
      }
    }
  },
  plugins: [require('daisyui'),],
}

