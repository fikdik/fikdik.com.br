import React from 'react'

// import SEO from 'src/components/SEO'
import Header from './Header'
import Footer from './Footer'

import { BaseLayout } from './styles'

export default function Layout({ children }) {
  return (
    <BaseLayout>
      <Header />
      <main>{children}</main>
      <Footer />
    </BaseLayout>
  )
}
