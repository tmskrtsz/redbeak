const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `work` })
    createNodeField({
      node,
      name: `slug`,
      value: slug
    })
  }
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return graphql(`
    {
      allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }, limit: 1000) {
        edges {
          node {
            fileAbsolutePath
            fields {
              slug
            }
            frontmatter {
              title
            }
          }
          previous {
            id
            fields {
              slug
            }
            frontmatter {
              title
              intro
              bg
            }
          }
          next {
            id
            fields {
              slug
            }
            frontmatter {
              title
              intro
              bg
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      throw result.errors
    }

    const works = result.data.allMarkdownRemark.edges

    works.forEach(work => {
      createPage({
        path: work.node.fields.slug,
        component: path.resolve(`./src/templates/work.js`),
        context: {
          slug: work.node.fields.slug,
          absolutePathRegex: `/^${ path.dirname(work.node.fileAbsolutePath) }/`,
          next: work.previous, // Easy way to swap direction
          previous: work.next
        }
      })
    })
  })
}
