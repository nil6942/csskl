/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        warhammer: {
          dark: '#0a0a0a',
          gold: '#d4af37',
          blood: '#8b0000',
          metal: '#2c3e50',
          bronze: '#cd7f32',
          imperial: '#1a1a2e',
        }
      },
      fontFamily: {
        gothic: ['"Cinzel"', 'serif'],
        body: ['"Rajdhani"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
