import React from 'react'
import styled from 'styled-components'
import Row from '../../../reusable/layout/row/row'
import Container from '../../../reusable/layout/container/container'
import MetaCard from './meta-card/meta-card'

const StyledPortfolioSummary = styled.section`
  padding: 60px 0px 80px;
  width: 100%;
  display: flex;
  justify-content: center;
  .container__cards {
    display: flex;
    justify-content: space-between;
  }
`

const PortfolioSummary = ({
  client, 
  stack, 
  period,
  children
}) => {
  return (
    <StyledPortfolioSummary>
      <Container>
        <Row className="container__cards">
          <MetaCard 
            title="Client"
          >
            <span>{client}</span>
          </MetaCard>
          <MetaCard 
            title="Tech Stack"
          >
            <span>{stack}</span>
          </MetaCard>
          <MetaCard 
            title="Period"
          >
            <span>{period}</span>
          </MetaCard>
        </Row>
      </Container>
    </StyledPortfolioSummary>
  )
}

PortfolioSummary.defaultProps = {

}

export default PortfolioSummary