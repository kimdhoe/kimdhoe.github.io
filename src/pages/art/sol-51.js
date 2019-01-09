import React from 'react'
import { css } from 'glamor'
import random from 'canvas-sketch-util/random'

import Layout from '../../components/layout'

class Sol51 extends React.Component {
  canvas = React.createRef()

  state = {
    width: 0,
    height: 0,
  }

  componentDidMount () {
    const width = random.rangeFloor(400, 600)
    const height = random.rangeFloor(300, 500)
    const windows = getWindows(width, height, 20)
    const points = findAllPoints(windows, width, height)


    this.setState({ width, height }, () => {
      const canvas = this.canvas.current
      const context = canvas.getContext('2d')

      context.fillStyle = 'white'
      context.fillRect(0, 0, width, height)

      connectPoints(context, points)
      drawRects(context, windows)
    })
  }

  render () {
    const { width, height } = this.state

    return (
      <Layout>
        <div>
          <h2 style={{ textAlign: 'center' }}>
            [Sol LeWitt] Wall Drawing #51 (1970)
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

          {/*<p className={styles.paragraph}>*/}
          {/*이 작품에 대한 솔 르윗의 지시사항은 다음과 같다.*/}
          {/*</p>*/}

          <blockquote className={styles.instructionContent}>
            All architectural points connected by straight lines.<br /><br />
            Blue snap lines<br /><br />

            모든 건축학상 점들을 파란 직선으로 이을 것.
          </blockquote>

          <p>
            점들을 만들기 위해 창문 역할을 하는 사각형을 최대 세 개까지 무작위로 배치했다.
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

const findAllPoints = (windows, width, height) => {
  return [
    ...windows.reduce(
      (acc, ps) => [ ...acc, ...ps ],
      [],
    ),
    { x: 0, y: 0 },
    { x: width, y: 0 },
    { x: width, y: height },
    { x: 0, y: height },
  ]
}

const connectPoints = (context, points) => {
  points.forEach(p => {
    points.forEach(q => {
      context.beginPath()
      context.moveTo(p.x, p.y)
      context.lineTo(q.x, q.y)
      context.lineWidth = 0.5
      context.strokeStyle = '#1971c2'
      context.stroke()
    })
  })
}

const drawRects = (context, rects) => {
  rects.forEach(([ p1, p2, p3, p4 ]) => {
    context.beginPath()
    context.moveTo(p1.x, p1.y)
    context.lineTo(p2.x, p2.y)
    context.lineTo(p3.x, p3.y)
    context.lineTo(p4.x, p4.y)
    context.lineTo(p1.x, p1.y)
    context.lineWidth = 2
    context.strokeStyle = '#111'
    context.stroke()
    context.fill()
  })
}

const getWindows = (width, height, margin) => {
  const windows = []

  for (let i = 0; i < 3; i++) {
    const windowWidth = random.rangeFloor(width / 6, width / 4)
    const windowHeight = random.rangeFloor(height / 6, height / 4)
    const a = {
      x: random.rangeFloor(margin, width - windowWidth - margin),
      y: random.rangeFloor(margin, height - windowHeight - margin),
    }
    const b = {
      x: a.x + windowWidth,
      y: a.y,
    }
    const c = {
      x: a.x + windowWidth,
      y: a.y + windowHeight,
    }
    const d = {
      x: a.x,
      y: a.y + windowHeight,
    }
    const window = [ a, b, c, d ]

    if (windows.every(w => !isCollapsing(w, window))) {
      windows.push(window)
    }
  }

  return windows
}

const isCollapsing = (r1, r2) => {
  const r1Left = r1[0].x
  const r1Right = r1[1].x
  const r2Left = r2[0].x
  const r2Right = r2[1].x
  const r1Top = r1[0].y
  const r1Bottom = r1[2].y
  const r2Top = r2[0].y
  const r2Bottom = r2[2].y

  return r1Left <= r2Right && r1Right >= r2Left && r1Top <= r2Bottom && r1Bottom >= r2Top
}

export default Sol51
