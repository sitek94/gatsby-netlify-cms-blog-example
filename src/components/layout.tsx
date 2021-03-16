import * as React from 'react'
import { Global, css, ThemeProvider } from '@emotion/react'

import theme from '../../config/theme'
import createReset from '../lib/reset'

import Header from './header'
import Footer from './footer'

type LayoutProps = {
  children: React.ReactNode
}

const globalStyles = css`
  font-size: 10px;
  color: #333;
`

export default function Layout({ children }: LayoutProps) {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={globalStyles} />
      <Global styles={createReset(theme)} />

      <div
        css={css`
          min-height: 100vh;
          width: 100%;
          display: flex;
          flex-direction: column;
        `}
      >
        <div css={{ flex: '1 0 auto' }}>
          <Header />
          {children}
        </div>
        <div css={{ flexShrink: 0 }}>
          <Footer />
        </div>
      </div>
    </ThemeProvider>
  )
}
