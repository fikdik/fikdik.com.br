import React from 'react'
import PropTypes from 'prop-types'

function Preview({ entry, widgetFor }) {
  const data = entry.getIn(['data', 'title'])
  return (
    <section>
      <h1>Hello World</h1>
      <h2>{data || 'nothing'}</h2>
    </section>
  )
}

Preview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default Preview
