import styled, { css } from 'styled-components'

import { LayoutContainer } from 'src/layouts/LayoutDefault/styles'
import Link from 'src/components/Link'
import media from 'src/theme/mediaQueries'

export const NavbarRoot = styled.nav`
  z-index: 9;
  ${props =>
    props.onTop
      ? css`
          position: relative;
        `
      : css`
          position: fixed;
          top: 0;
          background: rgba(255, 255, 255, 0.9);
          box-shadow: 0px 0px 2px #555;
        `};
  width: 100%;

  ul {
    display: none;
    margin: 0;
    padding: 0;
    list-style: none;
  }

  li a {
    display: block;
    color: inherit;
    &:hover {
      transform: translateY(-1px);
      border-bottom: 1px solid #dd922c;
    }
  }
  ${props =>
    props.onTop && !props.menuOpen
      ? css`
          color: #fff;
          a:hover {
            color: #eee;
          }
        `
      : css`
          color: #222;
          a:hover {
            color: #444;
          }
        `};

  ${props =>
    props.menuOpen &&
    css`
      background: rgba(255, 255, 255, 0.9);
      ${NavbarContainer} {
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
      ul {
        display: block;
        a {
          text-align: center;
          color: #111;
          padding: 1.5rem;
          font-size: 2rem;
        }
      }
    `};

  @media screen and (${media.phone}) {
    ul {
      display: flex;
    }
    a {
      flex: 1;
    }
  }
`
export const NavbarContainer = styled(LayoutContainer)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const NavbarBrand = styled(Link).attrs({
  to: '/',
})`
  margin: 10px auto;
  img {
    width: 100px;
  }
  @media screen and (${media.phone}) {
    margin: 10px auto;
    img {
      width: 144px;
    }
  }
`
export const NavLink = styled(Link).attrs({
  activeClassName: 'active',
})`
  font-weight: bold;
  text-transform: uppercase;
  padding: 10px;
  color: #000;
`

export const NavBurger = styled.button.attrs({ content: 'X' })`
  position: absolute;
  right: 0;
  top: 0;
  width: 48px;
  height: 48px;

  svg {
    height: 26px;
    width: 26px;
  }

  @media screen and (${media.phone}) {
    display: none;
  }
`
