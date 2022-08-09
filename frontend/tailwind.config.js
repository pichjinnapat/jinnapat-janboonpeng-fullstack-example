/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "320px",
      },
      backgroundColor: {
        navy: {
          50: "#365474",
          100: "#314c68",
          200: "#2b435d",
          300: "#263b51",
          400: "#203246",
          500: "#1b2a3a",
          600: "#16222e",
          700: "#101923",
          800: "#0b1117",
          900: "#05080c",
        },
      },
      maxHeight: {
        "600px": "600px",
      },
      height: {
        "1/10": "10%",
        "3/10": "30%",
        "7/10": "70%",
        "9/10": "90%",
      },
      maxWidth: {
        96: "24rem",
      },
      fontSize: {
        46: "46px",
        50: "50px",
      },
    },
  },
  plugins: [],
};
