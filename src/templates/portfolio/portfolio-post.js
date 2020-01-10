import React from "react"
import Layout from "../../components/reusable/layout/layout"
import Hero from "../../components/reusable/hero/hero"
import PortfolioSummary from "../../components/page/portfolio/portfolio-summary/portfolio-summary"
import PortfolioMain from "../../components/page/portfolio/portfolio-main/portfolio-main"
import SEO from "../../components/reusable/seo/seo"

const PortfolioPost = ({ data }) => {
  const { html, frontmatter } = data.markdownRemark;
  const { title, client, stack, period, demoLink, featuredImage } = frontmatter;
  console.log(demoLink)
  return (
    <Layout>
      <SEO 
        title={title}
      />
      <Hero title={title} background={`url('${featuredImage.publicURL}')`} />
      <PortfolioSummary 
        client={client}
        stack={stack}
        period={period}
      />
      <PortfolioMain
        demoLink={demoLink}
      >
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
        client
        stack
        period
        demoLink
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
