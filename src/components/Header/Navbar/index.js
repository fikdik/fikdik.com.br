import React, { useState, useEffect } from "react"

import menu from "content/settings/menu.json"
import siteMetadata from "content/settings/siteMetadata.json"

import SmartLink from "~/components/SmartLink"

import BurgerMenu from "./BurgerMenu"

export default function Navbar({ scrollPosition }) {
  const [navbarOpen, setNavbarOpen] = useState(false)

  function toggleNavbar(status) {
    setNavbarOpen(status)
  }

  function closeNavbar() {
    setNavbarOpen(false)
  }

  return (
    <div
      className={
        scrollPosition > -48
          ? "bg-white text-gray-800 md:bg-transparent md:text-white"
          : "bg-header-0 fixed z-20 w-full fixed top-0 shadow "
      }
    >
      <div className="container md:flex md:justify-between md:items-center">
        <div className="p-4 flex items-center justify-between">
          <BurgerMenu
            className="md:hidden"
            toggleNavbar={() => toggleNavbar(!navbarOpen)}
            navbarOpen={navbarOpen}
          />
          <div>
            <SmartLink>
              <img
                className="h-8 md:h-10 lg:h-12"
                src={siteMetadata.logo}
                alt={siteMetadata.title}
              />
            </SmartLink>
          </div>
          <div className=""></div>
        </div>
        <nav
          className={`${
            navbarOpen ? "block" : "hidden"
          } w-full text-center md:block`}
        >
          <ul
            className="uppercase font-bold flex flex-col justify-end flex-wrap md:flex-row"
            onClick={() => toggleNavbar(false)}
          >
            {menu.links.map(link => (
              <li
                className="border-transparent border-b-2 hover:border-brand-0"
                key={link.label}
              >
                <SmartLink
                  className="px-4 py-2 block hover:text-brand-0"
                  activeClassName="active"
                  to={link.url}
                >
                  {link.label}
                </SmartLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  )
}
