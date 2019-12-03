import React from 'react'
import styled from 'styled-components'

import { LayoutContainer } from 'src/layouts/LayoutDefault/styles'
import Link from 'src/components/Link'
import media from 'src/theme/mediaQueries'

const data = [
  {
    title: 'Web Classic',
    color: '#dd922c',
    highlight: 'popular',
    price: '165',
    frequency: 'Mensais',
    description: '',
  },
  {
    title: 'Web Commerce',
    color: '#a31216',
    highlight: '',
    price: '349.9',
    frequency: 'Mensais',
    description: '',
  },
  {
    title: 'Sob Medida',
    color: '#7D8DB4',
    highlight: '',
    price: 'Variado',
    frequency: 'Mensal ou anual',
    description: '',
  },
]

export default function Block01(props) {
  return (
    <ContainerWrapper {...props}>
      <Container>
        <header>
          <h2>Preços e Planos</h2>
          <p>
            Entre em contato para maiores detalhes. Faremos algo sob medida.
          </p>
        </header>
        <Cards>
          {data.map(item => (
            <Card key={item.title}>
              <header style={{ backgroundColor: item.color }}>
                <h3>{item.title}</h3>
                <p>Site institucional</p>
                {item.highlight && <span>{item.highlight}</span>}
              </header>
              <div>
                {Number(item.price).toString() === 'NaN' ? (
                  <p>
                    <big>{item.price}</big>
                  </p>
                ) : (
                  <p>
                    R$
                    <big>{item.price.split('.')[0]}</big>,
                    {
                      Number(item.price)
                        .toFixed(2)
                        .split('.')[1]
                    }
                  </p>
                )}
                <p>
                  <span>{item.frequency}</span>
                </p>
              </div>
              <main>
                <ul>
                  {[
                    'SEO',
                    'Certificado SSL',
                    'Layout Profissional',
                    'Construtor de páginas',
                    'Integração a redes sociais',
                  ].map(i => (
                    <li key={i}>{i}</li>
                  ))}
                </ul>
                <Link to="/contato">Solicite</Link>
              </main>
            </Card>
          ))}
        </Cards>
      </Container>
    </ContainerWrapper>
  )
}

const ContainerWrapper = styled.div`
  flex: 1;
  background-image: url('/_s/uploads/bg-montanhas.jpg');
  background-size: cover;
  min-height: 100vh;

  display: flex;
`
const Container = styled(LayoutContainer)`
  padding-top: 6rem;
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
const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  margin: 3rem 0;
  @media screen and (${media.phone}) {
    flex-direction: row;
    div {
      margin: 0 1rem;
    }
  }
`

const Card = styled.div`
  flex: 1;
  background-color: #fff;
  margin: 1rem 0;
  &:hover {
    background-color: rgba(255, 255, 255, 0.95);
  }
  border-radius: 5px;
  overflow: hidden;
  color: #000;

  > header,
  > div {
    padding: 2rem;
    text-align: center;
  }

  > header {
    background: orange;
    color: #fff;
    position: relative;

    h3 {
      font-size: 2rem;
      font-weight: bold;
      margin-bottom: 0.618rem;
    }
    p {
      margin-bottom: 1rem;
    }
    span {
      color: #222;
      background: #fff;
      text-align: center;
      width: 100%;
      display: block;
      padding: 0.5rem;
      position: absolute;
      top: 0;
      right: 0;
      transform: translateY(100%) translateX(40%) rotate(45deg);
      text-transform: uppercase;
    }
  }

  > div {
    font-weight: bold;
    p {
      display: flex;
      justify-content: center;
      align-items: flex-start;
    }
    big {
      font-size: 3rem;
      line-height: 85%;
    }
    span {
      margin-top: 0.25rem;
      font-weight: lighter;
    }
  }

  > main {
    padding: 0 2rem 2rem;
    color: #444;
    li {
      position: relative;
      margin-left: 1rem;
      font-size: 1.2rem;
      padding: 0.5rem 0 0.5rem 2rem;
    }
    li::before {
      content: '';
      position: absolute;
      top: 2;
      left: 0;
      width: 1.3rem;
      height: 1.3rem;
      background-color: #444;
      mask-image: url('/_s/img/check.svg');
    }
    li + li {
      border-top: 1px dotted #666;
    }

    a {
      color: #fff;
      background: #52b217;
      font-weight: bold;
      text-transform: uppercase;
      padding: 0.75rem 1rem;
      border-radius: 0.25rem;
      text-align: center;
      max-width: fit-content;
      margin: 2rem auto 0;
    }
  }
`
