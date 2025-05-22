 /** @type {import('tailwindcss').Config} */
export default {
   content: ["./src/**/*.{html,js}"],
   theme: {
     extend: {
       fontFamily: {
      inter: ['Inter', 'sans-serif'],
      cabin: ['Cabin', 'sans-serif'],
      poppins: ['Poppins', 'sans-serif'],
      jakarta: ['"Plus Jakarta Sans"', 'sans-serif'],
    },
     },
   },
   plugins: [],
 }