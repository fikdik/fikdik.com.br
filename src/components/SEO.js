import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { useStaticQuery, graphql, withPrefix } from 'gatsby'

function SEO({ description, lang, title, titleOnly }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            twitterAutor
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description

  return (
    <Helmet
      htmlAttributes={{ lang }}
      title={title}
      titleTemplate={titleOnly ? `%s` : `%s | ${site.siteMetadata.title}`}
      meta={[
        { name: `description`, content: metaDescription },
        { name: `author`, content: site.siteMetadata.author },
        { name: `theme-color`, content: `#D37F23` },
        { name: `twitter:card`, content: `summary` },
        { name: `twitter:creator`, content: site.siteMetadata.twitterAutor },
        { name: `twitter:title`, content: title },
        { name: `twitter:description`, content: metaDescription },
        { property: `og:title`, content: title },
        { property: `og:description`, content: metaDescription },
        { property: `og:type`, content: `website` },
        { property: `og:url`, content: `/` },
        {
          property: `og:image`,
          content: `${withPrefix('/')}_img/og-image.jpg`,
        },
      ]}
    >
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href={`${withPrefix('/')}_seo/apple-touch-icon.png`}
      />
      <link
        rel="icon"
        type="image/png"
        href={`${withPrefix('/')}_seo/favicon-32x32.png`}
        sizes="32x32"
      />
      <link
        rel="icon"
        type="image/png"
        href={`${withPrefix('/')}_seo/favicon-16x16.png`}
        sizes="16x16"
      />

      <link
        rel="mask-icon"
        href={`${withPrefix('/')}_seo/safari-pinned-tab.svg`}
        color="#D37F23"
      />
    </Helmet>
  )
}

SEO.defaultProps = {
  lang: `pt`,
  description: ``,
  templating: true,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
  titleOnly: PropTypes.bool,
}

export default SEO
