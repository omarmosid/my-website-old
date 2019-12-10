import React from 'react'
import styled from 'styled-components'

const StyledMetaCard = styled.div`
  box-sizing: border-box;
  width: 280px;
  height: 160px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #454545;
  border: 2px solid #fff;
  h4.title {
    margin: 0;
    margin-bottom: 10px;
    font-size: 24px;
  }
  span.body {
    font-size: 16px;
  }
`

const MetaCard = ({
  title,
  body,
  children
}) => {
  return (
    <StyledMetaCard>
      <h4 className="title">{title}</h4>
      { body !== '' && <span className="body">{body}</span> }
      {children}
    </StyledMetaCard>
  )
}

MetaCard.defaultProps = {
  title: 'Title',
  body: ''
}

export default MetaCard