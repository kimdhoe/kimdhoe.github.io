import React from 'react'
import { Link, graphql } from 'gatsby'
import { css } from 'glamor'

import Layout from '../components/layout'

export default ({ data }) => (
  <Layout>
    {data.allMarkdownRemark.edges.map(({ node }) => (
      <Entry
        key={node.id}
        slug={node.fields.slug}
        title={node.frontmatter.title}
        date={node.frontmatter.date}
        excerpt={node.frontmatter.excerpt}
        tags={node.frontmatter.tags}
      />
    ))}
  </Layout>
)

const __Tags = css({
  margin: '0 0 0.3em 0.2em',
  padding: 0,
  listStyleType: 'none',
})
const __Tags_tag = css({
  display: 'inline-block',
  marginRight: '0.8em',
  fontFamily: 'Georgia',
  fontStyle: 'italic',
  fontSize: '0.8em',
  color: '#888',
})
const Tags = ({ tags }) => (
  <ul className={__Tags}>
    {tags.map(tag => (
      <li key={tag} className={__Tags_tag}>
        {tag}
      </li>
    ))}
  </ul>
);

const __Date = css({
  margin: 0,
  fontFamily: 'Georgia',
  fontStyle: 'italic',
  fontSize: '0.8em',
  color: '#888',
})
const Date = ({ date }) => (
  <p className={__Date}>
    {date}
  </p>
)

const __Title = css({
  position: 'relative',
  marginBottom: '0.3em',
})
const __Title_bulletWrapper = css({
  position: 'absolute',
  top: '0px',
  left: '-34px',
  width: '21px',
  height: '25px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: 'white',
})
const __Title_bullet = css({
  display: 'block',
  margin: 0,
  padding: 0,
  width: '9px',
  height: '9px',
  border: '1px solid #bbb',
  borderRadius: '50%',
})
const __Title_title = css({
  margin: '0',
})
const Title = ({ title }) => (
  <div className={__Title}>
    <div className={__Title_bulletWrapper}>
      <span className={__Title_bullet} />
    </div>
    <h2 className={__Title_title}>
      {title}
    </h2>
  </div>
)

const __Excerpt = css({
  margin: 0,
  marginBottom: '0.3em',
})
const Excerpt = ({ text }) => (
  <p className={__Excerpt}>
    {text}
  </p>
)

const __Entry = css({
  paddingLeft: '1.424em',
  paddingBottom: '1.602em',
  borderLeft: '1px dashed #bbb',
})
const __Entry_link = css({
  textDecoration: 'none',
  color: '#444',
  [`:hover .${__Title_bullet}`]: {
    borderColor: 'tomato',
    backgroundColor: 'tomato',
  }
})
const Entry = ({ title, date, excerpt, tags, slug }) => (
  <div className={__Entry}>
    <Link className={__Entry_link} to={slug}>
      <Tags tags={tags || []} />
      <Title title={title} />
      <Excerpt text={excerpt} />
      <Date date={date} />
    </Link>
  </div>
)

export const query = graphql`
query {
  allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
    totalCount
    edges {
      node {
        id
        frontmatter {
          title
          date(formatString: "DD MMMM, YYYY")
          excerpt
          tags
        }
        fields {
          slug
        }
      }
    }
  }
}
`
