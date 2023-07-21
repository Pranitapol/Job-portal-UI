/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
     screens: {
      'xs':{
        'max':'360px'
      },
      'sm':{
        'min':'361px',
        'max':'576px'
      },
      'md':{
        'min':'577px',
        'max':'768px'
      },
      'lg':{
        'min':'769px',
        'max':'992px'
      },
      'xl':{
        'min':'993px',
        'max':'1200px'
      },
      '2xl':{
        'min':'1201px'
      }
    },
    extend: {
      colors:{
        primary:'#000080',
        secondary:'#E5E2F2',
        regular:'#260F80'
      }
    },
  },
  plugins: [],
}

