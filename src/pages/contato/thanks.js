import React from 'react'

import styled from 'styled-components'
import SEO from 'src/components/SEO'
import Layout from 'src/layouts/LayoutDefault'

import { LayoutContainer } from 'src/layouts/LayoutDefault/styles'

export default function ContatoThanks() {
  return (
    <Layout>
      <SEO title="Thanks" />
      <ContainerWrapper>
        <Container>
          <header>
            <h2>Obrigado</h2>
            <p>Recebemos sua mensagem e responderemos o mais breve possível</p>
          </header>
        </Container>
      </ContainerWrapper>
    </Layout>
  )
}

const ContainerWrapper = styled.div`
  flex: 1;
  background-image: url('/_s/uploads/bg-montanhas.jpg');
  background-size: cover;
  min-height: fit-content;

  display: flex;
`
const Container = styled(LayoutContainer)`
  padding-top: 12rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  > header {
    color: #fff;
    text-align: center;

    h2 {
      font-size: 2.5rem;
      font-weight: bold;
      margin-bottom: 1.618rem;
    }

    p {
      font-size: 1.618rem;
    }
  }
`
