/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js,ts,jsx,tsx,css}"],
  theme: {
    container: {
      padding: "25px",
      center: true,
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    fontFamily: {
      primary: ["Days One", "sans-serif"],
      secondary: ["Rambla", "sans-serif"],
    },
    backgroundImage: {
      hero: "url('/img/bg.jpg')",
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: "#305aa9",
          hover: "#2A55A5",
        },
        secondary: {
          DEFAULT: "#093a8d",
          hover: "#053382",
        },
      },
    },
  },
  plugins: [],
};
