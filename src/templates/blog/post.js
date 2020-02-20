import React from "react"

import info from "content/general/info.json"
import { siteUrl } from "content/settings/siteMetadata.json"
import { graphql } from "gatsby"
import _ from "lodash"
import PropTypes from "prop-types"

import Aside from "~/components/Aside"
import Content, { HTMLContent } from "~/components/Content"
import CMSImage from "~/components/CMSImage"
import SEO from "~/components/SEO"
import SmartLink from "~/components/SmartLink"
import PageLayout from "~/layouts/PageLayout"
import imagecb from "~/utils/imagecb"

export const Template = ({ title, cover, tags, content, componentContent }) => {
  const PostContent = componentContent || Content
  return (
    <div className="md:w-2/3 p-6">
      <div className="border-dotted border-b-2 mb-2">
        {cover && <CMSImage className="mb-4" imageInfo={cover} alt={title} />}
        <p className="font-serif text-5xl leading-none mb-4">{title}</p>
      </div>
      <div className="flex border-dotted border-b-2 pb-2 mb-2">
        <b className="mr-2">Tags: </b>
        <ul className="flex flex-wrap text-gray-600">
          {tags.map((tag, i) => (
            <li key={tag}>
              <SmartLink className="mr-2" to={`/tags/${_.kebabCase(tag)}`}>
                {tag}
                {i < tags.length - 1 ? ", " : ""}
              </SmartLink>
            </li>
          ))}
        </ul>
      </div>

      <PostContent className="blog-post-md" content={content} />
    </div>
  )
}

export default function PostBlog({ data }) {
  const { frontmatter, html, rawMarkdownBody, fields } = data.markdownRemark
  const { slug } = fields
  const { author, title, description, cover, tags, metadata } = frontmatter
  const ogImage = cover?.childImageSharp?.fluid?.src

  const structuredDataArticle = JSON.stringify({
    "@context": "http://schema.org",
    "@type": "BlogPosting",
    mainEntityOfPage: siteUrl + slug,
    headline: metadata.headline || description.slice(0, 110),
    image: imagecb(metadata.cover, ogImage, siteUrl),
    datePublished: metadata.datePublished,
    dateModified: metadata.dateModified,
    author: {
      "@type": "Person",
      name: author,
    },
    articleBody: rawMarkdownBody,
    publisher: {
      "@type": "Organization",
      name: info.localID.legalName,
      logo: {
        "@type": "ImageObject",
        url: siteUrl + "/icons/icon-512x512.png",
      },
    },
    description: description,
    url: siteUrl + slug,
  })

  const meta = [
    {
      property: "article:published_time",
      content: metadata.datePublished,
    },
    {
      property: "article:modified_time",
      content: metadata.dateModified,
    },
    // {
    //   property: "article:section",
    //   content: metadata.section,
    // },
    {
      property: "article:tag",
      content: tags.join(", "),
    },
  ]

  return (
    <PageLayout>
      <SEO
        title={title}
        type="article"
        description={metadata.description}
        image={ogImage}
        structuredData={structuredDataArticle}
        meta={meta}
      />

      <main className="flex-auto">
        <div className="container page-header hidden md:block">
          <div className="page-header-img" />
          <h1>{title}</h1>
        </div>
        <div className="container bg-white">
          <div className="flex flex-col md:flex-row">
            <Template
              title={title}
              cover={cover}
              tags={tags}
              content={html}
              componentContent={HTMLContent}
            />
            <div className="md:w-1/3 p-6">
              <Aside />
            </div>
          </div>
        </div>
      </main>
    </PageLayout>
  )
}

PostBlog.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export const pageQuery = graphql`
  query templatesBlogPost($id: String!) {
    markdownRemark(id: { eq: $id }) {
      rawMarkdownBody
      html
      fields {
        slug
      }
      frontmatter {
        title
        author
        description
        cover {
          childImageSharp {
            fluid(maxWidth: 600, quality: 95) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        tags
        metadata {
          datePublished
          dateModified
          headline
          cover {
            childImageSharp {
              fluid(maxWidth: 600, quality: 95) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`
