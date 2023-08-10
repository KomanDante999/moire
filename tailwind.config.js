/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        geometria: ["Geometria", "Arial", "sans-serif"],
        circe: ["Circe"]
      },
      screens: {
        mob: "416px"
      },
      colors: {
        primary: "#222222",
        secondary: "#9d9d9d",
        superlite: "#d1d1d1",
        e7e7e7: "#e7e7e7",
        b9b9b9: "#b9b9b9",
        dedede: "#dedede",
        bordLite: "#e2e2e2;",
        alarm: "#e02d71"
      },
      maxWidth: {
        "7xl": "1200px"
      },
      gridTemplateColumns: {
        "layout-header": "1fr 1fr 1fr 25px",
        "layout-header-mobil": "25px 1fr 25px",
        "layout-main": "290px 1fr",
        "layout-footer": "1.8fr 1fr",
        "layout-cart": "1fr auto",
        "cart-item": "120px 1fr auto auto",
        "2auto": "auto auto"
      },
      gridTemplateRows: {
        "layout-body": "auto 1fr auto"
      }
    }
  },
  plugins: [require("@tailwindcss/forms")]
};
