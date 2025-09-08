/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        'navy': '#b3d2ef',
        'orange': '#FF6600',
        'charcoal': '#333333',
        'blue-25': '#d2e5f6',
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