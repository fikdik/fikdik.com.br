import React from "react"

import info from "content/general/info.json"
import social from "content/general/social.json"
import siteMetadata from "content/settings/siteMetadata.json"
import { graphql } from "gatsby"
import PropTypes from "prop-types"

import SEO from "~/components/SEO"
import PageLayout from "~/layouts/PageLayout"
import BackgroundImage from "gatsby-background-image"
import SmartLink from "~/components/SmartLink"
import CMSImage from "~/components/CMSImage"

import SVGIcon from "~/components/SVGIcon"

import styles from "./home.module.css"

export const Template = ({ hero, goals, services, plans }) => {
  return (
    <main className="flex-auto flex flex-col">
      <BackgroundImage
        Tag={`section`}
        className="bg-scroll bg-no-repeat min-h-screen"
        fluid={hero.bgImage.childImageSharp.fluid}
        backgroundColor={hero.bgColor}
      >
        <div className="container min-h-screen flex justify-end items-center p-4">
          <div className="p-8 mt-12 text-white bg-extra-0 rounded md:w-1/2">
            <h1 className="font-bold text-2xl md:text-3xl pb-4">
              {hero.title}
            </h1>
            <p className="mb-8 md:text-xl">{hero.text}</p>
            <SmartLink className="btn bg-brand-0" to={hero.link}>
              Saiba mais
            </SmartLink>
          </div>
        </div>
      </BackgroundImage>

      <section
        id="goals"
        className="min-h-screen"
        style={{ backgroundColor: goals.bgColor }}
      >
        <div className="container p-4 text-center text-white">
          <h2 className="mt-24 pb-6 text-3xl md:text-4xl font-bold">
            {goals.title}
          </h2>
          <p className="pb-6 text-xl">{goals.text}</p>
          <div className="flex flex-wrap items-center -mx-4">
            {goals.cards.map(card => (
              <div
                className="p-4 flex-auto self-stretch w-full md:w-1/2 lg:w-1/4"
                key={card.title}
              >
                <div className="bg-body-0 p-4 h-full rounded flex flex-col items-center">
                  <CMSImage
                    className="w-32 mb-4 md:w-40"
                    imageInfo={{ image: card.icon }}
                  />
                  <h3 className="text-3xl mb-4 uppercase font-bold">
                    {card.title}
                  </h3>
                  <p className="text-xl">{card.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <BackgroundImage
        Tag={`section`}
        id="services"
        className="bg-fixed bg-no-repeat block min-h-screen"
        fluid={services.bgImage.childImageSharp.fluid}
        backgroundColor={services.bgColor}
      >
        <div className="container p-4 text-center text-white">
          <h2 className="mt-24 pb-6 text-3xl md:text-4xl font-bold">
            {services.title}
          </h2>
          <p className="pb-6 text-xl">{services.text}</p>
          <div
            className={`${styles.serviceCards} flex flex-wrap items-center -mx-4 text-left`}
          >
            {services.cards.map(card => (
              <div
                className="p-4 flex-auto self-stretch w-full md:w-1/2"
                key={card.title}
              >
                <div className="p-4 h-full flex">
                  <div
                    className={`${styles.serviceIcon} border-2 w-10 h-10 mr-4 rounded-full flex justify-center items-center`}
                  >
                    <SVGIcon className="w-12 h-12 p-2" name={card.icon} />
                  </div>
                  <div className="flex flex-col">
                    <h3 className="font-bold text-lg">{card.title}</h3>
                    <p>{card.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </BackgroundImage>
      <BackgroundImage
        Tag={`section`}
        id="plans"
        className="bg-scroll bg-no-repeat block min-h-screen"
        fluid={plans.bgImage.childImageSharp.fluid}
        backgroundColor={plans.bgColor}
      >
        <div className="container p-4 text-center text-white">
          <h2 className="mt-24 pb-6 text-3xl md:text-4xl font-bold">
            {plans.title}
          </h2>
          <p className="pb-6 text-xl">{plans.text}</p>
          <div className="flex flex-wrap items-center -mx-4">
            {plans.cards.map(card => (
              <div
                className="p-4 flex-auto self-stretch w-full md:w-1/3"
                key={card.title}
              >
                <div className="bg-header-0 h-full rounded overflow-hidden flex flex-col items-center">
                  <div
                    className="p-4 w-full"
                    style={{ backgroundColor: card.color }}
                  >
                    <h3 className="text-4xl md:text-3xl">{card.title}</h3>
                    <p className="text-gray-300">{card.text}</p>
                  </div>
                  <div className="p-4 h-full flex flex-col justify-between text-gray-700">
                    <div className="mb-6">
                      {Number(card.price).toString() === "NaN" ? (
                        <p className="mb-2 text-4xl leading-8">{card.price}</p>
                      ) : (
                        <p className="mb-2 flex align-top justify-center">
                          <span className="mr-2">R$</span>
                          <big className="mr-2 text-4xl leading-8">
                            {card.price.split(".")[0]}
                          </big>
                          <span>,{card.price.split(".")[1] || "00"}</span>
                        </p>
                      )}
                      <p>{card.period}</p>
                    </div>
                    <ul className={styles.plansList}>
                      {card.services.map(service => (
                        <li key={service}>{service}</li>
                      ))}
                    </ul>
                    <div>
                      <SmartLink
                        className="btn text-white bg-green-500 bg"
                        to="/contato"
                      >
                        Solicite
                      </SmartLink>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </BackgroundImage>
    </main>
  )
}

Template.propTypes = {
  data: PropTypes.object,
}

export default function HomePage({ data }) {
  const { frontmatter } = data.markdownRemark
  const { hero, goals, services, plans, metadata } = frontmatter
  const ogImage = metadata.cover
    ? metadata.cover.childImageSharp.fluid.src
    : null

  const structuredDataOrganization = JSON.stringify({
    "@context": "http://schema.org",
    "@type": "Organization",
    legalName: info.localID.legalName,
    url: siteMetadata.siteUrl,
    logo: siteMetadata.logo,
    foundingDate: info.localID.foundingDate,
    founders: info.localID.founders
      ? info.localID.founders.map(fouder => ({
          "@type": "Person",
          name: fouder,
        }))
      : [],
    contactPoint: [
      {
        "@type": "ContactPoint",
        email: info.email.address,
        telephone: info.phone.number,
        contactType: "customer service",
      },
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: info.address.locality,
      addressRegion: info.address.region,
      addressCountry: info.address.country,
      postalCode: info.address.postalCode,
    },
    sameAs: social.networks.map(network => network.link),
  })

  return (
    <PageLayout>
      <SEO
        titleTemplate={`%s : ${siteMetadata.slogan}`}
        description={metadata.description}
        image={ogImage}
        structuredData={structuredDataOrganization}
      />
      <Template hero={hero} goals={goals} services={services} plans={plans} />
    </PageLayout>
  )
}

HomePage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export const pageQuery = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        hero {
          title
          text
          link
          bgColor
          bgImage {
            childImageSharp {
              fluid(maxWidth: 1600, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        goals {
          bgColor
          title
          text
          cards {
            title
            text
            icon {
              childImageSharp {
                fluid(maxWidth: 800, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
        services {
          bgColor
          bgImage {
            childImageSharp {
              fluid(maxWidth: 1600, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          title
          text
          cards {
            title
            text
            icon
          }
        }
        plans {
          bgColor
          bgImage {
            childImageSharp {
              fluid(maxWidth: 1600, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          title
          text
          cards {
            title
            text
            color
            period
            price
            services
          }
        }
        metadata {
          dateModified
          cover {
            childImageSharp {
              fluid(maxWidth: 800, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          description
        }
      }
    }
  }
`

// ...GatsbyImageSharpFluid
