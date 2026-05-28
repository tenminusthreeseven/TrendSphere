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
        'midnight-black': '#0A0A0A',
        'soft-cream': '#F5E8D3',
        'editorial-white': '#FAFAFA',
        'lavender-accent': '#C8B6FF',
        'deep-violet': '#5B3DF5',
        'soft-pink': '#E8C7FF',
        'mouse-gray': '#888888',
        'glass-border': 'rgba(255, 255, 255, 0.1)',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Cormorant Garamond', 'serif'],
        condensed: ['Bebas Neue', 'Anton', 'Oswald', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
}
