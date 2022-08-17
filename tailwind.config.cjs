/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    fontFamily: {
      kepler: ["kepler-std-semicondensed-dis", "Garamond, serif"],
      fira: ["fira-sans-compressed", "sans-serif"],
      "fira-light": ["fira-sans-compressed-2", "sans-serif"]
    },
    extend: {}
  },
  plugins: [require("@tailwindcss/forms")]
};
