import styled, { css } from 'styled-components'

import { LayoutContainer } from 'src/layouts/LayoutDefault/styles'
import Link from 'src/components/Link'

export const NavbarRoot = styled.nav`
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
    margin: 0;
    padding: 0;
    list-style: none;
  }

  a {
    &:hover {
      transform: translateY(-1px);
      border-bottom: 1px solid #dd922c;
    }
    ${props =>
      props.onTop
        ? css`
            color: #fff;
            &:hover {
              color: #eee;
            }
          `
        : css`
            color: #222;
            &:hover {
              color: #444;
            }
          `};
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
  margin: 10px 0;
  img {
    width: 144px;
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
