import React from 'react'
import styled from 'styled-components'
import { colors } from '../../../utils/themes/styles'

const StyledHero = styled.div`
  height: 400px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: ${props => props.background};
  background: ${colors.priGradient};
  > * {
    position: relative;
    z-index: 2;
    color: #fff;
  }
`

const Hero = ({
  title,
  children,
  ...props
}) => {
  return (
    <StyledHero
      {...props}
    >
      <h1>{ title !== '' ? title : null }</h1>
      {children}
    </StyledHero>
  )
}

Hero.defaultProps = {
  title: 'Page Title',
  background: '#dbdbdb'
}

export default Hero