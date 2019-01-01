import React from 'react'
import { Link, graphql } from 'gatsby'
import { css } from 'glamor'

import Layout from '../components/layout'

export default ({ data }) => (
  <Layout>
    <Entry
      slug={'/art/sol-118'}
      title={'[Sol Lewitt] Wall Drawing #118 (1971)'}
      date={'1 January, 2019'}
      excerpt={'Wall drawing #118 by Sol Lewitt implemented via HTML5 Canvas'}
    />
    <Entry
      slug={'/art/code-art'}
      title={'Generative art'}
      date={'31 December, 2018'}
      excerpt={'솔 르윗(Sol LeWitt) 스타일의 지시사항으로 이미지 만들기'}
    />
    {data.allMarkdownRemark.edges.map(({ node }) => (
      <Entry
        key={node.id}
        slug={node.fields.slug}
        title={node.frontmatter.title}
        date={node.frontmatter.date}
        excerpt={node.frontmatter.excerpt}
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
  color: '#777',
})

const __Date = css({
  margin: 0,
  fontFamily: 'Georgia',
  fontStyle: 'italic',
  fontSize: '0.8em',
  color: '#777',
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
const __Title_title = css({
  margin: '0',
})
const Title = ({ title }) => (
  <div className={__Title}>
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

const Entry = ({ title, date, excerpt, slug }) => (
  <div className={__Entry}>
    {/*<div className={__Entry_circle1} />*/}
    {/*<div className={__Entry_circle2} />*/}
    <Link className={__Entry_link} to={slug}>
      <Title title={title} />
      <Excerpt text={excerpt} />
      <Date date={date} />
    </Link>
  </div>
)
const __Entry_circle1 = css({
  position: 'absolute',
  top: '-40px',
  left: '-40px',
  width: '150px',
  height: '150px',
  borderRadius: '50%',
  backgroundColor: 'transparent',
  opacity: 0,
  transform: 'translateY(10px)',
  transition: 'all 0.2s ease',
})
const __Entry = css({
  position: 'relative',
  paddingBottom: '2em',
  [`:hover .${__Entry_circle1}`]: {
    backgroundColor: 'tomato',
    opacity: 0.4,
    transform: 'translateY(0)',
  }
})
const __Entry_link = css({
  position: 'relative',
  zIndex: 9,
  textDecoration: 'none',
  color: '#444',
})

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
        }
        fields {
          slug
        }
      }
    }
  }
}
`
