import React from 'react'
import { css } from 'glamor'
import random from 'canvas-sketch-util/random'

import Layout from '../../components/layout'

const gridCount = 6
const lineWidth = 2.2
const palette = [ '#c92a2a', '#e67700', '#1864ab' ]

class Sol91 extends React.Component {
  canvas = React.createRef()

  state = {
    width: 0,
    height: 0,
  }

  componentDidMount () {
    const width = 500
    const height = 400

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
          context.strokeStyle = '#ddd'
          context.lineWidth = lineWidth * 0.4
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
            [Sol LeWitt] Wall Drawing #91 (1971)
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
            A six-inch (15 cm) grid covering the wall.<br />
            Within each square, not straight lines from side to side, using red, yellow and blue pencils.<br />
            Each square contains at least one line of each color.
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
  palette.forEach(color => {
    drawRandomLine(context, ax, ay, bx, by, color)
  })

  const t = random.rangeFloor(0, 11)

  for (let i = 0; i < t; i++) {
    const c = random.pick(palette)
    drawRandomLine(context, ax, ay, bx, by, c)
  }
}

const drawRandomLine = (context, ax, ay, bx, by, color) => {
  const isHorizontal = random.pick([ true, false ])
  const control = {
    x: random.range(ax, bx),
    y: random.range(ay, by),
  }
  let start = null
  let end = null

  if (isHorizontal) {
    start = {
      x: ax,
      y: random.range(ay, by),
    }
    end = {
      x: bx,
      y: random.range(ay, by),
    }
  } else {
    start = {
      x: random.range(ax, bx),
      y: ay,
    }
    end = {
      x: random.range(ax, bx),
      y: by,
    }
  }

  context.beginPath()
  context.moveTo(start.x, start.y)
  context.quadraticCurveTo(control.x, control.y, end.x, end.y)
  context.strokeStyle = color
  context.lineWidth = lineWidth
  context.stroke()
}

export default Sol91
