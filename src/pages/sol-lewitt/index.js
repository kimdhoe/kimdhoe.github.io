/** @jsx jsx */
import React from 'react'
import { Link, graphql } from 'gatsby'
import { jsx, css } from '@emotion/core'

import Layout from '../../components/layout'
import sol56 from './sol-56.png'
import sol51 from './sol-51.png'
import sol49 from './sol-49.png'
import sol46 from './sol-46.png'
import sol45 from './sol-45.png'
import sol17 from './sol-17.png'
import sol16 from './sol-16.png'
import sol11 from './sol-11.png'
import sol118 from './sol-118.png'

const works = [
  {
    type: 'wall drawing',
    number: 56,
    image: sol56,
  },
  {
    type: 'wall drawing',
    number: 51,
    image: sol51,
  },
  {
    type: 'wall drawing',
    number: 49,
    image: sol49,
  },
  {
    type: 'wall drawing',
    number: 46,
    image: sol46,
  },
  {
    type: 'wall drawing',
    number: 45,
    image: sol45,
  },
  {
    type: 'wall drawing',
    number: 17,
    image: sol17,
  },
  {
    type: 'wall drawing',
    number: 16,
    image: sol16,
  },
  {
    type: 'wall drawing',
    number: 11,
    image: sol11,
  },
  {
    type: 'wall drawing',
    number: 118,
    image: sol118,
  },
]

class Sol extends React.Component {
  render () {
    return (
      <Layout>
        <h2 css={[ styles.headingText ]}>
          <span css={[ styles.nameText ]}>
            Sol LeWitt
          </span>'s wall drawings
        </h2>

        <div css={[ styles.items ]}>
          {works.map(({ image, number, type }, i) => (
            <div
              key={i}
              css={[ styles.item ]}
            >
              <div css={[ styles.itemWrapper ]}>
                <img
                  css={[ styles.image ]}
                  src={image}
                  alt={`Sol LeWitt ${type} #${number}`}
                />
              </div>
            </div>
          ))}
        </div>
      </Layout>
    )
  }
}

const styles = {
  headingText: css({
    marginBottom: '1em',
    fontSize: '1.6em',
    fontWeight: 300,
    letterSpacing: '0.01em',
  }),
  nameText: css({
    fontWeight: 600,
    fontStyle: 'italic',
    letterSpacing: '0.05em',
  }),
  items: css({
    width: '100%',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  }),
  item: css({
    width: '30%',
    '@media(max-width: 768px)': {
      width: '47.5%',
    },
  }),
  itemWrapper: css({
    marginLeft: -3,
    marginBottom: '15%',
    '@media(max-width: 768px)': {
      marginBottom: '7.5%',
    },
    paddingBottom: '100%',
    boxSizing: 'content-box',
    width: '100%',
    height: 0,
    border: '3px solid #333',
  }),
  image: css({
    width: '100%',
  }),
}

export default Sol
