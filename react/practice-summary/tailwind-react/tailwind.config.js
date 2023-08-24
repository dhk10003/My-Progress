/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // or 'media' or 'false'
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#FF6363',
          100: '#F29B9B',
          200: '#E96969',
          300: '#E03C3C',
          400: '#D91F1F',
          500: '#D91F1F',
          600: '#B21717',
          700: '#8E0F0F',
          800: '#6B0808',
          900: '#470000',
        },
        secondary: {
          DEFAULT: '#38A169',
          100: '#A7F3D0',
          200: '#7DE0B3',
          300: '#54CE96',
          400: '#2ABD79',
          500: '#38A169',
          600: '#1F7F4F',
          700: '#0F5D3A',
          800: '#003B25',
          900: '#001910',
        },
      },
    },
  },
  plugins: [],
};