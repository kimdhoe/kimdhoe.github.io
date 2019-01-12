import React from 'react'
import { css } from 'glamor'
import random from 'canvas-sketch-util/random'
import palettes from 'nice-color-palettes'

import Layout from '../../components/layout'

class Sol65 extends React.Component {
  canvas = React.createRef()

  state = {
    width: 0,
    height: 0,
  }

  componentDidMount () {
    const width = random.rangeFloor(500, 600)
    const height = random.rangeFloor(450, 550)

    this.setState({ width, height }, () => {
      const canvas = this.canvas.current
      const context = canvas.getContext('2d')

      context.fillStyle = 'white'
      context.fillRect(0, 0, width, height)

      for (let i = 0; i < 500; i++) {
        drawRandomPath(context, width, height)
      }
    })
  }

  render () {
    const { width, height } = this.state

    return (
      <Layout>
        <div>
          <h2 style={{ textAlign: 'center' }}>
            [Sol LeWitt] Wall Drawing #65 (1971)
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
            Lines not short, not straight, crossing and touching,drawn at random,<br />
            using four colors, uniformly dispersed with maximum density,<br />
            covering the entire surface of the wall.<br />
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

const drawRandomPath = (context, width, height) => {
  const [ a, b, c ] = getRandomPath(width, height)
  const color = random.pick(random.pick(palettes))

  context.beginPath()
  context.moveTo(a.x, a.y)
  context.quadraticCurveTo(b.x, b.y, c.x, c.y)
  context.lineWidth = 1
  context.strokeStyle = color
  context.stroke()
}

const getRandomPath = (width, height) => {
  const [ side1, side2 ] = random.shuffle([ 1, 2, 3, 4 ])
  const a = getRandomPoint(width, height, side1)
  const b = getRandomPoint(width, height, 0)
  const c = getRandomPoint(width, height, side2)

  return [ a, b, c ]
}

const getRandomPoint = (width, height, side) => {
  let x
  let y

  if (side === 1) {
    x = random.rangeFloor(0, width)
    y = 0
  } else if (side === 2) {
    x = width
    y = random.rangeFloor(0, height)
  } else if (side === 3) {
    x = random.rangeFloor(0, width)
    y = height
  } else if (side === 4) {
    x = 0
    y = random.rangeFloor(0, height)
  } else if (side === 0) {
    x = random.rangeFloor(0, width)
    y = random.rangeFloor(0, height)
  }

  return { x, y }
}

export default Sol65
