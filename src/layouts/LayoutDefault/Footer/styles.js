import styled from 'styled-components'

import { LayoutContainer } from 'src/layouts/LayoutDefault/styles'

export const FooterWrapper = styled.div`
  background-color: #222;
`
export const FooterContainer = styled(LayoutContainer)``

export const FooterSignature = styled.div`
  background-color: #000;
  color: #ddd;
  text-align: center;
  padding: 0.75rem;

  small {
    color: #a31216;
  }
  span {
    color: #dd922c;
  }
`
