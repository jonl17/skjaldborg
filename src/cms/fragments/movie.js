import { graphql } from 'gatsby'

export const fragment = graphql`
  fragment movieFragmentFull on PrismicMovie {
    url
    uid
    prismicId
    data {
      title {
        text
      }
      description {
        html
      }
      featured_image {
        url
        alt
        gatsbyImageData
      }
      director
      other_roles {
        name
        role
      }
      type
      scheduled
    }
  }
`
