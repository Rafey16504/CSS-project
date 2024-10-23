/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    fontFamily:{
      'grotesk': ['"Familjen Grotesk"'],
      'ubuntu': ['"Ubuntu"'],
      'oswald': ['"Oswald"'],
      'inter': ['"Inter"'],
    },
    
    fontWeight: {
      thin: '100',
      hairline: '100',
      extralight: '200',
      light: '300',
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
      extrabold: '800',
      black: '900',
    },
    colors:{
      'light': '#FFFFF3',
      'blue': '#1fb6ff',
      'purple': '#7e5bef',
      'pink': '#ff49db',
      'orange': '#ff7849',
      'green': '#13ce66',
      'yellow': '#ffc82c',
      'gray-dark': '#273444',
      'gray': '#8492a6',
      'gray-light': '#d3dce6',
      'green-dark': '#2F590F',
      'green-verydark' : "#06170E",
      'white':'#FFFFFF',
      'black':'#0a0a0a',
    },
    extend: {
      spacing: {
      '128': '32rem',
      '144': '36rem',
    },
    borderRadius: {
      '4xl': '2rem',
    }},
  },
  plugins: [],
}

