const { fmImagesToRelative } = require('gatsby-remark-relative-images')

exports.onCreateNode = ({ node }) => {
  fmImagesToRelative(node) // convert image paths for gatsby images
}

if (process.env.NODE_ENV === 'development') {
  exports.onCreateDevServer = ({ app }) => {
    const fsMiddlewareAPI = require('netlify-cms-backend-fs/dist/fs')
    fsMiddlewareAPI(app)
  }
}
