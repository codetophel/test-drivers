/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2e2e2e',
        secondary: '#2096D9',
        darkNav: '#2C2C2C',
        footerLink: '#f8f8f8',
        cardOverlay: 'rgba(256,256,256,0.4)',
        lightTextGray: '#9ca0ab',
        blue: '#129CE9',
        lBlue: '#2FB5D9',
        textBlue: '#275A7F',
        green: '#6FDB7A',
      },
      screens: {
        xs: '350px',
        sm: '480px',
        md: '768px',
        slg: '976px',
        lg: '1200px',
        xl: '1440px',
      },
      fontFamily: {
        krub: ['Krub', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
