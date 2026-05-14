/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0D2340',
          50: '#E6EBF1', 100: '#C0CCDA', 200: '#869CB5',
          300: '#4D6B87', 400: '#2D4768', 500: '#0D2340',
          600: '#0A1B33', 700: '#081426', 800: '#050D19', 900: '#03070D',
        },
        slate: { DEFAULT: '#4D6B87' },
        sage: { DEFAULT: '#7DA18A', light: '#A8C2B2', dark: '#5E806C' },
        gold: { DEFAULT: '#C8A15A', light: '#D9BC85', dark: '#A8843F' },
        warmgray: { DEFAULT: '#F2F3F4', dark: '#D9DBDE' },
        cream: '#FBF9F5',
      },
      fontFamily: {
        display: ['"Cinzel"', 'Georgia', 'serif'],
        sans: ['"Montserrat"', 'system-ui', 'sans-serif'],
      },
      letterSpacing: { 'extra-wide': '0.18em' },
      maxWidth: { 'container': '1200px', 'prose-narrow': '65ch' },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(13, 35, 64, 0.08)',
        'card': '0 8px 30px -8px rgba(13, 35, 64, 0.12)',
      },
      animation: {
        'fade-up': 'fadeUp 0.7s ease-out forwards',
        'fade-in': 'fadeIn 0.9s ease-out forwards',
      },
      keyframes: {
        fadeUp: { '0%': { opacity: '0', transform: 'translateY(20px)' }, '100%': { opacity: '1', transform: 'translateY(0)' } },
        fadeIn: { '0%': { opacity: '0' }, '100%': { opacity: '1' } },
      },
    },
  },
  plugins: [],
};
