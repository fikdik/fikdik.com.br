import React, { useState, useEffect } from "react"

import Navbar from "./Navbar"
import SocialIcons from "../SocialIcons"

import SVGIcon from "~/components/SVGIcon"
import SmartLink from "../SmartLink"
import info from "content/general/info.json"

export default function Header() {
  const [scrollPosition, setScrollPosition] = useState(true)

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  function handleScroll() {
    const position = document.body.getBoundingClientRect().top
    setScrollPosition(position)
  }

  return (
    <section id="page-header" className="w-full fixed z-20">
      <div
        className={`bg-brand-0 text-white hidden md:block ${
          scrollPosition > -48 ? "" : "md:hidden"
        }`}
      >
        <div className="container">
          <div className="px-4 py-1 flex justify-between items-center">
            <div>
              <SmartLink
                to="/contato"
                className="flex justify-start items-center"
              >
                <SVGIcon name="envelope" className="h-6 w-6 mr-4" />{" "}
                {info.email.address}
              </SmartLink>
            </div>
            <div>
              <SocialIcons iconClass="w-8 h-8 p-1 rounded-lg mr-2" />
            </div>
          </div>
        </div>
      </div>
      <Navbar scrollPosition={scrollPosition} />
    </section>
  )
}
