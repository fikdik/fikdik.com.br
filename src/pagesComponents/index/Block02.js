import React from 'react'
import styled from 'styled-components'

import { LayoutContainer } from 'src/layouts/LayoutDefault/styles'

const data = [
  {
    title: 'Suporte',
    imagem: '/_img/icon-help.png',
    description:
      'Nossa equipe está pronta para te atender, basta entrar em contato que atenderemos com agilidade.',
  },
  {
    title: 'SEO',
    imagem: '/_img/icon-rocket.png',
    description:
      'Todos os sites #fikdik são preparados e otimizados para melhor indexar seu conteúdo nos buscadores.',
  },
  {
    title: 'Segurança',
    imagem: '/_img/icon-safe.png',
    description:
      'Todos os sites possuem criptografia por padrão e nossos servidores são seguros e confiáveis.',
  },
  {
    title: 'Sob Medida',
    imagem: '/_img/icon-ruler.png',
    description:
      'Os serviços #fikdik podem ser construídos especificamente para seu negócio, peça um orçamento.',
  },
]

export default function Block01(props) {
  return (
    <ContainerWrapper {...props}>
      <Container>
        <header>
          <h2>Alcance seu objetivo</h2>
          <p>sites de alta performance e com todos os recursos necessários</p>
        </header>
        <ul>
          {data.map(item => (
            <Card key={item.title}>
              <img src={item.imagem} alt={item.title} />
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </Card>
          ))}
        </ul>
      </Container>
    </ContainerWrapper>
  )
}

const ContainerWrapper = styled.div`
  flex: 1;
  background-color: #aa191b;
  min-height: 100vh;

  display: flex;
`
const Container = styled(LayoutContainer)`
  padding-top: 8rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;

  header {
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

  ul {
    flex: 1;
    display: flex;
    flex-direction: row;
    margin: 4rem 0;
    li + li {
      margin-left: 1.618rem;
    }
  }
`

const Card = styled.li`
  background-color: rgba(255, 255, 255, 0.35);
  &:hover {
    background-color: rgba(255, 255, 255, 0.45);
  }
  border-radius: 5px;
  color: #fff;
  padding: 3rem 2rem;

  text-align: center;

  h3 {
    text-transform: uppercase;
    font-size: 1.618rem;
    margin: 1.618rem 0;
  }
  p {
    font-size: 1.23rem;
    margin-bottom: 1rem;
    text-align: left;
  }
`
