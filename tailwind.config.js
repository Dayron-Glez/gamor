/* eslint-disable no-unused-vars */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  'darkMode': 'class',
  theme: {
    extend: {
      backgroundImage: theme => ({
        'light-theme': "url('./assets/fornite1.png')",
        'dark-theme': "url('./assets/fornite2.png')" // Asegúrate de cambiar esto por la ruta de tu imagen oscura
      })
    },
  },
  variants: {
    extend: {
      backgroundImage: ['dark']
    }
  },
  plugins: [],
}