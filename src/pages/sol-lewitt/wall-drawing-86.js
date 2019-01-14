import React from 'react'
import { css } from 'glamor'
import random from 'canvas-sketch-util/random'

import Layout from '../../components/layout'

const LENGTH = 120

class Sol86 extends React.Component {
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

      const paths = getPaths(width, height)

      paths.forEach(([ a, b ]) => {
        context.beginPath()
        context.moveTo(a.x, a.y)
        context.lineTo(b.x, b.y)
        context.lineWidth = 2
        context.strokeStyle = 'black'
        context.stroke()
      })
    })
  }

  render () {
    const { width, height } = this.state

    return (
      <Layout>
        <div>
          <h2 style={{ textAlign: 'center' }}>
            [Sol LeWitt] Wall Drawing #86 (1971)
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
            Ten thousand lines about 10 inches (25 cm) long, covering the wall evenly.
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

const getPaths = (width, height) => {
  const paths = []

  for (let i = 0; i < 1000; i++) {
    const a = {
      x: random.rangeFloor(0, width + 1),
      y: random.rangeFloor(0, height + 1),
    }
    let b = {
      x: -1,
      y: -1,
    }
    while (!(b.x >= 0 && b.x <= width && b.y >= 0 && b.y <= height)) {
      const theta = 2 * Math.PI * random.range(0, 1)
      const dx = LENGTH * Math.cos(theta)
      const dy = LENGTH * Math.sin(theta)
      b.x = a.x + dx
      b.y = a.y + dy
    }

    paths.push([ a, b ])
  }

  return paths
}

export default Sol86
