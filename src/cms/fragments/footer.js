import { graphql } from 'gatsby'

export const fragment = graphql`
  fragment footerFragment on PrismicFooter {
    data {
      sponsors {
        logo {
          url
          alt
          gatsbyImageData
        }
      }
    }
  }
`
