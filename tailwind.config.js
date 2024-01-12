/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      fontFamily:{
        hurricane: ['Hurricane']
      },
      backgroundColor:{
        'bgcolor1':'#FCF9F9',
        'bgcolor2': '#D9D9D9',
        'biru': '#103F77'
      },
      textColor: {
        'abuabu':'#AEAEAE'
      }
    },
  },
  plugins: [require('flowbite/plugin')],
}

