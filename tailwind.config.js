/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        'navy': '#a3c8ec',
        'orange': '#FF6600',
        'charcoal': '#333333',
        'blue-25': '#f8f9fa',
        'blue-50': '#f0f4ff',
        'blue-75': '#e6f0ff',
        'light-gray': '#f8f9fa',
        'warm-gray': '#fafbfc',
      },
      fontFamily: {
        'oswald': ['Oswald', 'sans-serif'],
        'opensans': ['Open Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
};