import React from 'react'
import { css } from 'glamor'
import random from 'canvas-sketch-util/random'

import Layout from '../../components/layout'

const LINE_SPACING = 5
const WIDTH = 512
const BAND_WIDTH = WIDTH / random.range(1.5, 3)

class Sol16 extends React.Component {
  canvas = React.createRef()

  componentDidMount () {
    const canvas = this.canvas.current
    const context = canvas.getContext('2d')

    const makePaths = () => {
      const paths = []
      const diagonalLength = Math.sqrt(2 * WIDTH * WIDTH)

      for (let x = 0; x <= diagonalLength; x += LINE_SPACING) {
        const a = { x, y: 0 }
        const b = { x, y: BAND_WIDTH }
        paths.push([ a, b ])
      }

      return paths
    }

    const drawBand = () => {
      paths.forEach(([ a, b ]) => {
        context.beginPath()
        context.moveTo(a.x, a.y)
        context.lineTo(b.x, b.y)
        context.strokeStyle = '#aaa'
        context.lineWidth = 1
        context.stroke()
      })
    }

    const paths = makePaths()

    context.fillStyle = 'white'
    context.fillRect(0, 0, WIDTH, WIDTH)

    context.save()
    context.translate(0, WIDTH / 2 - BAND_WIDTH / 2)
    drawBand()
    context.restore()

    context.save()
    context.translate(WIDTH / 2 + BAND_WIDTH / 2, 0)
    context.rotate(Math.PI / 2)
    drawBand()
    context.restore()

    const offset = Math.sqrt(BAND_WIDTH * BAND_WIDTH / 2) / 2
    context.translate(-offset, WIDTH - offset)
    context.rotate(Math.PI / -4)
    drawBand()
  }

  render () {
    return (
      <Layout>
        <div>
          <h2 style={{ textAlign: 'center' }}>
            [Sol LeWitt] Wall Drawing #16 (1969)
          </h2>

          <div className={styles.art}>
            <canvas
              ref={this.canvas}
              width={WIDTH}
              height={WIDTH}
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
            Bands of lines 12 inches (30 cm) wide,<br />
            in three directions (vertical, horizontal, diagonal right) intersecting.<br /><br />
            세 가지 방향(수직, 수평, 우대각)으로 교차하는 30cm 폭의 줄무늬 띠.
          </blockquote>

          <p>
            폭이 무작위로 정해지는 세 개의 줄무의 띠들이 벽면 정중앙에서 교차하도록 했다.
          </p>
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

export default Sol16
