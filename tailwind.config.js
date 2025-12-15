module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/layouts/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2856a3', // Blue from logo
        accent: '#ff914d'   // Orange from logo
      },
      fontFamily: {
        sans: ['Montserrat', 'Open Sans', 'sans-serif']
      }
    },
  },
  plugins: [],
};