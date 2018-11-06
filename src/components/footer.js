import React from 'react'
import { Link } from 'gatsby'
import { css } from 'glamor'

export default () => (
  <footer className={__Footer}>
    <p>
      <small>
        <a className={__Footer_emailLink} href="mailto:kimdhoe1@gmail.com">
          kimdhoe1@gmail.com
        </a>
      </small>
    </p>
  </footer>
)

const __Footer =  css({
  marginTop: '4em',
  textAlign: 'center',
})

const __Footer_emailLink = css({
  letterSpacing: '0.7px',
  fontFamily: 'Georgia',
  fontStyle: 'italic',
  textDecoration: 'none',
  color: '#777',
})
