/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'blue':'#1D818B',
      'lightblue':'#46AEB9',
      'yellow':"#F1EB98",
      'black':'#313231',
      'white':'#F9F8F8',
      'gray': '#878787'
    },
  },
  plugins: [require("daisyui")],
}

