/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      'serif': ['Maitree', ...defaultTheme.fontFamily.serif],
      'sans': ['Nunito', ...defaultTheme.fontFamily.sans]
    },
    extend: {
      borderRadius: {
        'ellipse': '50%'
      }
    },
  },
  plugins: [],
}