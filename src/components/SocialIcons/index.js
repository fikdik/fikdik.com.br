import React from "react"

import { networks } from "content/general/social.json"

import SmartLink from "~/components/SmartLink"
import SVGIcon from "~/components/SVGIcon"

import styles from "./index.module.css"

export default function SocialIcons() {
  return (
    <>
      {networks.map((network, index) => (
        <SmartLink
          to={network.link}
          eventLabel={network.name}
          key={`${network.name} - ${index}`}
        >
          <SVGIcon
            className={`${styles.social} ${
              styles[network.name]
            } w-10 h-10 p-1 rounded-lg mr-2`}
            name={network.name}
          />
        </SmartLink>
      ))}
    </>
  )
}
