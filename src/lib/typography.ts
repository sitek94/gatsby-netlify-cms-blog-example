import Typography from 'typography'
import '../fonts/fonts.css'

export const fonts = {
  thin: 'Inter Thin',
  // thinItalic: 'Inter Thin Italic',
  light: 'Inter Light',
  lightItalic: 'Inter Light Italic',
  regular: 'Inter Regular',
  // regularItalic: 'Inter Regular Italic',
  // medium: 'Inter Medium',
  // mediumItalic: 'Inter Medium Italic',
  semibold: 'Inter Semibold',
  // semiboldItalic: 'Inter Semibold Italic',
  bold: 'Inter Bold',
  // boldItalic: 'Inter Bold Italic',
}

const typography = new Typography({
  baseFontSize: '18px',
  baseLineHeight: 1.55,
  headerLineHeight: 1.4,
  headerFontFamily: [fonts.light, 'sans-serif'],
  bodyFontFamily: [fonts.regular, 'sans-serif'],
})

export const { scale, rhythm, options } = typography
export default typography
