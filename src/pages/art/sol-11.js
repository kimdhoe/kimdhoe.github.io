import React from 'react'
import { css } from 'glamor'
import { lerp } from 'canvas-sketch-util/math'

import Layout from '../../components/layout'

const COUNT = 25
const WIDTH = 512
const HEIGHT = 512

const makePaths = ({ x0, y0, x1, y1, vertical }) => {
  const paths = []

  for (let i = 0; i < COUNT; i++) {
    const ux = i / COUNT
    const uy = (COUNT - i) / COUNT
    const ux1 = (i + 1) / COUNT
    const uy1 = (COUNT - i - 1) / COUNT

    if (vertical) {
      paths.push([
        {
          x: lerp(x0, x1, (i + 1) / COUNT),
          y: y0,
        },
        {
          x: lerp(x0, x1, (i + 1) / COUNT),
          y: y1,
        },
      ])
    } else {
      paths.push([
        {
          x: x0,
          y: lerp(y0, y1, (i + 1) / COUNT),
        },
        {
          x: x1,
          y: lerp(y0, y1, (i + 1) / COUNT),
        },
      ])
    }

    paths.push([
      {
        x: lerp(x0, x1, ux),
        y: y0,
      },
      {
        x: x1,
        y: lerp(y0, y1, uy),
      },
    ])
    paths.push([
      {
        x: x0,
        y: lerp(y0, y1, ux1),
      },
      {
        x: lerp(x0, x1, uy1),
        y: y1,
      },
    ])
    paths.push([
      {
        x: lerp(x0, x1, ux1),
        y: y0,
      },
      {
        x: x0,
        y: lerp(y0, y1, ux1),
      },
    ])
    paths.push([
      {
        x: x1,
        y: lerp(y0, y1, ux1),
      },
      {
        x: lerp(x0, x1, ux1),
        y: y1
      },
    ])
  }

  return paths
}

class Sol11 extends React.Component {
  canvas = React.createRef()

  componentDidMount () {
    const canvas = this.canvas.current
    const context = canvas.getContext('2d')

    context.fillStyle = 'white'
    context.fillRect(0, 0, WIDTH, HEIGHT)

    context.beginPath()
    context.moveTo(0, 0)
    context.lineTo(WIDTH, 0)
    context.lineTo(WIDTH, HEIGHT / 2)
    context.moveTo(0, 0)
    context.lineTo(0, HEIGHT / 2)
    context.lineTo(WIDTH / 2, HEIGHT / 2)
    context.lineTo(WIDTH / 2, HEIGHT)
    context.lineTo(WIDTH, HEIGHT)
    context.moveTo(0, WIDTH / 2)
    context.lineTo(0, HEIGHT)
    context.lineWidth = 0.7
    context.strokeStyle = '#aaa'
    context.stroke()

    const paths = []
    paths.push(...makePaths({
      x0: 0,
      y0: 0,
      x1: WIDTH / 2,
      y1: HEIGHT / 2,
      vertical: true,
    }))
    paths.push(...makePaths({
      x0: WIDTH / 2,
      y0: 0,
      x1: WIDTH,
      y1: HEIGHT / 2,
    }))
    paths.push(...makePaths({
      x0: 0,
      y0: HEIGHT / 2,
      x1: WIDTH / 2,
      y1: HEIGHT,
    }))
    paths.push(...makePaths({
      x0: WIDTH / 2,
      y0: HEIGHT / 2,
      x1: WIDTH,
      y1: HEIGHT,
      vertical: true,
    }))

    paths.forEach(([ a, b ]) => {
      context.beginPath()
      context.moveTo(a.x, a.y)
      context.lineTo(b.x, b.y)
      context.stroke()
    })

  }

  render () {
    return (
      <Layout>
        <div>
          <h2 style={{ textAlign: 'center' }}>
            [Sol Lewitt] Wall Drawing #11 (1969)
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
              A wall divided horizontally and vertically into four equal parts.<br />
              Within each part, three of the four kinds of lines are superimposed.<br /><br />
              가로/세로로 똑같이 사등분된 벽.<br />
              각 영역 안에 네 종류 중 세 개의 선들이 중첩되어 그려진다.<br />
            </blockquote>
          </p>

          <p>
            모든 영역에 동일하게 수직으로 교차하는 대각선 직선을 그리고, 각 면이 인접한 면들과 구분되도록 수직 혹은 수평선을 그렸다.
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

export default Sol11
