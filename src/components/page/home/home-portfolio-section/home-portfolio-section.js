import React from 'react'
import styled from 'styled-components'
import PortfolioItem from './portfolio-item/portfolio-item'
import { dimensions } from '../../../../utils/themes/styles'
import Container from '../../../reusable/layout/container/container'
import { graphql, useStaticQuery } from 'gatsby'

const StyledHomePortfolioSection = styled.section`
position: relative;
  z-index: 2;
  width: 100%;
  max-width: ${dimensions.siteWidth};
  margin: 0 auto;
  div.header {
    h2 {
      margin: 0px 0px 10px;
      text-align: center;
      font-size: 28px;
    }
  }
  div.container__portfolio {
    padding: 40px 0px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }
`

const HomePortfolioSection = (props) => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allMarkdownRemark(
        filter: {fileAbsolutePath: {regex: "/portfolio/"}}
        limit: 4
      ) {
        edges {
          node {
            fileAbsolutePath
            frontmatter {
              title
              slug
              displayImage {
                childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    }  
  `);
  const { edges } = data.allMarkdownRemark;
  return (
    <StyledHomePortfolioSection>
      <Container>
        <div className="header">
          <h2>Stuff I've made</h2>
        </div>
        <div className="container__portfolio">
          {
            edges.map((edge, index) => {
              const { title, slug, displayImage } = edge.node.frontmatter;
              return (
                <PortfolioItem 
                  key={index}
                  title={title}
                  slug={slug}
                  displayImage={displayImage}
                />
              )
            })
          }
        </div>
      </Container>
    </StyledHomePortfolioSection>
  )
}

HomePortfolioSection.defaultProps = {

}

export default HomePortfolioSection