import React from 'react'
import { graphql } from 'gatsby'
import { css } from 'glamor'
import Layout from '../components/layout'

export default ({ data: { markdownRemark: { frontmatter, html } } }) => {
  console.log(frontmatter)
  return (
    <Layout>
      <div className={__Post}>
        {/*<div className={__circle1} />*/}
        {/*<div className={__circle2} />*/}
        <p className={__Post_tags}>
          {frontmatter.tags.map(tag => (
            <span key={tag} className={__Post_tag}>
              #{tag}
            </span>
          ))}
        </p>

        <h2 className={__Post_title}>{frontmatter.title}</h2>

        <p className={__Post_excerpt}>
          {frontmatter.excerpt}
        </p>

        <p className={__Post_date}>
          {frontmatter.date}
        </p>

        <div className={__Post_contents} dangerouslySetInnerHTML={{ __html: html }} />
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
  // fontStyle: 'italic',
  textAlign: 'right',
  color: '#888',
})

const __float1 = css.keyframes({
  '0%': { transform: 'translate(0, 0)' },
  '70%': { opacity: 0 },
  '100%': { transform: 'translate(-50px, -125px)', opacity: 0 }
})
const __float2 = css.keyframes({
  '0%': { transform: 'translate(0, 0)' },
  '50%': { opacity: 0 },
  '100%': { transform: 'translate(-30px, -125px)', opacity: 0 }
})
const __Post = css({
  position: 'relative',
})
const __circle1 = css({
  position: 'absolute',
  top: '-410px',
  left: '-300px',
  width: '480px',
  height: '480px',
  borderRadius: '50%',
  backgroundColor: '#2962ff',
  opacity: 0.7,
  animation: `${__float1} 11s forwards`,
})
const __circle2 = css({
  position: 'absolute',
  top: '-100px',
  left: '-50px',
  width: '190px',
  height: '190px',
  borderRadius: '50%',
  backgroundColor: '#ffcc33',
  opacity: 0.9,
  animation: `${__float2} 19s forwards`,
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
      tags
    }
  }
}
`
