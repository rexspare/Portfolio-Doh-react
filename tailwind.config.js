/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors:{
        'off-white': '#EBE5DF',
        'dark-bg' : '#7E7E7E'
      },
    },
    fontSize:{
      xxl: '12rem',
      xxs: '0.75rem',
      lxl: '7rem',
      xlx: '6.0rem',
      sevenxl: '3rem',
      med: '4rem'
    },
    lineHeight: {
      'small': '1.15'
    },
    fontFamily: {
      prata: ["Prata", "serif"],
      open_sans: ["Open Sans", "sans-serif"],
      rajhdhani: ["Rajdhani", "sans-serif"],
      nanum: ["Nanum Myeongjo", "sans-serif"],
    },
  },
  plugins: [],
}
