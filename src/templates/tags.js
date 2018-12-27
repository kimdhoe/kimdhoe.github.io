import React from 'react'
import { Link, graphql } from 'gatsby'
import { css } from 'glamor'
import Layout from '../components/layout'

export default ({ pageContext, data }) => {
  const { tag } = pageContext
  const { edges, totalCount } = data.allMarkdownRemark
  const tagHeader = `${totalCount} post${
    totalCount === 1 ? '' : 's'
    } tagged with "${tag}`

  return (
    <Layout>
      <h1>{tagHeader}</h1>
    </Layout>
  )
}

export const query = graphql`
query($tag: String) {
  allMarkdownRemark {
    limit: 2000
    sort: { fields: [frontmatter___date], order: DESC }
    filter: { frontmatter: { tags: { in: [$tag] } }
  ) {
    totalCount
    edges {
      node {
        frontmatter {
          title
          path
          date(formatString: "DD MMMM, YYYY")
          excerpt
        }
      }
    }
  }
}
`
