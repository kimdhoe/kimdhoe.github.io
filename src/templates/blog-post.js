import React from 'react'
import { graphql } from 'gatsby'
import { css } from '@emotion/core'
import Layout from '../components/layout'

export default ({ data: { markdownRemark: { frontmatter, html } } }) => {
  return (
    <Layout>
      <div css={__Post}>
        <p css={__Post_tags}>
          {(frontmatter.tags || []).map(tag => (
            <span key={tag} css={__Post_tag}>
              #{tag}
            </span>
          ))}
        </p>

        <h2 css={__Post_title}>{frontmatter.title}</h2>

        <p css={__Post_excerpt}>
          {frontmatter.excerpt}
        </p>

        <p css={__Post_date}>
          {frontmatter.date}
        </p>

        <div css={__Post_contents} dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </Layout>
  )
}

const __Post_tags = css({
  margin: 0,
  padding: 0,
  textAlign: 'center',
})
const __Post_tag = css({
  marginRight: '0.7em',
  fontFamily: 'Georgia',
  fontStyle: 'italic',
  color: '#888',
})
const __Post_title = css({
  marginTop: '1em',
  textAlign: 'center',
})
const __Post_excerpt = css({
  margin: '3em 0 2em',
  padding: '0 4em',
  fontSize: '0.8em',
})
const __Post_date = css({
  margin: '2em 0 3em',
  fontFamily: 'Georgia',
  textAlign: 'right',
  color: '#888',
})

const __Post = css({
  position: 'relative',
})
const __Post_contents = css({
  position: 'relative',
  zIndex: 9,
})

export const query = graphql`
query($slug: String!) {
  markdownRemark(fields: { slug: { eq: $slug } }) {
    html
    frontmatter {
      title
      date(formatString: "DD MMMM, YYYY")
      excerpt
    }
  }
}
`
