import React from "react"

import PropTypes from "prop-types"

import { Template } from "~/templates/pages/links"

function Preview({ entry }) {
  const data = entry.getIn(["data"]).toJS()

  if (data) {
    return <Template links={data.links} />
  } else {
    return <div>Loading ...</div>
  }
}

Preview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default Preview
