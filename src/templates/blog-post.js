import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'

export default ({ data: { markdownRemark: { frontmatter, html } } }) => {
  return (
    <Layout>
      <h2>{frontmatter.title}</h2>
      <p>{frontmatter.date}</p>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </Layout>
  )
}

export const query = graphql`
query($slug: String!) {
  markdownRemark(fields: { slug: { eq: $slug } }) {
    html
    frontmatter {
      title
      date(formatString: "DD MMMM, YYYY")
    }
  }
}
`
