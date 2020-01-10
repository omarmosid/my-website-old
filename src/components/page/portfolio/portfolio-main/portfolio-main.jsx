import React from "react"
import styled from "styled-components"
import Container from "../../../reusable/layout/container/container"
import { Button } from "../../../reusable/button"
import Arrow from '../../../../assets/icons/Arrow.inline.svg'

const StyledPortfolioMain = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  .container__body {
    .text {
      margin: 0 auto;
      width: 100%;
      max-width: 750px;
    }
    div.row__demo-link {
      padding: 4rem 0rem;
      display: flex;
      justify-content: center;
      a {
        button {
          padding: 18px 30px;
          background
        }
      }
    }
  }
`

const PortfolioMain = ({
  demoLink,
  children
}) => {
  return (
    <StyledPortfolioMain>
      <Container className="container__body">
        {children}
        <div className="row__demo-link">
          <a href={`${demoLink}`} target="_blank" rel="noopener noreferrer">
            <Button.Default>Check out Demo<Arrow /></Button.Default>
          </a>
        </div>
      </Container>
    </StyledPortfolioMain>
  )
}

PortfolioMain.defaultProps = {}

export default PortfolioMain
