/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          dark: 'rgb(5,25,38)'
        }
      }
    },
  },
  plugins: [],
};
