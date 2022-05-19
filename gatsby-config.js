const { config } = require('dotenv')
config()
const {
  gatsbySourcePrismic,
  gatsbySourcePrismicPreviews,
} = require('./src/cms/prismicConfig')

const pages = [
  { name: `Heim`, name_en: `Home`, slug: `/` },
  { name: `Hátíðin`, name_en: `The Festival`, slug: `/hatidin` },
  {
    name: `Heimildamyndir`,
    name_en: `Documentaries`,
    slug: `/heimildamyndir`,
  },
  { name: `Sarpur`, name_en: `Archive`, slug: `/sarpur` },
]
const dropdownPages = [
  {
    name: `Skjaldborgarhátíðin`,
    name_en: `Skaldborg Festival`,
    slug: `/hatidin`,
    image: `images/hatidin`,
  },
  {
    name: `Skjaldborgarbíó`,
    name_en: `Skjaldborg Cinema`,
    slug: `/bio`,
    image: `images/bio`,
  },
  {
    name: `Ferðalagið / Gisting`,
    name_en: `How to get there / Accommodation`,
    slug: `/ferdalagid-gisting`,
    image: `images/ferdalag_2`,
  },
]

const metadata = {
  title: 'Skjaldborg',
  subtitle: 'Hátíð íslenskra heimildamynda',
  url: 'https://skjaldborg.is/',
  favicon: '/assets/favicon.png',
  logo:
    'https://res.cloudinary.com/dynkhs6v9/image/upload/v1586345013/images/skjaldborg_logo.jpg',
  year: 2020,
  period: '3.—6. júní 2022',
  location: `Reykjavík`,
  pages: pages,
  dropdownpages: dropdownPages,
  contact: {
    email: 'skjaldborg@skjaldborg.is',
    tel: '+354 866 6977',
    socialMedia: [
      {
        name: 'facebook',
        url: 'https://m.facebook.com/skjaldborg.hatid.islenskra.heimildamynda/',
      },
      {
        name: 'instagram',
        url:
          'https://instagram.com/skjaldborg_heimildamyndahatid?igshid=zqeiffioceg2',
      },
    ],
  },
}

module.exports = {
  siteMetadata: metadata,
  plugins: [
    'gatsby-plugin-remove-serviceworker',
    gatsbySourcePrismic,
    gatsbySourcePrismicPreviews,
    'gatsby-plugin-postcss',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/static/assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          'gatsby-remark-relative-images',
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 2160,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `gisting`,
        path: `${__dirname}/static/gisting`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `styrktaradilar_top5`,
        path: `${__dirname}/static/styrktaradilar_top5`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `styrktaradilar_rest`,
        path: `${__dirname}/static/styrktaradilar_rest`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `styrktaradilar_rest`,
        path: `${__dirname}/static/bigLogos`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `adilar`,
        path: `${__dirname}/static/adilar`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `frumsyningar`,
        path: `${__dirname}/static/frumsyningar`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `verk-i-vinnslu`,
        path: `${__dirname}/static/verk-i-vinnslu`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `dagskra`,
        path: `${__dirname}/static/dagskra`,
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: `${__dirname}/static/assets/svg/**`,
        },
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-netlify-cms`,
    `gatsby-plugin-layout`,
    'gatsby-plugin-image',
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: 'UA-158316293-1',
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: false,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
      },
    },
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          '@constants': 'src/constants',
        },
        extensions: ['js'],
      },
    },
    {
      resolve: 'gatsby-plugin-firebase',
      options: {
        credentials: {
          apiKey: process.env.GATSBY_API_KEY,
          authDomain: process.env.GATSBY_AUTH_DOMAIN,
          projectId: process.env.GATSBY_PROJECT_ID,
          storageBucket: process.env.GATSBY_STORAGE_BUCKET,
          appId: process.env.GATSBY_APP_ID,
        },
      },
    },
  ],
}
