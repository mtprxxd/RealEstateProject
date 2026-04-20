/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Jost"', 'sans-serif'],
        display: ['"Playfair Display"', 'serif'],
      },
      colors: {
        gold: {
          50: '#fdf8ee',
          100: '#f9edcc',
          200: '#f3d98a',
          300: '#ecc048',
          400: '#e6aa28',
          500: '#c8901a',
          600: '#a06c10',
          700: '#7c500f',
          800: '#5e3d11',
          900: '#4a3012',
        },
        charcoal: {
          50: '#f5f5f4',
          100: '#e8e6e3',
          200: '#d2cec8',
          300: '#b3aca3',
          400: '#8d8378',
          500: '#6e6459',
          600: '#574f46',
          700: '#3f3830',
          800: '#2a2520',
          900: '#1a1613',
        },
        cream: '#f9f5ef',
        ivory: '#fdfaf5',
      },
    },
  },
  plugins: [],
}
