import React from "react"

import { graphql } from "gatsby"

import Aside from "~/components/Aside"
import BlogPostListItem from "~/components/BlogPostListItem"
import SEO from "~/components/SEO"

import PageLayout from "../../layouts/PageLayout"

class TagRoute extends React.Component {
  render() {
    const posts = this.props.data.allMarkdownRemark.edges
    const tag = this.props.pageContext.tag
    const totalCount = this.props.data.allMarkdownRemark.totalCount
    const tagHeader = `${totalCount} post${
      totalCount === 1 ? "" : "s"
    } tagged with “${tag}”`
    return (
      <PageLayout>
        <SEO title={tagHeader} />

        <section className="flex-auto">
          <div className="container page-header hidden md:block">
            <div className="page-header-img"></div>
            <h1>{tagHeader}</h1>
          </div>

          <div className="container bg-white">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-2/3 p-6">
                <ul className="flex flex-col">
                  {posts.map(({ node: post }) => (
                    <li key={post.id}>
                      <BlogPostListItem
                        path={post.fields.slug}
                        title={post.frontmatter.title}
                        description={post.frontmatter.description}
                        date={post.frontmatter.metadata.datePublished}
                        highlight={!!post.frontmatter.highlight}
                        cover={post.frontmatter.cover}
                        tags={post.frontmatter.tags}
                      />
                    </li>
                  ))}
                </ul>
              </div>
              <div className="md:w-1/3 p-6">
                <Aside />
              </div>
            </div>
          </div>
        </section>
      </PageLayout>
    )
  }
}

export default TagRoute

export const tagPageQuery = graphql`
  query templatesBloTags($tag: String) {
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___metadata___datePublished], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            description
            highlight
            cover {
              childImageSharp {
                fluid(maxWidth: 600, quality: 95) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            metadata {
              datePublished(formatString: "MMMM DD, YYYY")
            }
            tags
          }
        }
      }
    }
  }
`
