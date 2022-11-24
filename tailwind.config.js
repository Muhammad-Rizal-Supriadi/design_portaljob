/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FF0000',
        'primary-dark': '#AF0404',
        'primary-light': '#FF9090',
        'background': '#FFFEF7',
      },
    },
  },
  plugins: [],
}