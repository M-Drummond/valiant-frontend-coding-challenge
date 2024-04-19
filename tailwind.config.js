/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{vue,js}',
  ],
  theme: {
    fontFamily: {
      // sans: 'Inter',
    },
    extend: {
      boxShadow: {
        frame: '5px 4px 0 0',
        input: '2px 2px 0 0 #000',
      },
    },
  },
  plugins: [],
}
