/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        teal: {
          primary: '#0891B2',
          light: '#CFFAFE',
          dark: '#0E7490',
        },
        cream: '#FFF8F0',
        dental: {
          blue: '#0891B2',
          dark: '#0E7490',
          cream: '#FFF8F0',
          text: '#1E293B',
        }
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['DM Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
