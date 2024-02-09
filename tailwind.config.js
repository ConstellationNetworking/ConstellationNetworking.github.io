/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './**/*.{html,js, css}',
    './*/*.{html,js, css}'
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          100: '#f7fafc',
        },
        red: {
          100: '#fff5f5',
        },
        orange: {
          100: '#fffaf0',
        },
        yellow: {
          100: '#fffff0',
        },
        green: {
          100: '#f0fff4',
        },
        teal: {
          100: '#e6fffa',
        },
        blue: {
          100: '#ebf8ff',
        },
        indigo: {
          100: '#ebf4ff',
        },
        purple: {
          100: '#faf5ff',
        },
        pink: {
          100: '#fff5f7',
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio')
  ],
}

