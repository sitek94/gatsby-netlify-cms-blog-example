import { css } from '@emotion/react'

interface ContainerProps {
  maxWidth?: number
  children: React.ReactNode
}

export default function Container({
  maxWidth = 720,
  children,
}: ContainerProps) {
  return (
    <div
      css={css`
        width: 100%;
        max-width: ${maxWidth}px;
        margin: 0 auto;
      `}
    >
      {children}
    </div>
  )
}
