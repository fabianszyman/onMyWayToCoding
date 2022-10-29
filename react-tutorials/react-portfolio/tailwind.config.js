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
        gothamBlack: "gothamBlack"
      }
    },
  },
  plugins: [],
}

