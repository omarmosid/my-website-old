import React from 'react'
import { graphql } from 'gatsby';
import Layout from '../../components/reusable/layout/layout';
import Container from '../../components/reusable/layout/container/container';

const BlogPost = ({ data }) => {
  const { html, frontmatter } = data.markdownRemark;
  const { title } = frontmatter;
  return (
    <Layout>
      <h1>{title}</h1>
      <Container>
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </Container>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
      }
    }
  }
`

export default BlogPost
