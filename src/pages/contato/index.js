import React, { useState } from 'react'
import { navigate } from 'gatsby-link'

import styled from 'styled-components'
import SEO from 'src/components/SEO'
import Layout from 'src/layouts/LayoutDefault'

import { LayoutContainer } from 'src/layouts/LayoutDefault/styles'

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

export default function Contato(props) {
  const [state, setState] = useState({})

  function handleChange(e) {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  function handleSubmit(e) {
    e.preventDefault()
    const form = e.target
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...state,
      }),
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch(error => alert(error))
  }
  return (
    <Layout>
      <SEO title="Contato" />
      <ContainerWrapper {...props}>
        <Container>
          <header>
            <h2>Contato</h2>
            <p>
              Deixe sua mensagem ou solicitação. Ficaremos felizes em atendê-lo.
            </p>
          </header>
          <Columns>
            <Column>
              <h2>Solicite ou deixe sua mensagem</h2>
              <form
                name="contact"
                method="post"
                action="/contato/thanks/"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={handleSubmit}
              >
                {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
                <input type="hidden" name="form-name" value="contact" />
                <div hidden>
                  <label>
                    Don’t fill this out:{' '}
                    <input name="bot-field" onChange={handleChange} />
                  </label>
                </div>
                <input
                  type={'text'}
                  name={'name'}
                  onChange={handleChange}
                  id={'name'}
                  placeholder="Seu nome"
                  required={true}
                />
                <input
                  type={'email'}
                  name={'email'}
                  onChange={handleChange}
                  id={'email'}
                  placeholder="Seu email"
                  required={true}
                />
                <textarea
                  name={'message'}
                  onChange={handleChange}
                  id={'message'}
                  placeholder="Sua mensagem"
                  required={true}
                />
                <button type="submit">Enviar</button>
              </form>
            </Column>
            <Column>
              <h2>Informações para contato</h2>
            </Column>
          </Columns>
        </Container>
      </ContainerWrapper>
    </Layout>
  )
}

const ContainerWrapper = styled.div`
  flex: 1;
  background-image: url('/_img/bg-montanhas.jpg');
  background-size: cover;
  min-height: fit-content;

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
const Columns = styled.div`
  display: flex;
  width: 100%;
  margin-top: 2rem;
  color: #fff;
`

const Column = styled.div`
  flex: 1;
  padding: 2rem;

  h2 {
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 1.618rem;
  }

  form {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    input,
    textarea {
      width: 100%;
      padding: 0.75rem;
      font-size: 1rem;
      margin-bottom: 1rem;
      box-shadow: 0;
      border: 0;
      border-radius: 0.5rem;
    }
    textarea {
      resize: none;
      min-width: 100%;
      min-height: 8rem;
      max-height: 15rem;
    }

    button {
      padding: 0.75rem 1.25rem;
      border-radius: 0.25rem;
      background: green;
    }
  }
`
