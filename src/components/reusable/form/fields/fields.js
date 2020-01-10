import React from "react"
import styled from "styled-components"

const StyledFields = styled.div`
  box-sizing: border-box;
  width:  ${props => props.fullwidth ? '100%' : '50%'};
  margin: 10px 0px;
  display: flex;
  flex-direction: column;
  &:nth-child(odd) {
    padding-right: ${props => props.fullwidth ? '0px' : '20px'};
  }
  &:nth-child(even) {
    padding-left: ${props => props.fullwidth ? '0px' : '20px'};
  }
`

const Fields = (props) => {
  return (
    <StyledFields
      {...props}
    >
      {props.children}
    </StyledFields>
  )
}

Fields.defaultProps = {
  fullwidth: false
}

export default Fields
