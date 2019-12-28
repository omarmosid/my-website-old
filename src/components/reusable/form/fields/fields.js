import React from "react"
import styled from "styled-components"
import Label from "./label/label"
import Input from "./input/input"
import Helper from "./helper/helper"

const StyledFields = styled.div`
  display: flex;
  flex-direction: column;
`

const Fields = ({
  children
}) => {
  return (
    <StyledFields>
      {children}
    </StyledFields>
  )
}

Fields.defaultProps = {}

export default Fields
