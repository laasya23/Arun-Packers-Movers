/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        'navy': '#a4d4ff',
        'orange': '#FF6600',
        'charcoal': '#333333',
        'blue-25': '#f0f8ff',
        'blue-50': '#f0f4ff',
        'blue-75': '#e6f0ff',
      },
      fontFamily: {
        'oswald': ['Oswald', 'sans-serif'],
        'opensans': ['Open Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
};