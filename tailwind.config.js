/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      maxWidth: {
        "7xl": "1200px"
      },
      gridTemplateColumns: {
        "layout-header": "1fr 1fr 1fr 25px"
      }
    }
  },
  plugins: [require("@tailwindcss/forms")]
};
