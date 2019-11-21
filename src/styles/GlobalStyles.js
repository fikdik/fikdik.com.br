import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset-advanced'

const GlobalStyle = createGlobalStyle`
  ${reset}

  @import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');

  html {
    scroll-behavior: smooth;
  }

  body, input, button {
    font-family: 'Roboto', Arial, Helvetica, sans-serif;
    font-weight: 500;
  }

  body, svg {
    fill: currentColor;
  }

  button {
    cursor: pointer;
  }

  button:disabled {
    opacity: 0.5;
    cursor: inherit;
  }

  @media only screen and (max-width: 768px) {
    html {
      font-size: 85%;
    }
  }

  @media only screen and (max-width: 426px) {
    html {
      font-size: 50%;
    }
  }
`

export default GlobalStyle
