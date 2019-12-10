import { createGlobalStyle } from 'styled-components'
import { fonts, colors } from './styles'

const GlobalStyles = createGlobalStyle`
  html {
    font-family: sans-serif;
    font-size: 10px;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
  }
  body {
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: ${props => props.theme.backgroundColor};
    color: ${props => props.theme.headingTextColor};
    font-family: ${fonts.sec};
    h1, h2, h3, h4, h5, h6 {
      margin-top: 0px;
      font-family: ${fonts.pri};
    }
    h1 {
      font-size: 48px;
    }
    a {
      color: inherit;
      font-family: ${fonts.pri};
    }
  }
`

export default GlobalStyles