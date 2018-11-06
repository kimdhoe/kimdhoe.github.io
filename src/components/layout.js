import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { css } from 'glamor';

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
      <div className={__Container}>
        <Header title={data.site.siteMetadata.title} />

        <main className={__Main}>
          {children}
        </main>

        <Footer />
      </div>
    )}
  />
)

const __Container = css({
  display: 'flex',
  minHeight: '100vh',
  flexDirection: 'column',
  margin: '0 auto',
})

const __Main = css({
  flex: 1,
  margin: '0 auto',
  padding: '0 1em',
  maxWidth: '760px',
})
