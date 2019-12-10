import React from 'react'
import styled from 'styled-components'
import Container from '../../../reusable/layout/container/container'
import { colors } from '../../../../utils/themes/styles'
import Button from '../../../reusable/button/button'

const StyledHomeHero = styled.section`
  box-sizing: border-box;
  position: relative;
  z-index: 2;
  width: 100%;
  height: 80vh;
  margin: 0px;
  display: flex;
  justify-content: center;
  .hero {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    h1 {
      margin: 0px;
      padding: 10px 14px;
      display: inline-block;
      background: ${colors.sec};
      color: #000;
      border-radius: 15px;
      font-size: 4rem;
    }
    h2 {
      margin-top: 10px;
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
        <h1>Omar Mohammad</h1>
        <h2>Web Developer and UX Designer</h2>
        <a href="mailto:omar110894@gmail.com">
          <Button
            className="cta"
          >Get in Touch</Button>
        </a>
      </Container>
    </StyledHomeHero>
  )
}

HomeHero.defaultProps = {

}

export default HomeHero