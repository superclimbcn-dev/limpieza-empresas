/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#ecfdf5',
          400: '#34d399',
          500: '#10b981',
          600: '#059669',
          700: '#047857',
          950: '#022c22',
        },
      },
      boxShadow: {
        soft: '0 20px 60px -25px rgba(5, 150, 105, 0.35)',
      },
    },
  },
  plugins: [],
};
