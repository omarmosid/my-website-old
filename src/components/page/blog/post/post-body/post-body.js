import React from 'react'
import styled from 'styled-components'
import Container from '../../../../reusable/layout/container/container'

const StyledPostBody = styled.div`
  div.blog-post-content {
    max-width: 750px;
    width: 100%;
  }
`

const PostBody = ({
  children
}) => {
  return (
    <StyledPostBody>
      <Container>
        {children}
      </Container>
    </StyledPostBody>
  )
}

PostBody.defaultProps = {

}

export default PostBody