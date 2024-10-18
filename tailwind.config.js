/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FFAB23",
        primary1: "#F0801C",
        secondary: "#FFFFFF",
        tertiary: "#0F0F0F",
        quaternary: "#050E15",
      },
      boxShadow: {
        large: "0px 0px 30px 10px rgba(0, 0, 0, 0.5)",
      },
      backgroundImage: {
        default: 'url("./src/assets/images/bg.png")',
      },
      textStroke: {
        DEFAULT: "1px",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        raleway: ["Raleway", "sans-serif"],
        gabriela: ["Gabriela", "serif"],
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".text-stroke": {
          "text-shadow":
            "1px 1px 0 #F0801C, -1px -1px 0 #F0801C, 1px -1px 0 #F0801C, -1px 1px 0 #F0801C",
        },
      });
    },
  ],
};
