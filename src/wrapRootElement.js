import React from 'react'
import GlobalStyle from './styles/GlobalStyles'
// import StoreProvider from './store'

export const wrapRootElement = ({ element }) => (
  <>
    {element}
    <GlobalStyle />
  </>
)
