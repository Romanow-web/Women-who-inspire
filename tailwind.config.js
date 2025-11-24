/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
        serif: ['Montserrat', 'sans-serif'],
      },
      colors: {
        primary: '#6D28D9', // Purple-700
        secondary: '#4C1D95', // Purple-900
        accent: '#F59E0B', // Amber-500
        light: '#F3E8FF', // Purple-100
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'scroll': 'scroll 30s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        }
      }
    },
  },
  plugins: [],
}