import React from 'react'
import styled from 'styled-components'
import Container from '../../../reusable/layout/container/container'

const StyledSkillsSection = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  .header {
    h2 {
      font-size: 36px;
    }
  }
`

const SkillsSection = (props) => {
  return (
    <StyledSkillsSection>
      <Container
        fullwidth={false}
        border="2px solid green"
      >
        <div className="header">
          <h2>Skills</h2>
        </div>
        <div className="body">
          <div className="column">
            <h3>Front-End</h3>
            <ul>
              <li>React</li>
            </ul>
          </div>
        </div>
      </Container>
    </StyledSkillsSection>
  )
}

SkillsSection.defaultProps = {

}

export default SkillsSection