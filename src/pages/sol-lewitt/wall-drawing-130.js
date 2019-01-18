import React from 'react'
import { css } from 'glamor'

import Layout from '../../components/layout'

const LINE_WIDTH = 1.5
const SPACING = 25

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

      for (let x = 0; x <= width; x += SPACING) {
        context.beginPath()
        context.moveTo(x, 0)
        context.lineTo(x, height)
        context.lineWidth = LINE_WIDTH
        context.strokeStyle = 'black'
        context.stroke()
      }
      for (let y = 0; y <= height; y += SPACING) {
        context.beginPath()
        context.moveTo(0, y)
        context.lineTo(width, y)
        context.lineWidth = LINE_WIDTH
        context.strokeStyle = 'black'
        context.stroke()
      }

      drawArcs(context, width, height)

      context.save()
      context.translate(width / 2, height / 2)
      context.rotate(Math.PI / 2)
      context.translate(width / -2, height / -2)
      drawArcs(context, width, height)
      context.restore()

      context.save()
      context.translate(width / 2, height / 2)
      context.rotate(Math.PI / 2 * 2)
      context.translate(width / -2, height / -2)
      drawArcs(context, width, height)
      context.restore()

      context.save()
      context.translate(width / 2, height / 2)
      context.rotate(Math.PI / 2 * 3)
      context.translate(width / -2, height / -2)
      drawArcs(context, width, height)
      context.restore()
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
            Grid and arcs from four corners.
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

const drawArcs = (context, width, height) => {
  const longer = Math.max(width, height)
  const length = Math.sqrt(2 * longer * longer)

  for (let x = 0; x <= length; x += SPACING) {
    context.beginPath()
    context.arc(0, 0, x, Math.PI / -2, Math.PI / 2)
    context.lineWidth = LINE_WIDTH
    context.strokeStyle = 'black'
    context.stroke()
  }
}

export default Sol122
