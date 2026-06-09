/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        night: '#0F172A',
        ink: '#E2E8F0',
        muted: '#94A3B8',
        cyanGlow: '#22D3EE',
        violetGlow: '#A78BFA',
        mintGlow: '#34D399',
        roseGlow: '#FB7185',
      },
      boxShadow: {
        glass: '0 24px 80px rgba(2, 6, 23, 0.45)',
        neon: '0 0 36px rgba(34, 211, 238, 0.22)',
      },
      backdropBlur: {
        xs: '2px',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'Segoe UI', 'sans-serif'],
      },
      backgroundImage: {
        aurora: 'radial-gradient(circle at 15% 20%, rgba(34,211,238,.18), transparent 35%), radial-gradient(circle at 82% 5%, rgba(167,139,250,.18), transparent 35%), radial-gradient(circle at 50% 92%, rgba(52,211,153,.12), transparent 40%)',
      },
    },
  },
  plugins: [],
};
