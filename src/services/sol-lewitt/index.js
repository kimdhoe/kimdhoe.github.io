import sol87 from './sol-87.png'
import sol56 from './sol-56.png'
import sol51 from './sol-51.png'
import sol49 from './sol-49.png'
import sol46 from './sol-46.png'
import sol45 from './sol-45.png'
import sol17 from './sol-17.png'
import sol16 from './sol-16.png'
import sol11 from './sol-11.png'
import sol118 from './sol-118.png'

const TYPES = {
  WALL_DRAWING: 'wall drawing',
}

const works = [
  { number:  87, type: TYPES.WALL_DRAWING, image:  sol87, createdAt: 'Jan 11, 2019', year: 1971 },
  { number:  56, type: TYPES.WALL_DRAWING, image:  sol56, createdAt: 'Jan 10, 2019', year: 1970 },
  { number:  51, type: TYPES.WALL_DRAWING, image:  sol51, createdAt: 'Jan 9, 2019',  year: 1970 },
  { number:  49, type: TYPES.WALL_DRAWING, image:  sol49, createdAt: 'Jan 8, 2019',  year: 1970 },
  { number:  46, type: TYPES.WALL_DRAWING, image:  sol46, createdAt: 'Jan 7, 2019',  year: 1970 },
  { number:  45, type: TYPES.WALL_DRAWING, image:  sol45, createdAt: 'Jan 6, 2019',  year: 1970 },
  { number:  17, type: TYPES.WALL_DRAWING, image:  sol17, createdAt: 'Jan 4, 2019',  year: 1969 },
  { number:  16, type: TYPES.WALL_DRAWING, image:  sol16, createdAt: 'Jan 3, 2019',  year: 1969 },
  { number:  11, type: TYPES.WALL_DRAWING, image:  sol11, createdAt: 'Jan 2, 2019',  year: 1969 },
  { number: 118, type: TYPES.WALL_DRAWING, image: sol118, createdAt: 'Jan 1, 2019',  year: 1971 },
]

export {
  works,
}
