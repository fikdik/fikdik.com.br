import React from 'react'
import PropTypes from 'prop-types'
import { Link as GatsbyLink } from 'gatsby'

const Link = React.forwardRef(function Link(props, ref) {
  return (
    <>
      {props.to ? (
        <GatsbyLink component={GatsbyLink} ref={ref} {...props} />
      ) : (
        <a ref={ref} target="_blank" {...props} />
      )}
    </>
  )
})

Link.propTypes = {
  to: PropTypes.String,
}

Link.defaultProps = {
  to: null,
}
export default Link
