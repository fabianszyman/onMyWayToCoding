/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        gothamBold: "gothamBold",
        gothamLight: "gothamLight",
        gothamBlack: "gothamBlack",
      },
      colors: {
        transparent: "transparent",
        current: "currentColor",
        white: "#ffffff",
        purple: "#3f3cbb",
        midnight: "#121063",
        metal: "#565584",
        tahiti: "#3ab7bf",
        silver: "#ecebff",
        "bubble-gum": "#ff77e9",
        bermuda: "#78dcca",
        darkgray: "#0D1013",
      },
      spacing: {
        95: "26rem",
        100: "28rem",
        128: "32rem",
      },
    },
  },
  plugins: [],
};
