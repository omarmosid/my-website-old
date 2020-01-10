import React from "react"
import styled from "styled-components"
import Container from "../../../reusable/layout/container/container"

import Arrow from "../../../../assets/icons/Arrow.inline.svg"

const StyledHomeSocialSection = styled.div`
  width: 100%;
  .social {
    box-sizing: border-box;
    padding: 6rem 0px 0px;
    display: flex;
    justify-content: center;
    a {
      flex: 1 1 50%;
      display: inline-block;
    }
    button {
      box-sizing: border-box;
      height: 120px;
      width: 100%;
      border: none;
      color: #fff;
      font-size: 20px;
      line-height: 100%;
      svg {
        padding-left: 4px;
        transition: 600ms all;
      }
      &:hover {
        svg {
          transform: translateX(4px);
          transition: 600ms all;
        }
      }
    }
    button.github {
      background: #333;
    }
    button.linkedin {
      background: #0077b5;
    }
  }
`

const HomeSocialSection = props => {
  return (
    <StyledHomeSocialSection>
      <Container fullwidth={true} className="social">
        <a href="https://github.com/omarmosid" target="_blank" rel="noopener noreferrer">
          <button className="github">
            View Github <Arrow />
          </button>
        </a>
        <a href="https://www.linkedin.com/in/omar1108/" target="_blank" rel="noopener noreferrer">
          <button className="linkedin">
            View LinkedIn <Arrow />
          </button>
        </a>
      </Container>
    </StyledHomeSocialSection>
  )
}

HomeSocialSection.defaultProps = {}

export default HomeSocialSection
