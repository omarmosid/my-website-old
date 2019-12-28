import React from 'react'
import styled from 'styled-components'
import Img from "gatsby-image"

import { Link } from 'gatsby'
import { colors } from '../../../../../utils/themes/styles'

const StyledPortfolioItem = styled.div`
  position: relative;
  overflow: hidden;
  height: 320px;
  width: 100%;
  max-width: 480px;
  margin: 20px 0px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.250);
  &:hover {
    filter: brightness(60%);
    transition: 0.4s all;
  }
  .background-img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    
  }
  div.container__content {
    position: absolute;
    top: 0px;
    transform: translateX(-100%);
    height: 100%;
    width: 100%;
    background: rgba(0, 0, 0, 0.25);
    &:hover {
      transition: 0.4s all;
      transform: translateX(0%);
    }
    h4 {
      margin: 0px;
      font-size: 24px;
    }
  }
`

const PortfolioItem = ({
  title,
  slug,
  displayImage
}) => {
  return (
    <StyledPortfolioItem>
      <Link to={`/portfolio/${slug}`}>
        <Img
          fluid={displayImage.childImageSharp.fluid}
          className="background-img"
        />
        <div className="container__content">
          {/* <h4>{title}</h4> */}
        </div>
      </Link>
    </StyledPortfolioItem>
  )
}

PortfolioItem.defaultProps = {
  title: 'Default'
}

export default PortfolioItem