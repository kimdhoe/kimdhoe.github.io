import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

import Header from './header';
import Footer from './footer';

import 'sanitize.css'
import '../styles/typography.css'

export default ({ children }) => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <Container>
        <Header title={data.site.siteMetadata.title} />

        {children}

        <Footer />
      </Container>
    )}
  />
)

const Container = styled.div`
margin: 0 auto;
padding: 1em;
max-width: 760px;
`
