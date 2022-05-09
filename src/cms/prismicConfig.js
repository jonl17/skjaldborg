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
      seo: require('./schemas/seo.json'),
      footer: require('./schemas/footer.json'),
      sponsors: require('./schemas/sponsors.json'),
      menu: require('./schemas/menu.json'),
      movie: require('./schemas/movie.json'),
    },
    linkResolver: require('./linkResolver').linkResolver,
  },
}

module.exports = {
  gatsbySourcePrismic,
}
