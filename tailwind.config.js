/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FFAB23",
        secondary: "#FFFFFF",
        tertiary: "#000000",
        quaternary: "#050E15",
      },
      boxShadow: {
        large: "0px 0px 30px 10px rgba(0, 0, 0, 0.5)",
      },
      backgroundImage: {
        default: 'url("./src/assets/images/bg.png")',
      },
    },
  },
  plugins: [],
};
