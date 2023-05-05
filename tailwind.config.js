/** @type {import('tailwindcss').Config} */
module.exports = {
 content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  
  theme: {
    extend: {
      
      colors: {
        khan :
        {
          50: '#fdfce0',
          100: '#f5f3b9',
          200: '#071324',
          300: '#e7e265',
          400: '#e0da3b',
          500: '#c6c122',
          600: '#9a9618',
          700: '#6e6b0f',
          800: '#424005',
          900: '#171500',
        },
        navCol :
        {
          50: '#25383c',
          100: '#dad5df',
          200: '#2b3148',
          300: '#a69fad',
          400: '#8c8394',
          500: '#736a7b',
          600: '#595260',
          700: '#403b46',
          800: '#27222b',
          900: '#100a15',
        }
      }
    },
  },
  plugins: [],
}

