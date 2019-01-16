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
        <div css={{
          display: 'flex',
          alignItems: 'center',
          '@media (max-width: 768px)': {
            display: 'block',
          },
        }}>
          <div css={{ marginRight: '1em' }}>
            <Header />
            <Label />
          </div>
          <div css={{ flex: 1 }}>
            <p css={{
              padding: '0 1em',
              fontSize: '0.85em',
              fontStyle: 'italic',
              fontWeight: 300,
              color: 'black',
            }}>
              <span css={{ fontStyle: 'normal' }}>「</span>In conceptual art the idea or the concept is the most important aspect of the work.
              When an artist uses a conceptual form of art, it means that all of the planning and decisions are made beforehand and the execution is a perfunctory affair.{' '}
              The idea becomes a machine that makes the art.<span css={{ fontStyle: 'normal' }}>」</span>
            </p>
          </div>
        </div>
        <Note />
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

const Label = () => (
  <div css={[ styles.label ]}>
    <p css={[ styles.medium ]}>
      Web Technology (HTML Canvas API)
    </p>
    <p css={[ styles.artist ]}>
      Donghee Kim
    </p>
  </div>
)

const Note = () => (
  <div css={[ styles.note ]}>
    <h3 css={[ styles.subtitle ]}>
      One drawing a day —{' '}
      <q css={{ textTransform: 'none', fontStyle: 'italic' }}>
        The idea becomes a machine that makes the art
      </q>
    </h3>
    <p css={[ styles.noteText ]}>
      여기 있는 이미지들은 개념 예술가 <Italic>Sol LeWitt</Italic>의 작품을 웹 기술로 구현한 것들입니다.{' '}
      <Italic>Sol LeWitt</Italic>은 <q css={{ fontStyle: 'italic' }}>시각적으로 구체화되지 않는다 하더라도, 아이디어 자체는 완성된 작품과 마찬가지</q>라고 생각했던 작가입니다.
      이 프로젝트는 그의 말 그대로 아이디어를 작품 만드는 기계로 변환시키는 일을 하는 셈입니다.
    </p>
    <p css={[ styles.noteText ]}>
      작품을 화면에 구현하면서 웹 시각화 기술을 익히기 위한 시도로 시작되었고, 매일 벽화 지시사항 하나를 코드로 구현합니다.
    </p>
  </div>
)

const Italic = ({ children }) => <span css={{ fontStyle: 'italic' }}>{children}</span>

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
    margin: 0,
    fontSize: '1.6em',
    fontWeight: 300,
    fontStyle: 'italic',
    letterSpacing: '0.01em',
  }),
  subtitle: {
    letterSpacing: '0.07em',
    fontSize: '1.1rem',
    fontWeight: 300,
    textTransform: 'uppercase',
    color: 'rgba(0, 0, 0, 0.5)',
  },
  nameText: css({
    fontWeight: 700,
    fontStyle: 'normal',
    letterSpacing: '0.05em',
    textDecoration: 'underline',
  }),
  nameText2: {
    fontStyle: 'normal',
  },
  label: {
    display: 'inline-block',
    margin: '0 0 0.5em',
    padding: '0.8em 1.5em 1.5em 0',
    borderBottom: '3px solid black',
  },
  medium: {
    margin: 0,
    padding: 0,
    letterSpacing: '0.03em',
    fontSize: '0.95em',
    color: 'black',
  },
  artist: {
    margin: '0.3em 0 0 0',
    padding: 0,
    fontSize: '0.95em',
    color: 'black',
  },
  note: {
    marginBottom: '1.5em',
  },
  noteText: {
    marginBottom: '0.5em',
    fontSize: '0.95em',
    ':last-child': {
      marginTop: '0.1em',
    }
  },
  quote: {
    margin: '0 0 1em 0',
    paddingLeft: '2em',
    fontStyle: 'italic',
    fontSize: '0.95em',
    fontWeight: 300,
    color: 'black',
  },
  drawings: css({
    width: '100%',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  }),
}

export default Sol
