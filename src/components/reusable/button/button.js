import React from 'react'
import styled from 'styled-components'
import { colors, fonts } from '../../../utils/themes/styles'

const StyledButton = styled.button`
  cursor: pointer;
  padding: 10px 20px;
  background: transparent;
  color: #fff;
  border: 2px solid #fff;
  border-radius: 5px;
  font-size: 16px;
  font-weight: bold;
  font-family: ${fonts.pri};
  &:hover {
    background: #fff;
    color: ${colors.pri};
  }
`

const Button = ({
  children,
  ...props
}) => {
  return (
    <StyledButton>
      {children}
    </StyledButton>
  )
}

Button.defaultProps = {

}

export default Button