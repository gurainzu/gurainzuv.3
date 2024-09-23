/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}", "node_modules/preline/dist/*.js"],
  theme: {
    extend: {
      fontFamily: {
        valetta: "Valetta Man",
        nevermine: "nevermine",
        unica: "'Unica One', cursive;",
      },
    },
  },
  plugins: [require("tailwindcss-animated"), require("preline/plugin")],
};
