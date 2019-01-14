/** @jsx jsx */
import React from 'react'
import { jsx, css } from '@emotion/core'

import Layout from '../../components/layout'
import Card from '../../components/sol-lewitt/card'
import { sol } from '../../services'

class Sol extends React.Component {
  render () {
    return (
      <Layout>
        <Header />
        <Drawings works={sol.works} />
      </Layout>
    )
  }
}

const Header = () => (
  <h2 css={[ styles.headingText ]}>
    <span css={[ styles.nameText ]}>
      Sol LeWitt
    </span><span css={[ styles.nameText2 ]}>'s</span> wall drawings
  </h2>
)

const Drawings = ({ works }) => (
  <div css={[ styles.drawings ]}>
    {works.map((work, i) => (
      <Card
        key={i}
        image={work.image}
        number={work.number}
        type={work.type}
        createdAt={work.createdAt}
        year={work.year}
      />
    ))}
  </div>
)

const styles = {
  headingText: css({
    marginTop: 0,
    marginBottom: '1em',
    fontSize: '1.6em',
    fontWeight: 300,
    fontStyle: 'italic',
    letterSpacing: '0.01em',
  }),
  nameText: css({
    fontWeight: 700,
    fontStyle: 'normal',
    letterSpacing: '0.05em',
  }),
  nameText2: {
    fontStyle: 'normal',
  },
  drawings: css({
    width: '100%',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  }),
}

export default Sol
