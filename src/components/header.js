import React from 'react'
import { Link } from 'gatsby'
import { css } from 'glamor'

const __Header = css({
  marginBottom: '4em',
  textAlign: 'center',
})
const __Header_heading = css({
  fontFamily: 'Georgia',
  fontStyle: 'italic',
})
const __Header_link = css({
  display: 'block',
  margin: '0.8em 0 1.424em 0',
  color: '#444',
  textDecoration: 'none',
})

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


