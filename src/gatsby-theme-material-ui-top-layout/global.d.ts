import { Theme } from '@material-ui/core/styles/createMuiTheme'

declare module '@material-ui/core/styles/createMuiTheme' {
  interface Theme {
    isDark: boolean
    toggleTheme: () => void
  }
  // allow configuration using `createMuiTheme`
  interface ThemeOptions {
    isDark?: boolean
    toggleTheme?: () => void
  }
}
