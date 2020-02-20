import React from "react"
import Helmet from "react-helmet"

import siteMetadata from "content/settings/siteMetadata.json"
import PropTypes from "prop-types"

function SEO({
  title,
  titleTemplate,
  description,
  lang,
  typeName,
  slug,
  image,
  publisher,
  author,
  fbAdmins,
  structuredData,
  meta,
}) {
  const { siteUrl } = siteMetadata
  const ogImage = image || siteMetadata.thumbnail
  const ogDescription = description || siteMetadata.description

  return (
    <Helmet
      htmlAttributes={{ lang }}
      title={title}
      titleTemplate={titleTemplate}
      meta={meta}
    >
      {structuredData && (
        <script type="application/ld+json">{structuredData}</script>
      )}

      <meta property="og:title" content={title} />
      <meta name="twitter:title" content={title} />
      <meta name="description" content={ogDescription} />
      <meta property="og:description" content={ogDescription} />
      <meta name="twitter:description" content={ogDescription} />
      <meta property="og:type" content={typeName} />
      <meta property="og:url" content={siteUrl + slug} />
      <meta name="twitter:card" content="summary_large_image" />

      {ogImage && <meta property="og:image" content={siteUrl + ogImage} />}
      {ogImage && <meta name="twitter:image" content={siteUrl + ogImage} />}

      {publisher && <meta name="twitter:site" content={publisher} />}
      {author && <meta name="twitter:creator" content={author} />}
      {fbAdmins && <meta property="fb:admins" content={fbAdmins} />}

      {/* Article
      <meta property="article:published_time" content="2013-09-17T05:59:00+01:00" />
      <meta property="article:modified_time" content="2013-09-16T19:08:47+01:00" />
      <meta property="article:section" content="Article Section" />
      <meta property="article:tag" content="Article Tag" />
      */}

      {/* Product
      <meta name="twitter:data1" content="$3">
      <meta name="twitter:label1" content="Price">
      <meta name="twitter:data2" content="Black">
      <meta name="twitter:label2" content="Color">

      <meta property="og:site_name" content="Site Name, i.e. Moz" />
      <meta property="og:price:amount" content="15.00" />
      <meta property="og:price:currency" content="USD" />
      */}
    </Helmet>
  )
}

SEO.defaultProps = {
  title: siteMetadata.title,
  titleTemplate: `%s - ${siteMetadata.title}`,
  description: null,
  lang: siteMetadata.lang,
  typeName: "website",
  slug: "",
  image: null,
  publisher: siteMetadata.publisher,
  author: siteMetadata.author,
  fbAdmins: siteMetadata.fbAdmins,
  structuredData: null,
  meta: [],
}

SEO.propTypes = {
  title: PropTypes.string,
  titleTemplate: PropTypes.string,
  description: PropTypes.string,
  lang: PropTypes.string,
  typeName: PropTypes.string,
  slug: PropTypes.string,
  image: PropTypes.string,
  structuredData: PropTypes.string,
  publisher: PropTypes.string,
  author: PropTypes.string,
  fbAdmins: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
}

export default SEO
