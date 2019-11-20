import React from 'react'

import SEO from 'src/components/SEO'
import Layout from 'src/layouts/LayoutDefault'
import Block01 from 'src/pagesComponents/index/Block01'
import Block02 from 'src/pagesComponents/index/Block02'
import Block03 from 'src/pagesComponents/index/Block03'
import Block04 from 'src/pagesComponents/index/Block04'

export default function pages() {
  return (
    <Layout>
      <SEO title="#fikdik : a internet fácil" titleOnly />
      <Block01 />
      <Block02 id="home-objetivos" />
      <Block03 id="home-diferencial" />
      <Block04 id="home-planos" />
    </Layout>
  )
}
