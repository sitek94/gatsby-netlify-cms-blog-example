import * as React from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'
import { css } from '@emotion/react'

import { rhythm } from '../utils/typography'

export default function Header() {
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
          MySweetSite
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
