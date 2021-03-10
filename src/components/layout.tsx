import * as React from 'react'
import { Global, css } from '@emotion/react'
import styled from '@emotion/styled'

import Header from './header'
import Footer from './footer'

type LayoutProps = {
  children: React.ReactNode
}

const globalStyles = css`
  color: #333;
`

export default function Layout({ children }: LayoutProps) {
  return (
    <Wrapper>
      <Global styles={globalStyles} />
      <Header />
      {children}
      <Footer />
    </Wrapper>
  )
}

const Wrapper = styled('div')`
  margin: 3rem auto;
  max-width: 650px;
  padding: 0 1rem;
`
