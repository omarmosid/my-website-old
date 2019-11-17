import React from 'react'
import styled from 'styled-components'

const StyledFooter = styled.footer`
  box-sizing: border-box;
  width: 100%;
  padding: 10px;
  display: flex;
  justify-content: center;
`

const Footer = (props) => {
  return (
    <StyledFooter>
      <span>
        © {new Date().getFullYear()}, Built with
          {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </span>
    </StyledFooter>
  )
}

Footer.defaultProps = {

}

export default Footer