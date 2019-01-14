import React from 'react'
import { css } from 'glamor'
import random from 'canvas-sketch-util/random'
import palettes from 'nice-color-palettes/100.json'

import Layout from '../../components/layout'

const SPACING = 5

const makePaths = (width, height) => {
  const paths = []

  for (let x = 0; x <= width; x += SPACING) {
    const a = { x, y: 0 }
    const b = { x, y: height }
    paths.push([ a, b ])
  }

  return paths
}
class Sol17 extends React.Component {
  canvas = React.createRef()
  palette = random.pick(palettes)

  state = {
    width: random.rangeFloor(400, 500),
    height: random.rangeFloor(300, 500),
  }

  componentDidMount () {
    const { width, height } = this.state
    const canvas = this.canvas.current
    const context = canvas.getContext('2d')
    const paths = makePaths(width, height)

    paths.forEach(([ a, b ]) => {
      context.beginPath()
      context.moveTo(a.x, a.y)
      context.lineTo(b.x, b.y)
      context.strokeStyle = random.pick(this.palette)
      context.lineWidth = 0.7
      context.stroke()
    })
  }

  render () {
    const { width, height } = this.state

    return (
      <Layout>
        <div>
          <h2 style={{ textAlign: 'center' }}>
            [Sol LeWitt] Wall Drawing #45 (1970)
          </h2>

          <div className={styles.art}>
            <canvas
              ref={this.canvas}
              width={width}
              height={height}
            />
          </div>

          <div className={styles.labelWrapper}>
            <div className={styles.label}>
              <p className={styles.artist}>
                SOL LEWITT
              </p>
              <p className={styles.artwork}>
                <span className={styles.italic}>Wall drawing</span>
                , dhk.party
              </p>
              <p className={styles.medium}>
                Digital (HTML5 Canvas)
              </p>
            </div>
          </div>

          <p className={styles.paragraph}>
            이 작품에 대한 솔 르윗의 지시사항은 다음과 같다.
          </p>

          <blockquote className={styles.instructionContent}>
            Straight lines 10" (25 cm) long, not touching, covering the wall evenly.<br /><br />
            벽면을 고르게 덮는 서로 만나지 않는 25cm 길이의 직선들.<br />
          </blockquote>
        </div>
      </Layout>
    )
  }
}

const styles = {
  art: css({
    margin: '40px 0',
    textAlign: 'center',
  }),
  labelWrapper: css({
    display: 'flex',
    justifyContent: 'center',
  }),
  label: css({
    marginBottom: '30px',
  }),
  artist: css({
    margin: 0,
    padding: 0,
    fontWeight: 'bold',
    textDecoration: 'underline',
  }),
  artwork: css({
    margin: 0,
    padding: 0,
  }),
  medium: css({
    margin: 0,
    padding: 0,
  }),
  italic: css({
    fontStyle: 'italic',
  }),
  paragraph: css({

  }),
  instruction: css({
  }),
  instructionContent: css({
    paddingLeft: '20px',
    borderLeft: 'solid 7px #f1f3f5',
    fontFamily: 'monospace',
    fontSize: '1.1em',
  }),
  code: css({
  })
}

export default Sol17
