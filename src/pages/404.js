import React from "react"
import SEO from "~/components/SEO"

import PageLayout from "~/layouts/PageLayout"
import BackgroundImage from "gatsby-background-image"
import SimpleForm from "~/components/SimpleForm"
import { phone, email } from "content/general/info.json"

import SVGIcon from "~/components/SVGIcon"
export default function contato({ data }) {
  const { plans } = data.markdownRemark.frontmatter
  return (
    <PageLayout>
      <SEO title={"Contato"} />
      <main className="flex-auto flex flex-col">
        <BackgroundImage
          Tag={`section`}
          className="bg-scroll bg-no-repeat block min-h-screen"
          fluid={plans.bgImage.childImageSharp.fluid}
          backgroundColor={plans.bgColor}
        >
          <div className="container p-4 text-center text-white">
            <h2 className="mt-24 pb-6 text-3xl md:text-4xl font-bold">
              404 - Página não encontrada
            </h2>
          </div>
        </BackgroundImage>
      </main>
    </PageLayout>
  )
}

export const pageQuery = graphql`
query pages404 {
  markdownRemark(fileAbsolutePath: { regex: "/.*(src/pages/index\\.)md$/" }) {
    frontmatter {
      plans {
        bgColor
        bgImage {
          childImageSharp {
            fluid(maxWidth: 1600, quality: 90) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
}
`
