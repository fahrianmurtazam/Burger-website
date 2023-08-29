/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  darkMode: 'class',
  theme: {
    extend: {
    colors:{ 
  // colors light mode
      dark:'#000',
      secondary:'#FFCC00',
      firstColor: 'hsl(19, 64%, 52%)',
      bodyColor: 'hsl(19, 100%, 96%)',
      containerColor:'hsl(19, 100%, 97%)',
      textColor:'hsl(19, 16%, 35%)',
      textColorLight:'hsl(19, 8%, 55%)',
      titleColor:'hsl(19, 16%, 15%)',
  // color dark mode
      firstDark: 'hsl(19, 64%, 58%)',
      bodyDark: 'hsl(19, 12%, 8%)',
      containerDark:'hsl(19, 10%, 10%)',
      textDark:'hsl(19, 16%, 65%)',
      titleDark:'hsl(19, 24%, 85%)',

      },
      keyframes:{
        move:{
          '50%':{transform: 'translateY(-1rem)'}
        }
      },
      animation:{
        'translateY':'move 2s linear infinite'
      }
    },
    container: {
      center: true,
      padding:{
        default:'1 rem',
        sm:'1.5 rem'
      }
    }
  },
  plugins: [],
}