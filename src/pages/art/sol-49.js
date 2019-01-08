import React from 'react'
import { css } from 'glamor'
import random from 'canvas-sketch-util/random'

import Layout from '../../components/layout'

const PALETTE = [
  '#343a40',
  '#e03131',
  '#9c36b5',
  '#3b5bdb',
  '#0c8599',
  '#099268',
  '#f08c00',
]

class Sol49 extends React.Component {
  canvas = React.createRef()

  state = {
    width: 0,
    height: 0,
  }

  componentDidMount () {
    const width = random.rangeFloor(400, 600)
    const height = random.rangeFloor(300, 500)

    const partWidth = width / 15
    const spacing = partWidth / 7
    const palette = random.shuffle(PALETTE)
    const drawFns = random.shuffle([ drawVertical, drawHorizontal, drawRightDiagonal, drawLeftDiagonal ])
    const sets = powerSet([ 0, 1, 2, 3 ]).filter(s => s.length).sort((a, b) => a.length - b.length)


    this.setState({ width, height }, () => {
      const canvas = this.canvas.current
      const context = canvas.getContext('2d')

      context.fillStyle = 'white'
      context.fillRect(0, 0, width, height)
      context.beginPath()
      context.moveTo(0, 0)
      context.lineTo(width, 0)
      context.lineTo(width, height)
      context.lineTo(0, height)
      context.lineTo(0, 0)
      context.lineWidth = 0.9
      context.strokeStyle = '#777'
      context.stroke()

      sets.forEach((set, i) => {
        set.forEach(v => {
          const draw = drawFns[v]
          draw(context, palette[v], spacing, i * partWidth, 0, (i + 1) * partWidth, height)
        })
      })
    })
  }

  render () {
    const { width, height } = this.state

    return (
      <Layout>
        <div>
          <h2 style={{ textAlign: 'center' }}>
            [Sol LeWitt] Wall Drawing #49 (1970)
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
            A wall divided equally into fifteen equal parts, each with a different line direction and color, and all combinations.<br /><br />
            Red, Yellow, Blue, Black pencil<br />
          </blockquote>
        </div>
      </Layout>
    )
  }
}

const drawVertical = (context, color, spacing, x0, y0, x1, y1) => {
  for (let x = x0; x <= x1; x += spacing) {
    context.beginPath()
    context.moveTo(x, y0)
    context.lineTo(x, y1)
    context.lineWidth = 0.7
    context.strokeStyle = color
    context.stroke()
  }
}

const drawHorizontal = (context, color, spacing, x0, y0, x1, y1) => {
  for (let y = y0; y <= y1; y += spacing) {
    context.beginPath()
    context.moveTo(x0, y)
    context.lineTo(x1, y)
    context.lineWidth = 0.7
    context.strokeStyle = color
    context.stroke()
  }
}

const drawRightDiagonal = (context, color, spacing, x0, y0, x1, y1) => {
  const h = x1 - x0
  const gap = Math.sqrt(2 * spacing * spacing)

  for (let y = y0; y <= y1 + h; y += gap) {
    context.beginPath()
    context.moveTo(x0, y)
    context.lineTo(x1, y - h)
    context.lineWidth = 0.7
    context.strokeStyle = color
    context.stroke()
  }
}

const drawLeftDiagonal = (context, color, spacing, x0, y0, x1, y1) => {
  const h = x1 - x0
  const gap = Math.sqrt(2 * spacing * spacing)

  for (let y = y0 - h; y <= y1; y += gap) {
    context.beginPath()
    context.moveTo(x0, y)
    context.lineTo(x1, y + h)
    context.lineWidth = 0.7
    context.strokeStyle = color
    context.stroke()
  }
}

const powerSet = set =>
  set.reduce(
    (subsets, x) => [
      ...subsets,
      ...subsets.map(subset => [ x, ...subset ])
    ],
    [ [] ],
  )


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

export default Sol49
