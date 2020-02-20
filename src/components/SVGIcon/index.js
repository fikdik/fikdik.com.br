import React from "react"

import PropTypes from "prop-types"

const reqSvgs = require.context("./assets", true, /\.svg$/)
const paths = reqSvgs.keys()

// gatsby-plugin-svg-sprite will use import (require.context) to create a sprite with svgs
// eslint-disable-next-line no-unused-vars
const svgs = paths.map(path => reqSvgs(path))

export default function Icon(props) {
  const { name } = props
  return (
    <svg {...props}>
      <use xlinkHref={`#${name}`} />
    </svg>
  )
}

Icon.propTypes = {
  name: PropTypes.string.isRequired,
}
