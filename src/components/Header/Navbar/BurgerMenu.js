import React from "react"

import styles from "./BurgerMenu.module.css"

const BurgerMenu = ({ className, toggleNavbar, navbarOpen }) => {
  return (
    <div className={`${styles.burgerMenu} ${className}`} onClick={toggleNavbar}>
      <div className={navbarOpen ? styles.open : ""}>
        <span>&nbsp;</span>
        <span>&nbsp;</span>
        <span>&nbsp;</span>
      </div>
    </div>
  )
}

export default BurgerMenu
