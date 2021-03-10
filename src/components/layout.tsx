import * as React from 'react'
import { Global, css } from '@emotion/react'
import styled from '@emotion/styled'

type LayoutProps = {
  children: React.ReactNode
}

const globalStyles = css`
  div {
    background: red;
    color: white;
  }
`

export default function Layout({ children }: LayoutProps) {
  return (
    <Wrapper>
      <Global styles={globalStyles} />
      {children}
    </Wrapper>
  )
}

const Wrapper = styled('div')`
  border: 2px solid green;
  padding: 10px;
`
