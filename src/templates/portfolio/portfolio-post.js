import React from 'react'
import Layout from '../../components/reusable/layout/layout'
import Hero from '../../components/reusable/hero/hero'
import PortfolioSummary from '../../components/page/portfolio/portfolio-summary/portfolio-summary'
import PortfolioMain from '../../components/page/portfolio/portfolio-main/portfolio-main'

const PortfolioPost = ({ data }) => {
  const { html, frontmatter } = data.markdownRemark;
  const { title, featuredImage } = frontmatter;
  return (
    <Layout>
      <Hero
        title={title}
        background={`url('${featuredImage.publicURL}')`}
      />
      <PortfolioSummary />
      <PortfolioMain>
        <div
          className="text"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </PortfolioMain>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        featuredImage {
          publicURL
          childImageSharp {
            fluid {
              src
            }
          }
        }
      }
    }
  }
`

export default PortfolioPost
