import React from 'react'
import styled from 'styled-components'
import Container from '../../../reusable/layout/container/container'
import { colors } from '../../../../utils/themes/styles'
import { Button } from '../../../reusable/button'
import { Link } from 'gatsby'

import Back from '../../../../images/tiles/geometry/geometry.png'

const StyledHomeHero = styled.section`
  box-sizing: border-box;
  position: relative;
  z-index: 2;
  width: 100%;
  height: 100vh;
  margin: 0px;
  display: flex;
  justify-content: center;
  /* background: url(${Back}) repeat center center; */
  .hero {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    h1, h2 {
      text-align: center;
    }
    h1 {
      margin: 0px;
      padding: 10px 14px;
      display: inline-block;
      color: ${colors.sec};
      border-radius: 15px;
      font-size: 52px;
    }
    h2 {
      max-width: 650px;
      margin-top: 10px;
      color: ${colors.secLight};
      font-size: 32px;
      font-weight: 400;
    }
    button.cta {
      margin-top: 40px;
    }
  }
  @media (max-width: 480px) {
    .hero {
      padding: 10px 24px;
      align-items: center;
      h1 {
        font-size: 32px;
        text-align: center;
      }
      h2 {
        text-align: center;
      }
      
    }
  }
`

const HomeHero = (props) => {
  return (
    <StyledHomeHero>
      <Container
        className="hero"
        fullwidth={false}
        padding="6rem 20px 6rem"
      >
        <h1>Hi I'm Omar.</h1>
        <h2>A Full-Stack Developer passionate about building great user-experiences.</h2>
        <Link to="/contact">
          <Button.Default>Get in touch</Button.Default>
        </Link>
      </Container>
    </StyledHomeHero>
  )
}

HomeHero.defaultProps = {

}

export default HomeHero