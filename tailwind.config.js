/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        primary: "#363738",
        secondary: "#DB4444",
        body: {
          DEFAULT: "#000000",
          grey: "#7D8184",
        },
        bg: {
          primary: "#F5F5F5",
          secondary: "#FEFAF1",
        },
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        poppins: ["Poppins", "serif"],
      },
    },
  },
  plugins: [],
};
