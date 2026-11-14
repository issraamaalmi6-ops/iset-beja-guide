/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        iset: {
          navy: '#102A43',
          navyDark: '#0A1B2B',
          blue: '#1769AA',
          blueHover: '#125387',
          softBlue: '#EAF3FA',
          softBlueDark: '#1E293B',
          lightGrey: '#F4F7FA',
          darkBg: '#0F172A',
          darkCard: '#1E293B',
          darkBorder: '#334155',
          gold: '#D6A84B',
          goldHover: '#B88D37',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
