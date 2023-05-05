/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'dark-blue': '#2b3945',
        'very-dark-blue-bg': '#202c37',
        'very-dark-blue-text': '#111517',
        'dark-gray': '#858585',
        'light-gray': '#fafafa'
      }
    }
  },
  plugins: []
}
