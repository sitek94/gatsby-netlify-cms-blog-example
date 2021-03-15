import { graphql, useStaticQuery } from 'gatsby'
import { css } from '@emotion/react'
import styled from '@emotion/styled'

import { Query } from '../graphql-types'
import { rhythm } from '../lib/typography'

import Container from './container'
import Link from './link'

export default function Header() {
  const data: Query = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )

  return (
    <header>
      <Nav>
        <Container row>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about/">About</NavLink>
          <NavLink to="/contact/">Contact</NavLink>
        </Container>
      </Nav>
      <h3
        css={css`
          margin-bottom: ${rhythm(2)};
          display: inline-block;
          font-style: normal;
        `}
      >
        {data.site?.siteMetadata?.title}
      </h3>
    </header>
  )
}

const Nav = styled.nav`
  background-color: ${props => props.theme.palette.primary.main};
`

const NavLink = styled(Link)`
  padding: 1rem 1rem;
  color: ${props => props.theme.palette.primary.contrastText};

  &:hover,
  &:focus {
    color: ${props => props.theme.palette.primary.contrastText};
    background-color: ${props => props.theme.palette.primary.light};
  }
`
