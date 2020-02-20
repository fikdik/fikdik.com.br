import React from "react"

import Footer from "~/components/Footer"
import Header from "~/components/Header"

import BackgroundImage from "gatsby-background-image"

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <section id="main" className="flex-grow">
        {children}
      </section>
      <Footer />
    </div>
  )
}
