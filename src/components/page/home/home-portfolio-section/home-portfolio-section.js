import React from "react"
import styled from "styled-components"
import PortfolioItem from "./portfolio-item/portfolio-item"
import { dimensions, colors } from "../../../../utils/themes/styles"
import Container from "../../../reusable/layout/container/container"
import { graphql, useStaticQuery, Link } from "gatsby"
import { Button } from "../../../reusable/button"

const StyledHomePortfolioSection = styled.section`
  position: relative;
  z-index: 2;
  width: 100%;
  height: auto;
  margin: 0 auto;
  padding: 6rem 0 4rem;
  display: flex;
  align-items: center;
  background-size: cover;
  background-attachment: fixed;
  div.header {
    position: relative;
    z-index: 4;
    h2 {
      margin: 0px 0px 10px;
      text-align: center;
      font-size: 24px;
      color: ${colors.sec};
    }
  }
  div.container__portfolio {
    position: relative;
    z-index: 4;
    padding: 4rem 0px;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
  }
  div.container__cta {
    position: relative;
    z-index: 4;
    display: flex;
    justify-content: center;
  }
  /* &::after {
    content: "";
    position: absolute;
    z-index: 3;
    height: 100%;
    width: 100%;
    background: rgba(255, 255, 255, 0.95);
  } */
`

const HomePortfolioSection = props => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/portfolio/" } }
        limit: 6
        sort: { fields: frontmatter___displayImage___birthtime, order: DESC }
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
  `)
  const { edges } = data.allMarkdownRemark
  return (
    <StyledHomePortfolioSection>
      <Container fullwidth={true}>
        <div className="header">
          <h2>Projects I've worked on</h2>
        </div>
        <div className="container__portfolio">
          {edges.map((edge, index) => {
            const { title, slug, displayImage } = edge.node.frontmatter
            return (
              <PortfolioItem
                key={index}
                title={title}
                slug={slug}
                displayImage={displayImage}
              />
            )
          })}
        </div>
        <div className="container__cta">
          <Link to="/portfolio">
            <Button.Ghost>View More</Button.Ghost>
          </Link>
        </div>
      </Container>
    </StyledHomePortfolioSection>
  )
}

HomePortfolioSection.defaultProps = {}

export default HomePortfolioSection
