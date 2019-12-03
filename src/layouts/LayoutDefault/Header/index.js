import React from 'react'
import styled from 'styled-components'

import Icon from 'src/components/Icon'

import Link from 'src/components/Link'
import { LayoutContainer } from 'src/layouts/LayoutDefault/styles'

import Navbar from './Navbar'
import media from 'src/theme/mediaQueries'

const data = [
  {
    name: 'facebook',
    link: 'https://fb.com/fikdik.com.br',
  },
  {
    name: 'twitter',
    link: 'https://twitter.com/fikdikcombr',
  },
]

export default function Header() {
  return (
    <HeaderWrapper>
      <TopBar>
        <TopBarContainer>
          <ul>
            <li>
              <Link to="/contato">
                <Icon name="envelope" />
                atendimento@gmail.com
              </Link>
            </li>
          </ul>
          <ul>
            {data.map(item => (
              <li key={item.name}>
                <Link href={item.link}>
                  <Icon name={item.name}></Icon>
                </Link>
              </li>
            ))}
          </ul>
        </TopBarContainer>
      </TopBar>
      <Navbar></Navbar>
    </HeaderWrapper>
  )
}

const HeaderWrapper = styled.header`
  position: absolute;
  width: 100%;
`

export const TopBar = styled.div`
  background-color: #222;
`

export const TopBarContainer = styled(LayoutContainer)`
  @media screen and (${media.phone}) {
    display: flex;
  }
  display: none;
  justify-content: space-between;

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  ul + ul {
    align-items: flex-end;

    display: flex;
    li {
      margin-left: 1rem;
    }
  }

  a {
    color: #fff;
    display: block;
    padding: 0.75rem 0;
    &:hover {
      color: #ddd;
    }
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  svg {
    width: 1rem;
    height: 1rem;
    margin-right: 5px;
  }
`
