import React from 'react'
import { css } from 'glamor'

import Layout from '../../components/layout'

const LINE_SPACING = 4
const LINE_WIDTH = 1
const WIDTH = 512

class Sol17 extends React.Component {
  canvas = React.createRef()

  componentDidMount () {
    const canvas = this.canvas.current
    const context = canvas.getContext('2d')


    const a = Math.sqrt(2 * Math.pow(WIDTH, 2)) / 2

    context.fillStyle = 'white'
    context.fillRect(0, 0, WIDTH, WIDTH)

    context.save()
    context.translate(WIDTH / 2, WIDTH / -2)
    context.rotate(Math.PI / 4)
    drawSquare(context, a)
    context.restore()

    context.save()
    context.translate(0, WIDTH)
    context.rotate(Math.PI / -4)
    drawSquare(context, a)
    context.restore()

    context.save()
    context.translate(WIDTH / 2, WIDTH / 2)
    context.rotate(Math.PI / -4)
    drawSquareDiagonal(context, a)
    context.restore()


    context.save()
    drawSquareDiagonal2(context, a)
    context.restore()
  }

  render () {
    return (
      <Layout>
        <div>
          <h2 style={{ textAlign: 'center' }}>
            [Sol LeWitt] Wall Drawing #17 (1969)
          </h2>

          <div className={styles.art}>
            <canvas
              ref={this.canvas}
              width={WIDTH}
              height={WIDTH}
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
            Four-part drawing with a different line direction in each part.<br /><br />
            각기 다른 방향의 선을 가진 네 부분으로 이루어진 드로잉.
          </blockquote>

          <p>
            정사각형의 벽면에 대각선 두 개를 그어 사등분한 후 선을 그려넣었다.
          </p>
        </div>
      </Layout>
    )
  }
}

const drawSquare = (context, width) => {
  const paths = []

  for (let x = 0; x <= width; x += LINE_SPACING) {
    paths.push([
      { x, y: 0 },
      { x, y: width },
    ])
  }

  paths.forEach(([ a, b ]) => {
    context.beginPath()
    context.moveTo(a.x, a.y)
    context.lineTo(b.x, b.y)
    context.strokeStyle = '#777'
    context.lineWidth = LINE_WIDTH
    context.stroke()
  })
}

const drawSquareDiagonal = (context, width) => {
  const paths = []
  const spacing = LINE_SPACING / Math.cos(Math.PI / 4)

  for (let x = 0; x <= width; x += spacing) {
    paths.push([
      { x, y: 0 },
      { x: 0, y: x },
    ])
  }

  paths.forEach(([ a, b ]) => {
    context.beginPath()
    context.moveTo(a.x, a.y)
    context.lineTo(b.x, b.y)
    context.strokeStyle = '#777'
    context.lineWidth = LINE_WIDTH
    context.stroke()
  })
}

const drawSquareDiagonal2 = (context, width) => {
  const paths = []
  const diagonal = 2 * Math.sqrt(Math.pow(width, 2) / 2)

  for (let x = 0; x <= diagonal; x += LINE_SPACING) {
    let x1 = x

    if (x > diagonal / 2) {
      x1 = diagonal - x
    }

    paths.push([
      { x: 0, y: x },
      { x: x1, y: x },
    ])
  }

  paths.forEach(([ a, b ]) => {
    context.beginPath()
    context.moveTo(a.x, a.y)
    context.lineTo(b.x, b.y)
    context.strokeStyle = '#777'
    context.lineWidth = LINE_WIDTH
    context.stroke()
  })
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

export default Sol17
