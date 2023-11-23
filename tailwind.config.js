/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
    colors: {
      'beige': '#FFF7F0',
      'purple': '#755CDE',
      'orange':'#F6A560',
      'pink':'#F39E9E',
      'red':'#EB7565',
      'blue':'#61C4B7',
      'darkpurple':'#552049',
      'black':'#030303',
      'gray':'#7A746E',
      'white':'#FFF7F0'
    },
    fontFamily: {
      'jakarta': ['Plus Jakarta Sans', 'sans-serif'],
    },
    fontSize: {
      'xsmall' : '18px',
      'small':'32px',
      'medium':'40px',
      'large':'56px',
    },
    fontWeight: {
      'medium': 500,
      'bold': 700,
    },
  },},
  plugins: [],
}


