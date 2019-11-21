import React from 'react'
import styled from 'styled-components'

import { LayoutContainer } from 'src/layouts/LayoutDefault/styles'
import Link from 'src/components/Link'

export default function Block01(props) {
  return (
    <ContainerWrapper {...props}>
      <Container>
        <Card>
          <h1>Marketing Digital</h1>
          <p>Comece com o pé direito!</p>
          <p>
            Seu website ou e-commerce com agilidade e responsabilidade para não
            perder nenhuma venda.
          </p>
          <ActionButton to="/#home-objetivos">Saiba mais</ActionButton>
        </Card>
      </Container>
    </ContainerWrapper>
  )
}

const ContainerWrapper = styled.div`
  flex: 1;
  background-image: url('/_s/uploads/bg-aviao.jpg');
  background-size: cover;
  min-height: 100vh;

  display: flex;
`
const Container = styled(LayoutContainer)`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`

const Card = styled.div`
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 5px;
  color: #fff;
  padding: 30px;
  line-height: 1.618rem;

  /* width: 50%; */
  @media only screen and (min-width: 600px) {
    width: 50%;
  }
  margin: 80px 0;
  a,
  p {
    font-size: 1.23rem;
  }
  h1 {
    font-size: 2.5rem;
    font-weight: bold;
    margin-bottom: 1.618rem;
    line-height: 3rem;
  }
`

const ActionButton = styled(Link)`
  color: #fff;
  font-weight: bold;
  display: inline-block;
  background-color: #dd922c;
  padding: 8px 10px;
  margin: 10px 0;
  border-radius: 4px;

  transition: box-shadow ease 100ms;
  box-shadow: 1px 2px 3px #333;
  &:hover {
    box-shadow: 2px 3px 4px #444;
  }
  &:active {
    box-shadow: 0px 0px 1px #222;
    transform: translateY(1px);
  }
`
