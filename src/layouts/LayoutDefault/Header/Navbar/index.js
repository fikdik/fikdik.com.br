import React, { useEffect, useState } from 'react'

import { NavbarRoot, NavbarContainer, NavbarBrand, NavLink } from './styles'

export default function Navbar() {
  const [scrollPosition, setScrollPosition] = useState(true)

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  function handleScroll() {
    const position = document.body.getBoundingClientRect().top
    setScrollPosition(position)
  }

  return (
    <NavbarRoot onTop={scrollPosition > -48}>
      <NavbarContainer>
        <NavbarBrand>
          <img src="/_s/uploads/logo.svg" alt="Logo FIKDIK" />
        </NavbarBrand>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/#home-objetivos">Objetivos</NavLink>
            <NavLink to="/#home-diferencial">Diferencial</NavLink>
            <NavLink to="/#home-planos">Planos</NavLink>
            <NavLink to="/contato">Contato</NavLink>
          </li>
        </ul>
      </NavbarContainer>
    </NavbarRoot>
  )
}
