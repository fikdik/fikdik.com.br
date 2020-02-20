const reqConfig = require.context("./modules/", true, /config.js$/)
const reqPreview = require.context("./modules/", true, /preview.js$/)

export const collections = reqConfig.keys().map(path => reqConfig(path).default)

export function registerPreviews() {
  reqPreview.keys().map(path => reqPreview(path).default())
}
