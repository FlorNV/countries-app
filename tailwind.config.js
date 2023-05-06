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
      },
      boxShadow: {
        '3xl': '0 0 6px -1px rgb(0 0 0 / 0.1), 0 0 4px -2px rgb(0 0 0 / 0.1)',
        '4xl': '0 0 6px -1px rgb(0 0 0 / 0.6), 0 0 4px -2px rgb(0 0 0 / 0.6)'
      }
    }
  },
  plugins: []
}
