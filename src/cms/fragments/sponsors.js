import { graphql } from 'gatsby'

export const fragment = graphql`
  fragment sponsorsFragment on PrismicSponsors {
    data {
      first_row {
        logo {
          url
          alt
          gatsbyImageData
        }
        website {
          url
        }
      }
      second_row {
        logo {
          url
          alt
          gatsbyImageData
        }
        website {
          url
        }
      }
      honours {
        logo {
          url
          alt
          gatsbyImageData
        }
        website {
          url
        }
        text
      }
    }
  }
`
