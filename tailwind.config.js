/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        surface: {
          950: '#0B1020',
          900: '#111827',
          800: '#1F2937'
        },
        accent: {
          500: '#7C5CFC',
          400: '#9B87FF'
        }
      },
      boxShadow: {
        glow: '0 0 30px rgba(124, 92, 252, 0.4)'
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' }
        },
        pulseRing: {
          '0%': { transform: 'scale(0.9)', opacity: 0.8 },
          '100%': { transform: 'scale(1.2)', opacity: 0 }
        }
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        pulseRing: 'pulseRing 1.8s ease-out infinite'
      }
    }
  },
  plugins: []
};
