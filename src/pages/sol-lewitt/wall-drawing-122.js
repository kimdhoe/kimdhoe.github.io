import React from 'react'
import { css } from 'glamor'
import random from 'canvas-sketch-util/random'

import Layout from '../../components/layout'

const LINE_WIDTH = 2

class Sol122 extends React.Component {
  canvas = React.createRef()

  state = {
    width: 0,
    height: 0,
  }

  componentDidMount () {
    const width = 500
    const height = 500

    this.setState({ width, height }, () => {
      const canvas = this.canvas.current
      const context = canvas.getContext('2d')

      context.fillStyle = 'white'
      context.fillRect(0, 0, width, width)

      const t = 11

      const cellWidth = width / t
      const cellHeight = height /t

      for (let i = 0; i < t; i++) {
        for (let j = 0; j < t; j++) {
          drawCell1(context, cellWidth * i, cellHeight * j, cellWidth * (i + 1), cellHeight * (j + 1), true)
        }
      }
    })
  }

  render () {
    const { width, height } = this.state

    return (
      <Layout>
        <div>
          <h2 style={{ textAlign: 'center' }}>
            [Sol LeWitt] Wall Drawing #122 (1972)
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

          <blockquote className={styles.instructionContent}>
            All combinations of two lines crossing, placed at random, using arcs from corners and sides, straight, not straight and broken lines.
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

const drawCell1 = (context, ax, ay, bx, by, arc) => {
  const rotate = random.rangeFloor(0, 4)
  const centerX = ax + (bx - ax) / 2
  const centerY = ay + (by - ay) / 2

  context.save()

  context.translate(ax + (bx - ax) / 2, ay + (by - ay) / 2)
  context.rotate(rotate * Math.PI / 2)
  context.translate(-(ax + (bx - ax) / 2), -(ay + (by - ay) / 2))

  context.translate(-(bx - ax) / 2, (bx - ax) / 2)
  context.beginPath()
  context.arc(centerX, centerY, bx - ax, Math.PI * -0.5, 0)
  context.lineWidth = LINE_WIDTH
  context.lineCap = 'round'
  context.strokeStyle = 'black'
  context.stroke()
  context.translate(-(-(bx - ax) / 2), -(bx - ax) / 2)

  const f = random.pick([
    drawRightDiagonal,
    drawHorizontal,
    drawVertical,
    drawBrokenLine,
    drawNotStraightLine,
  ])

  f(context, ax, ay, bx, by)

  context.restore()
}

const drawNotStraightLine = (context, ax, ay, bx, by) => {
  const center = {
    x: (ax + bx) / 2,
    y: (ay + by) / 2,
  }

  context.beginPath()
  context.moveTo(bx, ay)

  context.quadraticCurveTo(center.x, ay, center.x, center.y)
  context.quadraticCurveTo(center.x, by, ax, by)
  context.lineWidth = LINE_WIDTH
  context.lineCap = 'round'
  context.strokeStyle = 'black'
  context.stroke()
}

const drawBrokenLine = (context, ax, ay, bx, by) => {
  const f = random.pick([
    drawBrokenLine1,
    drawBrokenLine2,
    drawBrokenLine3,
  ])

  f(context, ax, ay, bx, by)
}

const drawBrokenLine1 = (context, ax, ay, bx, by) => {
  context.beginPath()
  context.moveTo(bx, ay)
  context.lineTo(bx - (bx - ax) / 3, by - (by - ay) / 3)
  context.lineTo(ax, by)
  context.strokeStyle = 'black'
  context.lineWidth = LINE_WIDTH
  context.lineCap = 'round'
  context.stroke()
}
const drawBrokenLine2 = (context, ax, ay, bx, by) => {
  context.beginPath()
  context.moveTo(bx, ay)
  context.lineTo(ax + (bx - ax) / 3, ay + (by - ay) / 3)
  context.lineTo(ax, by)
  context.strokeStyle = 'black'
  context.lineWidth = LINE_WIDTH
  context.lineCap = 'round'
  context.stroke()
}
const drawBrokenLine3 = (context, ax, ay, bx, by) => {
  context.beginPath()
  context.moveTo(ax, (by + ay) / 2)
  context.lineTo((bx + ax) / 2, (by + ay) / 2)
  context.lineTo(bx, ay)
  context.strokeStyle = 'black'
  context.lineWidth = LINE_WIDTH
  context.lineCap = 'round'
  context.stroke()
}

const drawRightDiagonal = (context, ax, ay, bx, by) => {
  context.beginPath()
  context.moveTo(bx, ay)
  context.lineTo(ax, by)
  context.strokeStyle = 'black'
  context.lineWidth = LINE_WIDTH
  context.lineCap = 'round'
  context.stroke()
}

const drawHorizontal = (context, ax, ay, bx, by) => {
  context.beginPath()
  context.moveTo(ax, (by + ay) / 2)
  context.lineTo(bx, (by + ay) / 2)
  context.lineWidth = LINE_WIDTH
  context.lineCap = 'round'
  context.strokeStyle = 'black'
  context.stroke()
}

const drawVertical = (context, ax, ay, bx, by) => {
  context.beginPath()
  context.moveTo((bx + ax) / 2, ay)
  context.lineTo((bx + ax) / 2, by)
  context.lineWidth = LINE_WIDTH
  context.lineCap = 'round'
  context.strokeStyle = 'black'
  context.stroke()
}

export default Sol122
