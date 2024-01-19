/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './**/*.{html,js, css}',
    './*/*.{html,js, css}'
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio')
  ],
}

