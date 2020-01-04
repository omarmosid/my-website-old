import React from 'react'
import { graphql, Link } from 'gatsby';
import Layout from '../components/reusable/layout/layout';
import BlogHeader from '../components/page/blog/main/blog-header/blog-header';
import SEO from '../components/reusable/seo/seo';

const Blog = ({ data }) => {
  const { edges } = data.allMarkdownRemark;
  return (
    <Layout>
      <SEO 
        title="Blog"
      />
      <BlogHeader />
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
