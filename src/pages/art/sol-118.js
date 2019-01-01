import React from 'react'
import { css } from 'glamor'
import random from 'canvas-sketch-util/random'
import { lerp } from 'canvas-sketch-util/math'

import Layout from '../../components/layout'

const MARGIN = 0
const ROWS = 5
const COLS = 10
const WIDTH = 524
const HEIGHT = 393

class Sol118 extends React.Component {
  canvas = React.createRef()

  componentDidMount () {
    const canvas = this.canvas.current
    const context = canvas.getContext('2d')

    context.fillStyle = 'white'
    context.fillRect(0, 0, WIDTH, HEIGHT)

    const points = getPoints({
      width: WIDTH,
      height: HEIGHT,
      rows: ROWS,
      cols: COLS,
    })

    points.forEach(({ x, y }) => {
      points.forEach(point => {
        if (!(point.x === x && point.y === y)) {
          context.beginPath()
          context.moveTo(x, y)
          context.lineTo(point.x, point.y)
          context.lineWidth = random.range(0.1, 0.2)
          context.strokeStyle = '#666'
          context.stroke()
        }
      })
    })
  }

  render () {
    return (
      <Layout>
        <div>
          <h2 style={{ textAlign: 'center' }}>
            [Sol LeWitt] Wall Drawing #118 (1971)
          </h2>

          <div className={styles.art}>
            <canvas
              ref={this.canvas}
              width={WIDTH}
              height={HEIGHT}
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

          <p className={styles.instruction}>
            <blockquote className={styles.instructionContent}>
              On a wall surface, any<br />
              continuous stretch of wall,<br />
              using a hard pencil, place<br />
              fifty points at random.<br />
              The points should be evenly<br />
              distributed over the area<br />
              of the wall. All of the<br />
              points should be connected<br />
              by straight lines.<br /><br />
              연속적으로 이어져있는 벽면 위에 단단한 연필을 이용해서 쉰 개의 점을 무작위로 배치하라.<br />
              점들은 벽면 공간에 걸쳐 고르게 분포되어야 한다.<br />
              모든 점들은 직선으로 이어져야 한다.<br />
            </blockquote>
          </p>

          <p>
            <ul>
              <li>
                선들의 두께가 다 일정하지 않도록 미세하게 차이를 두었다.
              </li>
              <li>
                점들이 고르게 분포되어 보이도록 10 x 5 그리드를 만들고 각 셀 안에서 점의 위치를 무작위로 배정했다.
              </li>
            </ul>
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

const getPoints = ({ width, height, rows = 5, cols = 10 }) => {
  const points = []

  const cellWidth = (width - 2 * MARGIN) / cols
  const cellHeight = (height - 2 * MARGIN) / rows

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      const x = lerp(
        MARGIN + cellWidth * j,
        MARGIN + cellWidth * (j + 1),
        random.range(0.2, 0.8),
      )
      const y = lerp(
        MARGIN + cellHeight * i,
        MARGIN + cellHeight * (i + 1),
        random.range(0.2, 0.8),
      )

      points.push({ x, y })
    }
  }

  return points
}

export default Sol118
