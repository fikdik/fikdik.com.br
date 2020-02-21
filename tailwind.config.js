// See https://tailwindcss.com/docs/configuration for details
const googleFonts = require("./content/theme/google_fonts.json")
const palette = require("./content/theme/palette.json")

module.exports = {
  theme: {
    container: {
      center: true,
    },
    fontFamily: {
      sans: [googleFonts.sans.family, "sans-serif"],
      serif: [googleFonts.serif.family, "serif"],
    },
    extend: {
      screens: {
        ultra: "1921px",
      },
      colors: {
        ...palette,
      },
    },
  },
  variants: {},
  plugins: [],
}
