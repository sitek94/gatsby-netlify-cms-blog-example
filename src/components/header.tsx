import * as React from 'react'
import { graphql, Link, useStaticQuery } from 'gatsby'
import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { Query } from '../graphql-types'
import { rhythm } from '../utils/typography'

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
    <header
      css={css`
        margin-bottom: 1.5rem;
      `}
    >
      <Link
        to="/"
        css={css`
          text-shadow: none;
          background-image: none;
        `}
      >
        <h3
          css={css`
            margin-bottom: ${rhythm(2)};
            display: inline-block;
            font-style: normal;
          `}
        >
          {data.site?.siteMetadata?.title}
        </h3>
      </Link>
      <List>
        <ListLink to="/">Home</ListLink>
        <ListLink to="/about/">About</ListLink>
        <ListLink to="/contact/">Contact</ListLink>
      </List>
    </header>
  )
}

const List = styled.ul`
  list-style: none;
  float: right;
`

type ListLinkProps = {
  to: string
  children: React.ReactNode
}

function ListLink({ to, children }: ListLinkProps) {
  return (
    <Li>
      <Link to={to}>{children}</Link>
    </Li>
  )
}

const Li = styled.li`
  display: inline-block;
  margin-right: 1rem;
`
