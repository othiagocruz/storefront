/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    fontFamily: { kepler: ["kepler-std-semicondensed-dis", "Garamond, serif"] },
    extend: {}
  },
  plugins: [require("@tailwindcss/forms")]
};
