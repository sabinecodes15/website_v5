/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/components/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      minHeight: {
        '60pct': '60%'
      }
    },
    colors: {
      'teal': {
        100: '#213E44',
        200: '#102A33',
        300: '#0B1D23'
      },
      'light-blue': {
        100: '#B5D6DD',
        200: '#C2E5ED'
      },
      'white': '#ECF9F8',
    },
    fontFamily: {
      'mono':['Roboto Mono', 'ui-monospace'],
      'mont':['Montserrat', 'sans-serif'],
    }
  },
  plugins: [],
}

