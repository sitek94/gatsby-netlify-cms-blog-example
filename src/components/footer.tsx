import { css } from '@emotion/react'

export default function Header() {
  return (
    <header
      css={css`
        margin-bottom: 1.5rem;
      `}
    >
      <h5
        css={css`
          display: inline;
        `}
      >
        Maciek Sitkowski &copy; 2021
      </h5>
    </header>
  )
}
