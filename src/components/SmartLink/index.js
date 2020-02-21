import React from "react"

import { Link } from "gatsby"
import { OutboundLink } from "gatsby-plugin-google-analytics"
import PropTypes from "prop-types"

const SmartLink = React.forwardRef(
  (
    {
      to,
      className,
      activeClassName,
      eventAction,
      eventCategory,
      eventLabel,
      children,
    },
    ref
  ) => {
    return (
      <>
        {to.startsWith("#") ? (
          <a className={className} ref={ref} href={to}>
            {children}
          </a>
        ) : to.startsWith("/") && !to.startsWith("//") ? (
          <Link
            className={className}
            activeClassName={activeClassName || "active"}
            component={Link}
            ref={ref}
            to={to}
          >
            {children}
          </Link>
        ) : (
          <OutboundLink
            className={className}
            ref={ref}
            href={to}
            target="_blank"
            eventAction={eventAction}
            eventCategory={eventCategory}
            eventLabel={eventLabel}
          >
            {children}
          </OutboundLink>
        )}
      </>
    )
  }
)

SmartLink.propTypes = {
  to: PropTypes.string,
  className: PropTypes.string,
  activeClassName: PropTypes.string,
  eventAction: PropTypes.string,
  eventCategory: PropTypes.string,
  eventLabel: PropTypes.string,
}

SmartLink.defaultProps = {
  to: "/",
  className: "",
  activeClassName: "",
  eventAction: "Click",
  eventCategory: "Outbound Link",
  eventLabel: null,
}
export default SmartLink
