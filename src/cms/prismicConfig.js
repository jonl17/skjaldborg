require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

const { GATSBY_PRISMIC_REPO_NAME, PRISMIC_ACCESS_TOKEN } = process.env

const gatsbySourcePrismic = {
  resolve: 'gatsby-source-prismic',
  options: {
    repositoryName: GATSBY_PRISMIC_REPO_NAME,
    accessToken: PRISMIC_ACCESS_TOKEN,
    schemas: {
      page: require('./schemas/page.json'),
    },
    linkResolver: require('./linkResolver').linkResolver,
  },
}

module.exports = {
  gatsbySourcePrismic,
}
