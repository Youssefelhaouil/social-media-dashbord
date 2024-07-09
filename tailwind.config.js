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
        white: 'hsl(0, 0%, 100%)',
        'lime-green': 'hsl(163, 72%, 41%)',
        'bright-red': 'hsl(356, 69%, 56%)',
        'facebook': 'hsl(208, 92%, 53%)',
        'twitter': 'hsl(203, 89%, 53%)',
        'instagram-start': 'hsl(37, 97%, 70%)',
        'instagram-end': 'hsl(329, 70%, 58%)',
        'youtube': 'hsl(348, 97%, 39%)',
        'toggle-dark-start': 'hsl(210, 78%, 56%)',
        'toggle-dark-end': 'hsl(146, 68%, 55%)',
        'toggle-light': 'hsl(230, 22%, 74%)',
        'very-dark-blue-bg-dark': 'hsl(230, 17%, 14%)',
        'very-dark-blue-top-bg-dark': 'hsl(232, 19%, 15%)',
        'dark-desaturated-blue-card-bg-dark': 'hsl(228, 28%, 20%)',
        'desaturated-blue-text-dark': 'hsl(228, 34%, 66%)',
        'very-pale-blue-top-bg-light': 'hsl(225, 100%, 98%)',
        'light-grayish-blue-card-bg-light': 'hsl(227, 47%, 96%)',
        'dark-grayish-blue-text-light': 'hsl(228, 12%, 44%)',
        'very-dark-blue-text-light': 'hsl(230, 17%, 14%)',
      },
      fontFamily: {
        sans: ['Inter'],
      },
      fontSize: {
        base: '14px',
      },
      fontWeight: {
        'normal': 500,
        'semibold': 600,
        'bold': 700,

      },
      screens: {
        'sm': { 'max': '320px' },    // Mobile screen size
        'md': { 'max': '768px' },    // Tablet screen size (if needed)
        'lg': { 'max': '1024px' },   // Desktop screen size
        'xl': { 'max': '1440px' },   // Large desktop screen size
      },
    },
  },
  plugins: [],
}
