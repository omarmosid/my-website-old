import React from 'react'
import { graphql, Link } from 'gatsby';
import Layout from '../components/reusable/layout/layout';

const Blog = ({ data }) => {
  const { edges } = data.allMarkdownRemark;
  return (
    <Layout>
      <h1>Blog</h1>
      {
        edges.map((edge, index) => {
          const { title, slug } = edge.node.frontmatter;
          return (
            <Link key={index} to={`/blog/${slug}`}>
              <h2>{title}</h2>
            </Link>
          )
        })
      }
    </Layout>
  )
}

export const pageQuery = graphql`
  query allBlogPosts {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
            slug
          }
        }
      }
    }
  }
`

export default Blog
