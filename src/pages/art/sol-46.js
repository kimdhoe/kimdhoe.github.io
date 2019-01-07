import React from 'react'
import { css } from 'glamor'
import random from 'canvas-sketch-util/random'

import Layout from '../../components/layout'

class Sol46 extends React.Component {
  canvas = React.createRef()

  state = {
    width: 0,
    height: 0,
  }

  componentDidMount () {
    const width = random.rangeFloor(400, 600)
    const height = random.rangeFloor(300, 500)
    const spacing = random.rangeFloor(3, 11)

    this.setState({ width, height }, () => {
      const canvas = this.canvas.current
      const context = canvas.getContext('2d')

      const startPoints = getStartPoints(width, spacing)
      const nCurves = random.rangeFloor(5, 15)

      context.fillStyle = 'white'
      context.fillRect(0, 0, width, height)

      startPoints.forEach(point => {
        drawLine(context, point, height, nCurves)
      })
    })
  }

  render () {
    const { width, height } = this.state

    return (
      <Layout>
        <div>
          <h2 style={{ textAlign: 'center' }}>
            [Sol LeWitt] Wall Drawing #46 (1970)
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
            Vertical lines, not straight, not touching, covering the wall evenly.<br /><br />
            벽면을 고르게 덮는 서로 만나지 않고 곧지 않은 수직 방향의 선들<br />
          </blockquote>

          <p>
            간격과 형태가 무작위로 정해지는 물결 모양의 곡선
          </p>
        </div>
      </Layout>
    )
  }
}

// Given a canvas width and the distance between two points,
// produces starting points of lines.
const getStartPoints = (width, spacing) => {
  const points = []

  for (let x = spacing / 2; x <= width - (spacing / 2); x += spacing) {
    points.push({ x, y: 0 })
  }

  return points
}

// Given a canvas context, start point of a line, canvas height,
// and the number of curves in a line, draws a curved line.
//   - height: The distance between the starting point and the ending point
//   - nCurves: The number of curve segments in a whole line.
const drawLine = (context, point, height, nCurves) => {
  const curveHeight = height / nCurves
  const width = 7

  for (let i = 0; i < nCurves; i++) {
    const contextPoint = {
      x: point.x,
      y: point.y + curveHeight * i,
    }
    const controlPoint = {
      x: point.x + (i % 2 ? -width : width),
      y: point.y + curveHeight * i + curveHeight / 2,
    }
    const endingPoint = {
      x: point.x,
      y: point.y + curveHeight * (i + 1),
    }

    context.beginPath()
    context.moveTo(contextPoint.x, contextPoint.y)
    context.quadraticCurveTo(
      controlPoint.x,
      controlPoint.y,
      endingPoint.x,
      endingPoint.y,
    )
    context.lineWidth = 0.7
    context.srokeStyle = '#777'
    context.stroke()
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

export default Sol46
