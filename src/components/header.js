import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

export default ({ title, children }) => (
  <header>
    <StyledHeading>
      <StyledLink to="/">
        {title}
      </StyledLink>
    </StyledHeading>

    <StyledNav>
      <StyledUl>
        <StyledLi>
          <StyledLink to="/now">now</StyledLink>
        </StyledLi>
        <StyledLi>
          <StyledLink to="/contact">contact</StyledLink>
        </StyledLi>
      </StyledUl>
    </StyledNav>

    {children}
  </header>
)

const StyledHeading = styled.h1`
margin: 0;
text-align: center;
`

const StyledLink = styled(Link)`
font-style: normal;
text-decoration: none;
color: #333;
`

const StyledNav = styled.nav`
text-align: center;
`

const StyledUl = styled.ul`
list-style: none;
margin: 0;
padding: 0;
`

const StyledLi = styled.li`
display: inline-block;
padding: 1em;
`
