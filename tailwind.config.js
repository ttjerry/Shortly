/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customGreen: '#2CD1D1',
        customGrey: '#9B9B9D',
        backWhite: '#FFFEFE',
        backSection2: '#F0F1F6',
        urlSection: '#3A3053',
        lineGreen: '#2ACED0'
      },
    },
  },
  plugins: [],
}

