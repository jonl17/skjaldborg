import React from 'react'
import { Helmet } from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

const Seo = ({
  data: {
    site: { siteMetadata: meta },
  },
}) => {
  return (
    <Helmet title={meta.title + ' 2020'}>
      <meta name='description' content={meta.subtitle} />

      <title>Skjaldborg</title>

      <meta name='image' content={meta.logo} />

      {meta.url && <meta property='og:url' content={meta.url} />}

      {meta.title && <meta property='og:title' content={meta.title} />}

      {meta.subtitle && (
        <meta property='og:description' content={meta.subtitle} />
      )}
      {meta.logo && <meta property='og:image' content={meta.logo} />}

      <link sizes='20x20' href='/favicon.ico' rel='icon'></link>
    </Helmet>
  )
}

export default (props) => (
  <StaticQuery
    query={graphql`
      {
        site {
          siteMetadata {
            title
            subtitle
            url
            favicon
            logo
          }
        }
      }
    `}
    render={(data) => <Seo data={data} {...props}></Seo>}
  ></StaticQuery>
)
