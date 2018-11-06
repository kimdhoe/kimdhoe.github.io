import React from 'react'
import { Link } from 'gatsby'
import { css } from 'glamor'

export default ({ title, children }) => (
  <header className={__Header}>
    <h1 className={__Header_heading}>
      <Link className={__Header_link} to="/">
        {title}
      </Link>
    </h1>

    {children}
  </header>
)

const __Header = css({
  position: 'relative',
  zIndex: 9,
  margin: '1em auto',
  padding: '0 1em',
  width: '100%',
  maxWidth: '960px',
})
const __Header_heading = css({
  fontFamily: 'Georgia',
  fontWeight: 400,
  fontStyle: 'italic',
})
const __Header_link = css({
  display: 'block',
  margin: '0.8em 0 1.424em 0',
  color: 'black',
  textDecoration: 'none',
})
