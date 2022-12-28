/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      Poppins: "Poppins",
      Paprika: "Paprika",
      Inria: "Inria Serif",
    },
    container: {
      center: true,
      padding: "4rem",
    },
    extend: {
      colors: {
        dark_primary: "#06223F",
        bg_light_primary: "#F5F9FD",
        light_secondary: "#8f8d8d",
        gray: "#000"
      },
      backgroundImage: {
        secondaryLinear: "linear-gradient(120deg, #06223F, #B6CCF5 150%)",
        primaryLinear: "linear-gradient(360deg, #D5E3F1, #B6CCF5)",
        primaryLinearNav: "linear-gradient(135deg , #D5E3F1 , #B6CCF5 60%)",
      },
      dropShadow: {
        primary: "-5px 35px 40px rgba(223, 229, 236, 0.9)",
      },
      screens: {
        'xs': '315px',
      },
    },
  },
  plugins: [],
};
