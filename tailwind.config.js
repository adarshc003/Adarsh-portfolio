/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Instrument Serif', 'serif'],
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        bg: '#06080F',
        surface: '#0A0D18',
        card: '#0E1220',
        border: '#161D2F',
        accent: '#4F8EF7',
        accent2: '#A78BFA',
        muted: '#3D5070',
        text: '#F0F4FF',
        dim: '#7A8FAD',
        faint: '#2A3550',
      },
    },
  },
  plugins: [],
}
