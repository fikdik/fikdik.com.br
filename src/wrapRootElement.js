import React from 'react'
import GlobalStyle from './styles/GlobalStyles'
import { ThemeProvider } from 'styled-components'
import theme from 'src/theme'
// import StoreProvider from './store'

export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    {element}
  </ThemeProvider>
)
