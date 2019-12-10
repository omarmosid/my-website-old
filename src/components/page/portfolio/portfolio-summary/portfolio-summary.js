import React from 'react'
import styled from 'styled-components'
import Row from '../../../reusable/layout/row/row'
import Container from '../../../reusable/layout/container/container'
import MetaCard from './meta-card/meta-card'

const StyledPortfolioSummary = styled.section`
  padding: 60px 0px 60px;
  width: 100%;
  display: flex;
  justify-content: center;
  .container__cards {
    display: flex;
    justify-content: space-between;
  }
`

const PortfolioSummary = ({
  children
}) => {
  return (
    <StyledPortfolioSummary>
      <Container>
        <Row className="container__cards">
          <MetaCard 
            title="Client"
          >
            <span>Montaigne Smart Business Solutions</span>
          </MetaCard>
          <MetaCard 
            title="Tech Stack"
          >
            <span>Montaigne Smart Business Solutions</span>
          </MetaCard>
          <MetaCard 
            title="Period"
          >
            <span>Montaigne Smart Business Solutions</span>
          </MetaCard>
        </Row>
      </Container>
    </StyledPortfolioSummary>
  )
}

PortfolioSummary.defaultProps = {

}

export default PortfolioSummary