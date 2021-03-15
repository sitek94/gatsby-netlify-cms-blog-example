import { graphql, useStaticQuery } from 'gatsby'
import { Query } from '../graphql-types'
import jumbotron from '../images/jumbotron.jpg'
import styled from '@emotion/styled'

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
    <Wrapper>
      <Nav>
        <Container row>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about/">About</NavLink>
          <NavLink to="/contact/">Contact</NavLink>
        </Container>
      </Nav>
      <Hero>
        <H1>{data.site?.siteMetadata?.title}</H1>
      </Hero>
    </Wrapper>
  )
}

const Wrapper = styled.header`
  margin-bottom: 4rem;
`

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

const Hero = styled.div`
  height: 400px;
  width: 100vw;
  background-image: url(${jumbotron});
  background-position: center;
  background-size: cover;
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
`

const H1 = styled.h1`
  margin-bottom: -12px;
  margin-left: 10px;
  font-family: ${props => props.theme.fonts.extraBold};
`
