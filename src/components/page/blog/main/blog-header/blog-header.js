import React from 'react'
import styled from 'styled-components'
import Hero from '../../../../reusable/hero/hero'

const StyledBlogHeader = styled.header`
  width: 100%;
`

const BlogHeader = (props) => {
  return (
    <StyledBlogHeader>
      <Hero 
        title="Blog"
      />
    </StyledBlogHeader>
  )
}

BlogHeader.defaultProps = {

}

export default BlogHeader