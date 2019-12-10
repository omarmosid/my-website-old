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
  background-color: ${colors.pri};
  background-blend-mode: multiply;
  background-repeat: no-repeat;
  background-size: cover;
  clip-path: ellipse(100% 55% at 48% 44%);
  > * {
    position: relative;
    z-index: 2;
  }
  &:after {
    content: '';
    position: absolute;
    z-index: 1;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.45);
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