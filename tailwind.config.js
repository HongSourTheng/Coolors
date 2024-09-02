/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        red: {
          1: "red",
        },
        white: {
          1: "white",
        },
        orange: {
          thin: "#ff6b6b",
        },
      },
      letterSpacing: {
        0.2: "0.2rem",
      },
      fontFamily: {
        fontKH_ENG: ["Konkhmer Sleokchher", "Roboto"],
      },
      backgroundImage: {
        url: `url("https://cdn.pixabay.com/photo/2023/04/13/17/08/forest-7922999_1280.jpg")`,
      },
    },
  },
  plugins: [require("tailwindcss-textshadow")],
};
