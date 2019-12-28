import React from 'react'
import { graphql } from 'gatsby';
import Layout from '../../components/reusable/layout/layout';
import Container from '../../components/reusable/layout/container/container';
import PostBody from '../../components/page/blog/post/post-body/post-body';

const BlogPost = ({ data }) => {
  const { html, frontmatter } = data.markdownRemark;
  const { title } = frontmatter;
  return (
    <Layout>
      <h1>{title}</h1>
      <PostBody>
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </PostBody>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date
        slug
        title
      }
    }
  }
`

export default BlogPost
