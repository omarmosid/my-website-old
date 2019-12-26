import React from 'react'
import styled from 'styled-components'
import Container from '../../../reusable/layout/container/container'

const StyledHomeSkillsSection = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  .container__heading {
    h2 {
      font-size: 36px;
      text-align: center;
    }
  }
  .container__skills {
    display: flex;
    justify-content: center;
    .column {
      flex: 30%;
      h3 {
        font-size: 20px;
        text-decoration: underline;
      }
      ul {
        margin: 0px;
        padding: 0px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        li {
          list-style: none;
          font-size: 16px;
        }
      }
    }
  }
`

const HomeSkillsSection = (props) => {
  return (
    <StyledHomeSkillsSection>
      <Container>
        <div className="container__heading">
          <h2>What I'm good at</h2>
        </div>
        <div className="container__skills">
          <div className="column">
            <h3>Front-End</h3>
            <ul>
              <li color="green">React</li>
              <li>Redux</li>
              <li>React</li>
              <li>React</li>
            </ul>
          </div>
          <div className="column">
            <h3>Back-End</h3>
            <ul>
              <li>React</li>
              <li>Redux</li>
              <li>React</li>
              <li>React</li>
            </ul>
          </div>
          <div className="column">
            <h3>Front-End</h3>
            <ul>
              <li>React</li>
              <li>Redux</li>
              <li>React</li>
              <li>React</li>
            </ul>
          </div>
          <div className="column">
            <h3>Front-End</h3>
            <ul>
              <li>React</li>
              <li>Redux</li>
              <li>React</li>
              <li>React</li>
            </ul>
          </div>
        </div>
      </Container>
    </StyledHomeSkillsSection>
  )
}

HomeSkillsSection.defaultProps = {

}

export default HomeSkillsSection