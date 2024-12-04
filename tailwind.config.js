/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        'Brightorange': 'hsl(31, 77%, 52%)',
        'Darkcyan': 'hsl(184, 100%, 22%)',
        'Verydarkcyan': 'hsl(179, 100%, 13%)',
        'Transparentwhite': 'hsla(0, 0%, 100%, 0.75)',
        'Verylightgray': 'hsl(0, 0%, 95%)'
      },
      fontFamily:{
        'LexendDeca':['Lexend Deca'],
        'BigShouldersDisplay':['Big Shoulders Display']
      }
    },
  },
  plugins: [],
}

