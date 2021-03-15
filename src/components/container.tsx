import { css } from '@emotion/react'

interface ContainerProps {
  maxWidth?: number
  row?: boolean
  children: React.ReactNode
}

export default function Container({
  maxWidth = 720,
  row,
  children,
}: ContainerProps) {
  return (
    <div
      css={css`
        width: 100%;
        max-width: ${maxWidth}px;
        margin: 0 auto;

        display: flex;
        flex-direction: ${row ? 'row' : 'column'};
      `}
    >
      {children}
    </div>
  )
}
