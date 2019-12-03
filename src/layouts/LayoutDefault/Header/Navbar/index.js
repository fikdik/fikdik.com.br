import React, { useEffect, useState } from 'react'

import Icon from 'src/components/Icon'

import {
  NavbarRoot,
  NavbarContainer,
  NavbarBrand,
  NavLink,
  NavBurger,
} from './styles'

export default function Navbar() {
  const [scrollPosition, setScrollPosition] = useState(true)
  const [menuOpen, setMenuOpen] = useState(true)

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  function handleScroll() {
    const position = document.body.getBoundingClientRect().top
    setScrollPosition(position)
  }

  return (
    <NavbarRoot onTop={scrollPosition > -48} menuOpen={menuOpen}>
      <NavbarContainer>
        <NavbarBrand>
          <img src="/_s/uploads/logo.svg" alt="Logo FIKDIK" />
        </NavbarBrand>
        <NavBurger onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? (
            <Icon name="window-close"></Icon>
          ) : (
            <Icon name="align-justify"></Icon>
          )}
        </NavBurger>
        <ul>
          <li>
            <NavLink to="/" onClick={() => setMenuOpen(false)}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/#home-objetivos" onClick={() => setMenuOpen(false)}>
              Objetivos
            </NavLink>
          </li>
          <li>
            <NavLink to="/#home-diferencial" onClick={() => setMenuOpen(false)}>
              Diferencial
            </NavLink>
          </li>
          <li>
            <NavLink to="/#home-planos" onClick={() => setMenuOpen(false)}>
              Planos
            </NavLink>
          </li>
          <li>
            <NavLink to="/contato" onClick={() => setMenuOpen(false)}>
              Contato
            </NavLink>
          </li>
        </ul>
      </NavbarContainer>
    </NavbarRoot>
  )
}
