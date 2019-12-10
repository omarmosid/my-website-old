import React from 'react'
import styled from 'styled-components'
import Container from '../../../reusable/layout/container/container'

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
  }
`

const PortfolioMain = ({
  children
}) => {
  return (
    <StyledPortfolioMain>
      <Container
        className="container__body"
      >
        {children}
      </Container>
    </StyledPortfolioMain>
  )
}

PortfolioMain.defaultProps = {

}

export default PortfolioMain