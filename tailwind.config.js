/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './uputstvo/**/*.{html,js}',
    './src/**/*.{html,js}',
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '1024px',
      xl: '1280px'
    },
    extend: {
      colors: {
        primary: 'hsl(19, 20%, 19%)',
        primaryHover: 'hsl(21, 100%, 50%)',
        primaryLight: 'hsl(20, 43%, 62%)',
        primaryBright: 'hsl(20, 100%, 60%)'
      }
    },
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ],
}