/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "cinza-azulado": "#535971",
        "cinza-claro": "#efefef",
        rosa: "#FF5374",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        staatliches: ["Staatliches", "cursive"],
      },
    },
  },
  plugins: [],
};
