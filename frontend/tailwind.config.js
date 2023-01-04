/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      screens: {
        'min': '480px',
      },
      fontFamily: {
        sans: '"DM Sans",sans-serif',
      },
      colors: {
        white: {
          900: '#fff'
        },
        black: {
          900: '#000000'
        },
        green: {
          300: '#CAEDE7',
          400: '#66CEBA',
          500: '#00AD8C',
        },
        blue: {
          200: '#CAD3FF',
          300: '#354974',
          400: '#6D85FD',
          500: '#3d5dfc',
          700: '#021B51',
          900: '#02143D'

        }
      },
    },
  },
  plugins: [],
}
