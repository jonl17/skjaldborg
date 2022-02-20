const { fmImagesToRelative } = require('gatsby-remark-relative-images')
const path = require('path')
const slugify = require('slugify')
const { url } = require('inspector')

exports.onCreateNode = ({ node }) => {
  fmImagesToRelative(node)
}

exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions

  // page.matchPath is a special key that's used for matching pages
  // only on the client.
  if (page.path.match(/^\/umsokn/)) {
    page.matchPath = '/umsokn/*'
    createPage(page)
  }
  if (page.path.match(/^\/sarpur/)) {
    page.matchPath = '/sarpur/*'
    createPage(page)
  }
}

// env variable fix
exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    node: {
      fs: 'empty',
    },
  })
}

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions
  const movieTemplate = path.resolve(`src/templates/heimildamynd/index.js`)
  const pageTemplate = path.resolve('src/templates/Page/Page.js')

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
      verk_i_vinnslu: allMarkdownRemark(
        sort: { fields: frontmatter___title }
        filter: { fileAbsolutePath: { regex: "/verk-i-vinnslu/" } }
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

  const prismicResults = await graphql(`
    {
      allPrismicPage {
        nodes {
          uid
          url
          id
          prismicId
        }
      }
    }
  `)

  if (result.errors || prismicResults.errors) {
    reporter.panicOnBuild('Error while running graphql query!')
    return
  }
  const joinedArrays = result.data.frumsyningar.nodes.concat(
    result.data.verk_i_vinnslu.nodes
  )
  joinedArrays.forEach((item) => {
    const prefix = '/heimildamyndir/'
    const url = prefix + slugify(item.frontmatter.title, { lower: true })
    createPage({
      path: url,
      component: movieTemplate,
      context: {
        id: item.id,
      },
    })
  })

  prismicResults.data.allPrismicPage.nodes.map((node) => {
    createPage({
      path: node.url,
      component: pageTemplate,
      context: {
        ...node,
      },
    })
  })
}
