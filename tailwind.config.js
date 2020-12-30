module.exports = {
  purge: ['./pages/**/*.js', './posts/**/*.js', './components/**/*.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {}
  },
  variants: {
    extend: {}
  },
  plugins: [require('@tailwindcss/typography')]
}
