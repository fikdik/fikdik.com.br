import React from "react"

import { graphql, StaticQuery } from "gatsby"
import _ from "lodash"

import SmartLink from "~/components/SmartLink"

import styles from "./index.module.css"

export default function Aside() {
  return (
    <div className={styles.aside}>
      <AsideItens />
    </div>
  )
}

function AsideBlogPots({ data }) {
  const { nodes } = data.allMarkdownRemark
  let tags = []
  // Iterate through each post, putting all found tags into `tags`
  nodes.forEach(node => {
    if (_.get(node, `frontmatter.tags`)) {
      tags = tags.concat(node.frontmatter.tags)
    }
  })
  // Eliminate duplicate tags
  tags = _.uniq(tags)

  return (
    <>
      <div className="mb-6">
        <div className={styles.title}>Posts Recentes</div>
        <ul>
          {nodes.map(post => (
            <li className="border-b-2 pb-2 mb-2" key={post.id}>
              <SmartLink to={post.fields.slug}>
                {post.frontmatter.title}
              </SmartLink>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <div className={styles.title}>Tags</div>
        <ul className="flex flex-wrap">
          {tags.map(tag => (
            <li
              className="py-1 px-4 bg-brand-1-0 text-white mr-1 mb-1 hover:bg-gray-700"
              key={`${tag}`}
            >
              <SmartLink to={`/tags/${_.kebabCase(tag)}`}>{tag}</SmartLink>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

const AsideItens = () => (
  <StaticQuery
    query={graphql`
      query componentsAside {
        allMarkdownRemark(
          limit: 500
          sort: {
            order: DESC
            fields: [frontmatter___metadata___datePublished]
          }
          filter: { frontmatter: { templateKey: { eq: "blog/post" } } }
        ) {
          nodes {
            id
            frontmatter {
              title
              tags
            }
            fields {
              slug
            }
          }
        }
      }
    `}
    render={(data, count) => <AsideBlogPots data={data} count={count} />}
  />
)
