import React from "react"

import siteMetadata from "content/settings/siteMetadata.json"

import Signature from "~/components/Footer/Signature"
import SmartLink from "~/components/SmartLink"

export default function CleanLayout({ children }) {
  return (
    <div className="bg-black text-white flex flex-col min-h-screen">
      <header className="flex justify-center items-center w-full py-8">
        <SmartLink to="/">
          <img className="h-16" src={siteMetadata.logoAlt} alt="the brand" />
        </SmartLink>
      </header>
      <section id="main" className="flex-auto flex">
        {children}
      </section>
      <footer>
        <Signature />
      </footer>
    </div>
  )
}
