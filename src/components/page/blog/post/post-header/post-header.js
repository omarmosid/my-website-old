import React from 'react'
import styled from 'styled-components'

const StyledPostHeader = styled.div`
  
`

const PostHeader = (props) => {
  return (
    <StyledPostHeader>
      <h1>{title}</h1>
    </StyledPostHeader>
  )
}

PostHeader.defaultProps = {
  title: 'Lorem Ipsum'
}

export default PostHeader