import CMS from "netlify-cms-app"

const reqField = require.context("./templates", true, /\.js$/)
const paths = reqField.keys()

const previews = paths.map(path => {
  const module = reqField(path)
  return {
    name: path.slice(2, -3),
    template: module.default,
  }
})

export default function registerPreview() {
  previews.map(preview =>
    CMS.registerPreviewTemplate(preview.name, preview.template)
  )
}
