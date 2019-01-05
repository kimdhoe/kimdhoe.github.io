import React from 'react'
import { css } from 'glamor'
import random from 'canvas-sketch-util/random'
import palettes from 'nice-color-palettes/1000.json'

import Layout from '../../components/layout'

// A Point is an object: { x: number
//                       , y: number
//                       }

// A Path is an array: [ Point, Point ]

// Given x and y coordinates, produces a point.
const point = (x, y) => ({ x, y })

// Given 2 points, produces a path, which is a tuple of 2 points.
const path = (a, b) => ([ a, b ])

const getPaths = (width, height, angle) => {
  const paths = []
  const lineSpacing = random.rangeFloor(11, 15)
  const lineSpacingVertical = lineSpacing * Math.tan(angle)

  let bY
  let aX
  let aY

  // Draw a right triangle (top)
  for (let x = 1; x <= width; x += lineSpacing) {
    bY = x * Math.tan(angle)
    const a = point(x, 0)
    const b = point(0, bY)
    const aPath = path(a, b)
    aX = x

    paths.push(aPath)
  }

  // Draw a parallelogram (middle)
  const topTriangleHeight = width * Math.tan(angle)
  for (let y = bY + lineSpacingVertical; y <= height; y += lineSpacingVertical) {
    aY = y - topTriangleHeight
    const a = point(width, aY)
    const b = point(0, y)
    const aPath = path(a, b)

    paths.push(aPath)
  }

  if (!aY) {
    // aY = height - bY - lineSpacingVertical
    aY = (width - aX) / Math.tan(angle)
  }

  // Draw a right triangle (bottom)
  for (let y = aY + lineSpacingVertical; y <= height; y += lineSpacingVertical) {
    const a = point(width, y)
    const b = point(width - (height - y) / Math.tan(angle), height)
    const aPath = path(a, b)

    paths.push(aPath)
  }

  return paths
}

const draw = (context, width, height, angle) => {
  const colors = random.pick(palettes)
  const paths = getPaths(width, height, angle)

  context.fillStyle = 'white'
  context.fillRect(0, 0, width, height)
  paths.forEach(([ a, b ]) => {
    context.beginPath()
    context.moveTo(a.x, a.y)
    context.lineTo(b.x, b.y)
    context.strokeStyle = random.pick(colors)
    context.lineWidth = 0.7
    context.stroke()
  })
}

class Art20190105 extends React.Component {
  canvas = React.createRef()

  state = {
    width: 0,
    height: 0,
  }


  componentDidMount () {
    const canvas = this.canvas.current
    const context = canvas.getContext('2d')
    const width = random.rangeFloor(400, 550)
    const height = random.rangeFloor(300, 500)
    const minAngle = 0.09 * Math.PI
    const maxAngle = Math.atan(height / width)
    const angle = random.range(minAngle, maxAngle)

    this.setState({ width , height }, () => {
      draw(context, width, height, angle)
    })
  }

  render () {
    return (
      <Layout>
        <div>
          <h2 style={{ textAlign: 'center' }}>
            Wall Drawing
          </h2>

          <div className={styles.art}>
            <canvas
              ref={this.canvas}
              width={this.state.width}
              height={this.state.height}
            />
          </div>

          <div className={styles.labelWrapper}>
            <div className={styles.label}>
              <p className={styles.artist}>
                Kimdhoe
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
            {/*이 작품에 대한 솔 르윗의 지시사항은 다음과 같다.*/}
          </p>

          <blockquote className={styles.instructionContent}>
            Draw straight right-diagonal lines.<br /><br />
            우상향하는 대각선으로 벽면 채우기<br /><br />
            조건: 보이지 않는 연장선은 없어야 한다. 즉 캔버스보다 큰 사각형을 그린 뒤 회전시키지 말 것.
          </blockquote>

          <p>
            임의의 사각형 틀 안에 임의의 각도를 갖는 대각선을 채워넣는 단순한 일이 예상보다 많은 생각을 필요로 헀다.
            캔버스보다 큰 정사각형을 그린 뒤 원하는 모양이 나오도록 회전시키는 방법은 조건을 충족하기 위해 제외했다.
            영역을 세 부분으로 나누어 제일 위에 직각삼각형, 중간에 평행사변형, 제일 아래에 직각삼각형을 그리는 방식으로 사각형을 채웠다.
          </p>
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

export default Art20190105
