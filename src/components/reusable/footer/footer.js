import React from 'react'
import styled from 'styled-components'

const StyledFooter = styled.footer`
  box-sizing: border-box;
  bottom: 0px;
  width: 100%;
  height: 50px;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #dfdfdf;
`

const Footer = (props) => {
  return (
    <StyledFooter>
      <span>
        Made with ❤️ by Mohammad Omar {` `}
        © {new Date().getFullYear()}, Built with
          {` `}
        <a href="https://www.gatsbyjs.org" target="_blank" rel="noopener noreferrer">Gatsby</a>
        {` `} and hosted on {` `}
        <a href="http://netlify.com" target="_blank" rel="noopener noreferrer">Netlify</a>
      </span>
    </StyledFooter>
  )
}

Footer.defaultProps = {

}

export default Footer