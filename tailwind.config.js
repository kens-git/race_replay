/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/index.html', './src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {},
    colors: {
      accent: {
        DEFAULT: '#E63946',
        light: '#F9939B',
      },
      document: {
        DEFAULT: '#F1F4F6',
        dark: '#15212B',
      },
      gray: {
        300: '#D1D9E1',
        500: '#8596A7',
      },
      section: {
        DEFAULT: '#FFFFFF',
        dark: '#132535',
      },
      teal: {
        100: '#F1FAEE',
        200: '#D6E7F1',
        // 300
        // 400
        500: '#A8DADC',
        600: '#44A9D9',
        700: '#457B9D',
        // 800: '#',
        900: '#1D3557',
        1000: '#15212B',
      },
      txt: {
        DEFAULT: '#000000',
        dark: '#FFFFFF',
        teal: '#96D8D8', // TODO: move
      },
      viewport: {
        DEFAULT: '#FFFFFF',
        dark: '#132535',
      },
    },
  },
  plugins: [],
};
