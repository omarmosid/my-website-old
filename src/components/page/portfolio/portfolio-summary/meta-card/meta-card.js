import React from 'react'
import styled from 'styled-components'

const StyledMetaCard = styled.div`
  box-sizing: border-box;
  width: 280px;
  height: 160px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background: #fff;
  border: 2px solid #ccc;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.25);
  h4.title {
    margin: 0;
    margin-bottom: 10px;
    font-size: 24px;
  }
  span, span.body {
    font-size: 14px;
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