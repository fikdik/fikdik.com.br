import React from "react"

import Img from "gatsby-image"
import _ from "lodash"

import SmartLink from "~/components/SmartLink"

export default function BlogPostListItem({
  path,
  title,
  description,
  cover,
  tags,
}) {
  return (
    <div className="flex flex-col mb-6 border-dotted border-b-2 mb-16">
      <SmartLink to={path} className="border-dotted border-b-2 mb-2">
        {cover && (
          <Img
            className="mb-4"
            fluid={cover.childImageSharp.fluid}
            alt={title}
          />
        )}
        <p className="font-serif text-2xl leading-none mb-4">{title}</p>
      </SmartLink>
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
      <p>{description}</p>
    </div>
  )
}
