/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      colors : {
        primaryColor1 : '#17B28D',
        primaryColor2 : '#F48120'
      }
    },
  },
  plugins: [],
  content: ["./src/**/*.{js,jsx,ts,tsx,html}", "./public/index.html"],
};
