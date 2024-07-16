/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
      extend: {
          animation: {
            navSlideIn: 'navSlideIn 0.5s ease-in-out',
            navSlideOut: 'navSlideOut 0.5s ease-in-out'
          },
          keyframes: {
              navSlideIn: {
                '0%': {
                    opacity: '0',
                    transform: 'translateX(100px)'
                },
                '100%': {
                    opacity: '1',
                    transform: 'translateX(0px)'
                }
            },
            navSlideOut: {
                '0%': {
                    opacity: '1',
                    transform: 'translateX(0px)'
                },
                '100%': {
                    opacity: '0',
                    transform: 'translateX(100%)'
                }
            }
        }
    },
  },
  plugins: [],
}