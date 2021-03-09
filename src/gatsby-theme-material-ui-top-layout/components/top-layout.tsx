import * as React from 'react'
import ThemeTopLayout from 'gatsby-theme-material-ui-top-layout/src/components/top-layout'
import { Theme } from '@material-ui/core/styles/createMuiTheme'
import { createMuiTheme, PaletteType } from '@material-ui/core'

type Props = {
  children: React.ReactNode
  theme: Theme
}

function TopLayout({ children, theme }: Props) {
  const [type, setType] = React.useState<PaletteType>('light')

  function toggleTheme() {
    setType(type === 'light' ? 'dark' : 'light')
  }

  const newTheme: Theme = createMuiTheme({
    palette: {
      type,
      primary: {
        main: theme.palette.primary.main,
      },
    },

    // Extend default theme object with additional utils
    isDark: type === 'dark',
    toggleTheme,
  })

  return <ThemeTopLayout theme={newTheme}>{children}</ThemeTopLayout>
}

export default TopLayout
