import { createGlobalStyle } from 'styled-components'
import { fonts, colors } from './styles'

import Back from '../../images/tiles/geometry/geometry.png'

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
    ${'' /* background: ${props => props.theme.backgroundColor}; */}
    background: url(${Back}) repeat center center;
    color: ${props => props.theme.headingTextColor};
    font-family: ${fonts.sec};
    h1, h2, h3, h4, h5, h6 {
      margin-top: 0px;
      color: ${colors.secDark};
      font-family: ${fonts.pri};
      letter-spacing: 0.02px;
    }
    span, label, p {
      font-family: ${fonts.pri};
      color: ${colors.secLight};
      line-height: 150%;
      letter-spacing: -0.2px;
    }
    h1 {
      font-size: 52px;
    }
    p {
      font-size: 18px;
      font-weight: 300;
    }
    a {
      color: inherit;
      font-family: ${fonts.pri};
    }
  }
`

export default GlobalStyles