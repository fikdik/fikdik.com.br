import styled from 'styled-components'

export const BaseLayout = styled.div`
  min-width: 100%;
  max-width: 100%;
  min-height: 100vh;

  display: flex;
  flex-direction: column;

  main {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
`

export const LayoutContainer = styled.div`
  margin: 0 auto;
  width: 90%;
  max-width: 75rem;
`
