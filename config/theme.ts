import { fonts } from '../src/lib/typography'

const palette = {
  mode: 'light',
  primary: {
    // main: '#2c2c54',
    // light: '#474787',
    light: '#393939',
    main: '#000000de',
    contrastText: '#fff',
  },
  text: {
    primary: 'rgba(0, 0, 0, 0.87)',
  },
  background: {
    default: '#fff',
  },
  common: {
    white: '#fff',
    black: '#000',
  },
}

const theme = {
  palette,
  fonts,
}

export default theme
