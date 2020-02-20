import React from "react"

import SmartLink from "~/components/SmartLink"

import styles from "./index.module.css"

export default function Signature(props) {
  const thisYear = new Date().getFullYear()
  return (
    <div className={styles.signature} {...props}>
      © Copyright 2013 - {thisYear} <br className="sm:hidden" />
      desenvolvido por
      <SmartLink to="https://fikdik.com.br">
        <small>#</small>
        fikdik
      </SmartLink>
    </div>
  )
}
