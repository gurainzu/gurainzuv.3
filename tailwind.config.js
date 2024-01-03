/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'valetta': "Valetta Man",
        'nevermine' : "nevermine",
        'unica':"'Unica One', cursive;",
      }
    },
  },
  plugins: [
    require('tailwindcss-animated')
  ],
}