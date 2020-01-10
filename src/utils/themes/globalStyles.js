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
    background-attachment: fixed;
    color: ${props => props.theme.headingTextColor};
    font-family: ${fonts.sec};
    h1, h2, h3, h4, h5, h6 {
      margin-top: 0px;
      color: ${colors.secDark};
      font-family: ${fonts.pri};
      letter-spacing: 0.02px;
    }
    h1 { font-size: 51px };
    h2 { font-size: 42px };
    h3 { font-size: 33px };
    h4 { font-size: 26px };
    h5 { font-size: 20px };
    h6 { font-size: 16px };
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
    a {
      text-decoration: none;
    }
    button {
      cursor: pointer;
      font-family: ${fonts.pri};
      font-weight: 400;
    }
  }
`

export default GlobalStyles