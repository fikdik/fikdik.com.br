import React from 'react'
import Link from 'src/components/Link'

import { FooterWrapper, FooterContainer, FooterSignature } from './styles'

export default function Footer() {
  const lastYear = new Date().getFullYear()
  return (
    <footer>
      <FooterWrapper>
        <FooterContainer>
          <div></div>
          <div></div>
          <div></div>
        </FooterContainer>
      </FooterWrapper>
      <FooterSignature>
        © Copyright 2013 - {lastYear} desenvolvido por
        {/* <Link href="https://fikdik.com.br"> */}
        <Link to="/">
          <strong>
            <small> #</small>
            <span>fikdik</span>
          </strong>
        </Link>
      </FooterSignature>
    </footer>
  )
}
