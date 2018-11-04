import React from 'react'
import { Link, graphql } from 'gatsby'
import styled from 'styled-components'

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

const Tags = ({ tags }) => (
  <div>
    {tags.map(tag => (
      <span key={tag}>{tag}</span>
    ))}
  </div>
);

const Entry = ({ title, date, excerpt, tags, slug }) => (
  <StyledEntry>
    <StyledLink to={slug}>
      <StyledDate>
        <Bullet />
        {date}
      </StyledDate>
      <StyledContent>
        <Title>{title}</Title>
        <Excerpt>{excerpt}</Excerpt>
        <Tags tags={tags || []} />
      </StyledContent>
    </StyledLink>
  </StyledEntry>
)

const StyledEntry = styled.div`
margin-bottom: 2em;
`

const StyledLink = styled(Link)`
font-style: normal;
text-decoration: none;
color: #333;
`

const Bullet = styled.span`
display: inline-block;
margin-left: -0.3em;
margin-right: 1.424em;
width: 9px;
height: 9px;
border-radius: 25%;
transform: rotate(45deg);
border: 1px solid #888; 

${StyledLink}:hover & {
  background-color: #888;
}
`

const StyledContent = styled.div`
padding-left: 1.424em;
border-left: 1px dashed #888; 
`

const StyledDate = styled.p`
margin: 0;
font-size: 0.8em;
color: #888;
`

const Title = styled.h2`
margin-top: 0.3em;
margin-bottom: 0.2em;
`

const Excerpt = styled.p`
margin: 0;
`

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
