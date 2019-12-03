import React from 'react'
import styled from 'styled-components'
import { LayoutContainer } from 'src/layouts/LayoutDefault/styles'
import Icon from 'src/components/Icon'
import media from 'src/theme/mediaQueries'

const data = [
  {
    title: 'Auto Serviço',
    icon: 'hand-spock',
    description:
      'A nossa equipe de especialistas irá escolher a plataforma que trará agilidade e qualidade nos recursos do seu site. Nosso suporte estará atento a te ajudar e orientar sobre os recursos digitais da sua empresa.',
  },
  {
    title: 'Alta Performance',
    icon: 'rocket',
    description:
      'Os sites #fikdik são revisados e otimizados para obter a melhor performance possível. As imagens, vídeos e páginas são otimizadas para ter acesso de qualidade mesmo quando acessado por uma conexão lenta.',
  },
  {
    title: 'SATISFAÇÃO DO CONSUMIDOR',
    icon: 'users',
    description:
      'A combinação entre a ferramentas de alto padrão e bom atendimento só poderia resultar na satisfação completa de nossos clientes.',
  },
  {
    title: 'SEMPRE SEGURO',
    icon: 'life-ring',
    description:
      'Todos os sites #fikdik contam com certificado SSL. Além disso contamos com uma rede bem estruturada para hospedagem do seu site ficar protegido.',
  },
  {
    title: 'ALAVANCAGEM',
    icon: 'cubes',
    description:
      'Estamos prontos para seu crescimento. Inicie com 10 visitas e cresça para mais de 1 milhão, nós estaremos com você para crescer e orientar a cada passo para o seu sucesso online.',
  },
  {
    title: 'PLANOS FLEXÍVEIS',
    icon: 'calculator',
    description:
      'Pague apenas o que precisa. Nos planos #fikdik você não gastará além do necessário. Com as ferramentas certas voce sempre terá um ótimo custo/retorno no desenvolvimento do marketing digital do seu negócio.',
  },
]

export default function Block01(props) {
  return (
    <ContainerWrapper {...props}>
      <Container>
        <header>
          <h2>Sites de Alto Padrão</h2>
          <p>Por que contratar um serviço com a #fikdik?</p>
        </header>
        <Cards>
          {data.map(item => (
            <Card key={item.title}>
              <CardIcon>
                <Icon name={item.icon} />
              </CardIcon>
              <CardText>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </CardText>
            </Card>
          ))}
        </Cards>
      </Container>
    </ContainerWrapper>
  )
}

const ContainerWrapper = styled.div`
  flex: 1;
  background-image: url('/_s/uploads/bg-nuvens.jpg');
  background-size: cover;
  background-attachment: fixed;
  min-height: 100vh;

  display: flex;
`
const Container = styled(LayoutContainer)`
  padding-top: 6rem;
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
`

const Cards = styled.ul`
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;

  margin: 4rem 0;
  > li:hover {
    > div:first-child {
      background: #fff;
      border-color: #dd922c;
      color: #dd922c;
    }
    &:nth-child(4n - 2),
    &:nth-child(4n - 1) {
      > div:first-child {
        border-color: #a31216;
        color: #a31216;
      }
    }
  }
`

const Card = styled.li`
  display: flex;
  color: #fff;
  padding: 2rem;
  @media screen and (${media.phone}) {
    max-width: 50%;
  }
  /* background: grey; */
`

const CardIcon = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  border: 3px solid #fff;
  border-radius: 50%;
  transition: all ease 320ms;
  overflow: hidden;

  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    width: 1.2rem;
    height: 1.2rem;
  }
`
const CardText = styled.div`
  flex: 1;
  margin-left: 1rem;
  h3 {
    font-weight: bold;
    margin-bottom: 1rem;
  }
  p {
    line-height: 1.618rem;
  }
`
