const path = require(`path`)

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;

  const blogPostTemplate = path.resolve(`src/templates/blog/blog-post.js`)
  const portfolioPostTemplate = path.resolve(`src/templates/portfolio/portfolio-post.js`)

  // Get All Blog Posts
  const blogPostResult = await graphql(`
    {
      allMarkdownRemark(
        filter: {fileAbsolutePath: {regex: "/blog/"}}
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `)
  if (blogPostResult.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  // Get All Portfolio Posts
  const portfolioPostResult = await graphql(`
  {
    allMarkdownRemark(
      filter: {fileAbsolutePath: {regex: "/portfolio/"}}
      sort: { order: DESC, fields: [frontmatter___date] }
      limit: 1000
    ) {
      edges {
        node {
          frontmatter {
            slug
          }
        }
      }
    }
  }
`)
if (portfolioPostResult.errors) {
  reporter.panicOnBuild(`Error while running GraphQL query.`)
  return
}

  blogPostResult.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: `/blog/${node.frontmatter.slug}`,
      component: blogPostTemplate,
      context: {
        slug: node.frontmatter.slug
      }, // additional data can be passed via context
    })
  })

  portfolioPostResult.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: `/portfolio/${node.frontmatter.slug}`,
      component: portfolioPostTemplate,
      context: {
        slug: node.frontmatter.slug
      }, // additional data can be passed via context
    })
  })
}