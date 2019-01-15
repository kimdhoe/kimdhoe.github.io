import React from 'react'
import { css } from 'glamor'
import random from 'canvas-sketch-util/random'

import Layout from '../../components/layout'

const gridCount = 6
const lineWidth = 3

class Sol88 extends React.Component {
  canvas = React.createRef()

  state = {
    width: 0,
    height: 0,
  }

  componentDidMount () {
    const width = 500
    const height = 500

    this.setState({ width, height }, () => {
      const cellWidth = width / gridCount
      const cellHeight = height / gridCount

      const canvas = this.canvas.current
      const context = canvas.getContext('2d')

      context.fillStyle = 'white'
      context.fillRect(0, 0, width, width)

      for (let i = 0; i < gridCount; i++) {
        if (i) {
          context.beginPath()
          context.moveTo(0, cellHeight * i)
          context.lineTo(width, cellHeight * i)
          context.moveTo(cellWidth * i, 0)
          context.lineTo(cellWidth * i, height)
          context.strokeStyle = 'black'
          context.lineWidth = lineWidth
          context.stroke()
        }

        for (let j = 0; j < gridCount; j++) {
          drawCell(context, i * cellWidth, j * cellHeight, (i + 1) * cellWidth, (j + 1) * cellHeight)
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
            [Sol LeWitt] Wall Drawing #88 (1971)
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
            A 6-inch (15 cm) grid covering the wall.<br />
            Within each square, not straight lines in either of four directions.<br />
            Only one direction in each square but as many as desired, and at least one line in each square.
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

const drawCell = (context, ax, ay, bx, by) => {
  const f = random.pick([ draw1, draw2, draw3, draw4 ])
  f(context, ax, ay, bx, by)
}

const draw1 = (context, ax, ay, bx, by) => {
  const w = bx - ax
  const h = by - ay
  const n = random.rangeFloor(1, 6)

  drawLine(context, bx, ay, ax, by)

  if (n > 1) {
    for (let i = 1; i < n; i++) {
      drawLine(context, ax + w / n * i, ay, ax, ay + h / n * i)
      drawLine(context, bx, ay + h / n * i, ax + w / n * i, by)
    }
  }
}

const draw2 = (context, ax, ay, bx, by) => {
  context.save()
  context.translate(ax + (bx - ax), ay)
  context.rotate(Math.PI / 2)
  context.translate(-ax, -ay)
  draw1(context, ax, ay, bx, by)
  context.restore()
}

const draw3 = (context, ax, ay, bx, by) => {
  const w = bx - ax
  const h = by - ay
  const n = random.rangeFloor(1, 12)

  if (n > 1) {
    for (let i = 1; i < n; i++) {
      drawLine(context, ax, ay + h / n * i, bx, ay + w / n * i)
    }
  } else {
    drawLine(context, ax, (ay + by) / 2, bx, (ay + by) / 2)
  }
}

const draw4 = (context, ax, ay, bx, by) => {
  const w = bx - ax
  const h = by - ay
  const n = random.rangeFloor(1, 12)

  if (n > 1) {
    for (let i = 1; i < n; i++) {
      drawLine(context, ax + w / n * i, ay, ax + w / n * i, by)
    }
  } else {
    drawLine(context, (ax + bx) / 2, ay, (ax + bx) / 2, by)
  }
}

const drawLine = (context, ax, ay, bx, by) => {
  if (by > ay) {
    return drawLine(context, bx, by, ax, ay)
  }

  const w = bx - ax
  const h = by - ay
  const distance = Math.sqrt(w * w + h * h)
  const theta = Math.atan(h / w)

  context.save()
  context.translate(ax, ay)
  context.rotate(theta)
  context.translate(-ax, -ay)
  drawHorizontalLine(context, ax, ay, distance, 30)
  context.restore()
}

const drawHorizontalLine = (context, x, y, length, rhythm) => {
  const end = { x: x + length, y }

  while (length >= rhythm) {
    const a = {
      x: x + rhythm / 4,
      y: y - rhythm / 9,
    }
    const b = {
      x: x + 3 * rhythm / 4,
      y: y + rhythm / 9,
    }
    context.beginPath()
    context.moveTo(x, y)
    context.lineTo(a.x, a.y)
    context.lineTo(b.x, b.y)
    context.lineTo(x + rhythm, y)
    context.strokeStyle = 'black'
    context.lineWidth = lineWidth
    context.stroke()
    length = length - rhythm
    x = x + rhythm
  }

  context.beginPath()
  context.moveTo(x, y)
  context.lineTo(end.x, end.y)
  context.strokeStyle = 'black'
  context.lineWidth = lineWidth
  context.stroke()
}


export default Sol88
