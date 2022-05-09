const path = require('path')
const firebase = require('firebase')
const { cleanUpSlug } = require('./src/utils')

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
      slug: cleanUpSlug(data.title, '/sarpur/'),
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
  const markdownMovieDetailsTemplate = path.resolve(
    'src/templates/heimildamynd/markdown.js'
  )
  const firebaseMovieDetailsTemplate = path.resolve(
    'src/templates/heimildamynd/firebase.js'
  )

  const prismicMovieDetailsTemplate = path.resolve(
    'src/templates/heimildamynd/prismic.js'
  )

  const prismicResults = await graphql(`
    {
      allPrismicPage {
        nodes {
          uid
          url
          lang
          id
          prismicId
        }
      }
      allPrismicMovie {
        nodes {
          uid
          url
          lang
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
          frontmatter {
            title
          }
        }
      }
      wips: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/verk-i-vinnslu/" } }
      ) {
        nodes {
          id
          frontmatter {
            title
          }
        }
      }
      allSarpurYear(sort: { fields: year, order: DESC }) {
        nodes {
          id
          year
          movies {
            id
            title
          }
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

  // firestore files to pages
  sarpurYearsResults.data.allSarpurYear.nodes.forEach((node) => {
    node.movies.map((movie) => {
      const path = cleanUpSlug(movie.title, '/sarpur/')
      createPage({
        path,
        component: firebaseMovieDetailsTemplate,
        context: {
          year: node.year,
          id: movie.id.toString(),
        },
      })
    })
  })

  // markdown files to pages
  sarpurYearsResults.data.premiers.nodes.map((node) => {
    createPage({
      path: cleanUpSlug(node.frontmatter.title, '/sarpur/'),
      component: markdownMovieDetailsTemplate,
      context: {
        ...node,
      },
    })
  })
  sarpurYearsResults.data.wips.nodes.map((node) => {
    createPage({
      path: cleanUpSlug(node.frontmatter.title, '/sarpur/'),
      component: markdownMovieDetailsTemplate,
      context: {
        ...node,
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

  prismicResults.data.allPrismicMovie.nodes.map((node) => {
    createPage({
      path: node.url,
      component: prismicMovieDetailsTemplate,
      context: {
        ...node,
      },
    })
  })
}
