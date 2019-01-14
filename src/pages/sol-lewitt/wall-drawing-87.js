import React from 'react'
import { css } from 'glamor'
import random from 'canvas-sketch-util/random'
import palettes from 'nice-color-palettes'

import Layout from '../../components/layout'

class Sol87 extends React.Component {
  canvas = React.createRef()

  state = {
    width: 0,
  }

  componentDidMount () {
    const width = 600

    this.setState({ width }, () => {
      const canvas = this.canvas.current
      const context = canvas.getContext('2d')

      context.fillStyle = 'white'
      context.fillRect(0, 0, width, width)

      const [ draw1, draw2 ] = random.shuffle([ _draw1, _draw2 ])
      const [ color1, color2, color3, color4 ] = random.pick(palettes)

      draw1(context, width / 2, color1)

      context.save()
      context.translate(width / 2, 0)
      draw1(context, width / 2, color1)
      context.restore()

      context.save()
      context.translate(0, width / 2)
      draw1(context, width / 2, color1)
      context.restore()

      context.save()
      context.translate(width / 2, width / 2)
      draw1(context, width / 2, color1)
      context.restore()

      context.save()
      context.translate(width, 0)
      context.rotate(Math.PI / 2)
      draw1(context, width / 2, color2)
      context.restore()

      context.save()
      context.translate(width / 2, width / 2)
      context.rotate(Math.PI / 2)
      draw1(context, width / 2, color2)
      context.restore()

      context.save()
      context.translate(width, width / 2)
      context.rotate(Math.PI / 2)
      draw1(context, width / 2, color2)
      context.restore()

      context.save()
      context.translate(0, width / 2)
      draw2(context, width / 2, color3)
      context.restore()
      context.save()
      context.translate(width / 2, width / 2)
      draw2(context, width / 2, color3)
      context.restore()

      context.save()
      context.translate(width, width / 2)
      context.rotate(Math.PI / 2)
      draw2(context, width / 2, color4)
      context.restore()
    })
  }

  render () {
    const { width } = this.state

    return (
      <Layout>
        <div>
          <h2 style={{ textAlign: 'center' }}>
            [Sol LeWitt] Wall Drawing #87 (1971)
          </h2>

          <div className={styles.art}>
            <canvas
              ref={this.canvas}
              width={width}
              height={width}
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
            A square divided horizontally and vertically into four equal parts,<br />
            each with lines and colors in four directions superimposed progressively.<br />
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

const _draw1 = (context, width, color) => {
  const spacing = width / 40

  for (let y = 0; y <= width; y += spacing) {
    const a = { x: 0, y }
    const b = { x: width, y }
    context.beginPath(0)
    context.moveTo(a.x, a.y)
    context.lineTo(b.x, b.y)
    context.strokeStyle = color
    context.lineWidth = 0.7
    context.stroke()
  }
}

const _draw2 = (context, width, color) => {
  const spacing = width / 40

  for (let x = 0; x <= width; x += spacing) {
    const a = { x, y: 0 }
    const b = { x: 0, y: x }
    context.beginPath()
    context.moveTo(a.x, a.y)
    context.lineTo(b.x, b.y)
    context.strokeStyle = color
    context.lineWidth = 0.7
    context.stroke()
  }
  for (let x = spacing; x <= width; x += spacing) {
    const a = { x, y: width }
    const b = { x: width, y: x }
    context.beginPath()
    context.moveTo(a.x, a.y)
    context.lineTo(b.x, b.y)
    context.strokeStyle = color
    context.lineWidth = 0.7
    context.stroke()
  }
}


export default Sol87
