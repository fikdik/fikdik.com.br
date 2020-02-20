import React from "react"

import { networks } from "content/general/social.json"

import SmartLink from "~/components/SmartLink"
import SVGIcon from "~/components/SVGIcon"

import styles from "./index.module.css"

import PropTypes from "prop-types"

function SocialIcons({ iconClass }) {
  return (
    <>
      {networks.map((network, index) => (
        <SmartLink to={network.link} key={`${network.name} - ${index}`}>
          <SVGIcon
            className={`${styles.social} ${styles[network.name]} ${iconClass}`}
            name={network.name}
          />
        </SmartLink>
      ))}
    </>
  )
}

SocialIcons.propTypes = {
  iconClass: PropTypes.string,
}

SocialIcons.defaultProps = {
  iconClass: "w-10 h-10 p-1 rounded-lg mr-2",
}

export default SocialIcons
