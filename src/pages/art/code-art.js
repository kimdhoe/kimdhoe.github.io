import React from 'react'
import canvasSketch from 'canvas-sketch'
import random from 'canvas-sketch-util/random'
import { lerp } from 'canvas-sketch-util/math'
import palettes from 'nice-color-palettes/1000.json'

import Layout from '../../components/layout'

// A Point is an object: { x: number
//                       , y: number
//                       }
//   - x and y represent x / y coordinates respectively.

// A Grid is a Point[].

// A Shape is an object: { color:    string
//                       , path:     Path[]
//                       , averageY: number
//                       }

// A Path is a tuple: [ Point, Point, Point, Point ]
//   - bottom left, top left, top right, bottom right

const COUNT = 6
const MARGIN = 0
const LINE_WIDTH = 10

// makeGrid :: number * number * number * number -> Grid
// Given a row/column count, horizontal/vertical margin, width and height,
// produces a grid.
const makeGrid = ({ count, margin, width, height }) => {
	const points = []

	for (let x = 0; x < count; x++) {
		for (let y = 0; y < count; y++) {
			const u = x / (count - 1)
			const v = y / (count - 1)
			const px = lerp(margin, width - margin, u)
			const py = lerp(margin, height - margin, v)

			points.push({
				x: px,
				y: py,
			})
		}
	}

	return points
}

// getShapes :: Grid * number -> Shape[]
// effect. Given a grid data, height, margin and a palette,
// produces random shapes sorted by the average Y position.
const getShapes = (grid, height, margin, palette) => {
	const shapes = []

	let points = [ ...grid ]

	while (points.length >= 2) {
		const { y } = points[0]

		points = random.shuffle(points)
		const a = points.shift()
		const b = points.shift()

		// skip if two points are on the same y axis
		if (a.y === b.y) {
			if (points.every(point => point.y === y)) break
			continue
		}

		const bottomY = height - margin
		const shape = {
			color: random.pick(palette),
			path: [
				{
					x: a.x,
					y: bottomY,
				},
				a,
				b,
				{
					x: b.x,
					y: bottomY,
				}
			],
			averageY: (a.y + b.y) / 2,
		}

		shapes.push(shape)
	}

	shapes.sort((a, b) => a.averageY - b.averageY)

	return shapes
}


const sketch = ({ width, height }) => {
	const nColors = random.rangeFloor(1, 6)
	const palette = random.shuffle(random.pick(palettes)).slice(0, nColors)
	const points = makeGrid({
		width,
		height,
		count: COUNT,
		margin: MARGIN,
	})
	const shapes = getShapes(points, height, MARGIN, palette)

	return ({ context, width, height }) => {
		context.globalAlpha = 1
		context.fillStyle = 'white'
		context.fillRect(0, 0, width, height)

		shapes.forEach(({ path, color }) => {
			// draw lines
			context.beginPath()
			path.forEach(({ x, y }) => {
				context.lineTo(x, y)
			})
			context.closePath()

			// trapezoid with a background color
			context.globalAlpha = 0.85
			context.fillStyle = color
			context.fill()

			// outline
			context.lineWidth = LINE_WIDTH
			context.lineJoin = context.lineCap = 'round'
			context.globalAlpha = 1
			context.strokeStyle = 'white'
			context.stroke()
		})
	}
}

class Trapezoids extends React.Component {
  canvas = React.createRef()

  componentDidMount () {
    const canvas = this.canvas.current
    const context = canvas.getContext('2d')
    const width = 524
    const height = 524
    const nColors = random.rangeFloor(1, 6)
    const palette = random.shuffle(random.pick(palettes)).slice(0, nColors)
    const points = makeGrid({
      width,
      height,
      count: COUNT,
      margin: MARGIN,
    })
    const shapes = getShapes(points, height, MARGIN, palette)

    context.globalAlpha = 1
    context.fillStyle = 'white'
    context.fillRect(0, 0, width, height)

    shapes.forEach(({ path, color }) => {
      // draw lines
      context.beginPath()
      path.forEach(({ x, y }) => {
        context.lineTo(x, y)
      })
      context.closePath()

      // trapezoid with a background color
      context.globalAlpha = 0.85
      context.fillStyle = color
      context.fill()

      // outline
      context.lineWidth = LINE_WIDTH
      context.lineJoin = context.lineCap = 'round'
      context.globalAlpha = 1
      context.strokeStyle = 'white'
      context.stroke()
    })
  }

  render () {
    return (
      <Layout>
        <div>
          <h2>
            Generative art
          </h2>
          <h3 style={{ fontWeight: 400, fontSize: '1.0em', fontStyle: 'italic' }}>
            코드로 솔 르윗(Sol LeWitt) 스타일의 지시사항 해석하기
          </h3>
          <canvas
            ref={this.canvas}
            width={524}
            height={524}
          />

          <blockquote style={{ fontStyle: 'italic' }}>
            저건 나라도 그릴 수 있겠는데...
          </blockquote>

          <p>
            차마 입 밖으로 내진 않더라도 선과 면으로 이루어진 미니멀한 추상 미술작품들 앞에 서면 한번씩 뇌까려봄직한 말이다.
            아래의 이미지는 그런 생각을 개발자로서 실천에 옮겨 본 것이다.
            미리 주어진 지시사항을 Canvas API를 이용해 코드로 해석한 결과를 보이려는 것이지 어줍잖게 예술가 행세를 하려는 것은 아니니 오해는 마시라.
            재미난 프로젝트 아이디어를 소개하기 위해 남기는 글이니 시도해보시는 분은 공유 바란다.
          </p>

          <blockquote style={{ fontStyle: 'italic' }}>
            An example of a Sol LeWitt inspired "Wall Drawing" using a simple generative algorithm.
            The instructions for this mural:
            <ul>
              <li>Using a 6x6 grid of evenly spaced points</li>
              <li>Connect two random points on the grid; forming a trapezoid with two parallel sides extending down</li>
              <li>Fill the trapezoid with a colour, then stroke with the background colour</li>
              <li>Find another two random points and repeat; continuing until all grid are exhausted</li>
              <li>Layer the shapes by the average Y position of their two grid points</li>
            </ul>
          </blockquote>

          <p>
            위 지시사항은 Matt DesLauriers가 자신의 워크숍에서 사용한 연습용 예시로, 솔 르윗이라는 미국 현대작가의 스타일을 흉내낸 것이다.
          </p>

          <p>
            솔 르윗은 개념 예술과 미니멀리즘 작품으로 잘 알려진 미국의 작가이다. 이 작가의 특징은 본인이 직접 작품을 완성하는 것이 아니라 전시 장소에서 작품을 만들 수 있도록 지시사항만을 전달한다는 점이다. 예를 들면 이런 식이다.
          </p>

          <blockquote style={{ fontStyle: 'italic' }}>
            <p>
              Wall Drawing #391 (1983)
            </p>
            <p>
              Two-part drawing. The two walls are each divided horizontally and vertically into four equal parts. First wall: 12-inch (30 cm) bands of lines in four directions, one direction in each part, drawn in black India ink. Second wall: Same, but with four colors drawn in India ink and color ink washes.
            </p>
            <a href="https://solvingsol.com/solutions">
              Solving Sol
            </a>
          </blockquote>

          <p>
            프론트 개발자로서 솔 르윗이라는 작가가 유난히 반가운 것은 우리가 전시 설치 기사가 되어 시각적인 결과물을 만들어내는 연습을 하기에 최상의 자료를 제공하기 때문이다. 혹시 비슷한 생각을 가진 분이 있다면 Solving Sol을 확인하시기 바란다.
          </p>

          <p>
            단순하고 해석의 여지가 충분히 있는 지시들이기 때문에 누가 어떻게 설치하느냐에 따라 다른 작품이 나오는 재미가 있다. 혹시 코드로 해석해보는 동료 개발자가 있다면 결과물을 공유해주시면 감사하겠다.
          </p>
        </div>
      </Layout>
    )
  }
}

export default Trapezoids
