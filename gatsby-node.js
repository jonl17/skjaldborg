const { fmImagesToRelative } = require("gatsby-remark-relative-images")
const path = require("path")
const slugify = require("slugify")

exports.onCreateNode = ({ node, getNode, actions }) => {
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
