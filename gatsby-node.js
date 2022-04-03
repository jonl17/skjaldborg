const path = require('path')
const slugify = require('slugify')
const { url } = require('inspector')
const firebase = require('firebase')
const { docData } = require('rxfire/firestore')

const config = {
  apiKey: process.env.GATSBY_API_KEY,
  authDomain: process.env.GATSBY_AUTH_DOMAIN,
  projectId: process.env.GATSBY_PROJECT_ID,
  storageBucket: process.env.GATSBY_STORAGE_BUCKET,
  appId: process.env.GATSBY_APP_ID,
}

exports.sourceNodes = async ({
  actions: { createNode },
  createContentDigest,
}) => {
  const firestore = firebase.initializeApp(config).firestore()

  const movies = await firestore.collection('sarpurMovies').get()
  const years = await firestore.collection('sarpur').get()

  movies.forEach((movie) => {
    const data = movie.data()
    createNode({
      ...data,
      id: data.id.toString(),
      slug: `/sarpur/${slugify(data.title, { lower: true })}`,
      internal: {
        type: 'SarpurMovie',
        contentDigest: createContentDigest(data),
      },
    })
  })

  years.forEach((year) => {
    const data = year.data()
    createNode({
      ...data,
      id: data.year,
      slug: `/sarpur/${data.year}`,
      internal: {
        type: 'SarpurYear',
        contentDigest: createContentDigest(data),
      },
    })
  })
}

exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions

  // page.matchPath is a special key that's used for matching pages
  // only on the client.
  if (page.path.match(/^\/umsokn/)) {
    page.matchPath = '/umsokn/*'
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

  const pageTemplate = path.resolve('src/templates/Page/Page.js')
  const sarpurYearTemplate = path.resolve(
    'src/templates/SarpurYear/SarpurYear.js'
  )
  const sarpurYearMarkdownTemplate = path.resolve(
    'src/templates/SarpurYearMarkdown/SarpurYearMarkdown.js'
  )

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

  const sarpurYearsResults = await graphql(`
    {
      premiers: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/frumsyningar/" } }
      ) {
        nodes {
          id
        }
      }
      wips: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/verk-i-vinnslu/" } }
      ) {
        nodes {
          id
        }
      }
      allSarpurYear(sort: { fields: year, order: DESC }) {
        nodes {
          id
          year
        }
      }
    }
  `)

  if (sarpurYearsResults.errors || prismicResults.errors) {
    reporter.panicOnBuild('Error while running graphql query!')
    return
  }

  createPage({
    path: '/sarpur/2020',
    component: sarpurYearMarkdownTemplate,
    context: {
      year: '2020',
    },
  })

  sarpurYearsResults.data.allSarpurYear.nodes.map((node) => {
    createPage({
      path: `/sarpur/${node.year}`,
      component: sarpurYearTemplate,
      context: {
        node,
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
