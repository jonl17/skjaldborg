const { fmImagesToRelative } = require("gatsby-remark-relative-images")
const path = require("path")
const slugify = require("slugify")
const { url } = require("inspector")

exports.onCreateNode = ({ node }) => {
  fmImagesToRelative(node)
}

exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions

  // page.matchPath is a special key that's used for matching pages
  // only on the client.
  if (page.path.match(/^\/umsokn/)) {
    page.matchPath = "/umsokn/*"
    createPage(page)
  }
  if (page.path.match(/^\/sarpur/)) {
    page.matchPath = "/sarpur/*"
    createPage(page)
  }
}

// env variable fix
exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    node: {
      fs: "empty",
    },
  })
}

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions
  const movieTemplate = path.resolve(`src/templates/heimildamynd/index.js`)
  const result = await graphql(`
    {
      frumsyningar: allMarkdownRemark(
        sort: { fields: frontmatter___title }
        filter: { fileAbsolutePath: { regex: "/frumsyning/" } }
      ) {
        nodes {
          id
          frontmatter {
            title
          }
        }
      }
    }
  `)
  if (result.errors) {
    reporter.panicOnBuild("Error while running graphql query!")
    return
  }
  result.data.frumsyningar.nodes.forEach(item => {
    const prefix = "/heimildamyndir/"
    const url = prefix + slugify(item.frontmatter.title, { lower: true })
    createPage({
      path: url,
      component: movieTemplate,
      context: {
        id: item.id,
      },
    })
  })
}
