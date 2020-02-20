// See https://tailwindcss.com/docs/configuration for details
const googleFonts = require("./content/theme/google_fonts.json")
const palette = require("./content/theme/palette.json")

module.exports = {
  corePlugins: {
    container: false,
  },
  theme: {
    fontFamily: {
      sans: [googleFonts.sans.family, "sans-serif"],
      serif: [googleFonts.serif.family, "serif"],
    },
    extend: {
      colors: {
        ...palette,
      },
    },
  },
  variants: {},
  plugins: [],
}
