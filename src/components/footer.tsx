import { css } from '@emotion/react'
import styled from '@emotion/styled'

export default function Header() {
  return (
    <Footer
      css={css`
        padding: 1rem 0;
        text-align: center;
        font-size: 0.8rem;
      `}
    >
      Maciek Sitkowski &copy; 2021
    </Footer>
  )
}

const Footer = styled.footer`
  color: ${props => props.theme.palette.primary.contrastText};
  background-color: ${props => props.theme.palette.primary.main};
`
