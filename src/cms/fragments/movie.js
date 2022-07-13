import { graphql } from 'gatsby'

export const fragment = graphql`
  fragment movieFragmentFull on PrismicMovie {
    url
    uid
    lang
    prismicId
    data {
      title {
        text
      }
      excerpt {
        html
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
      same_slot_sort
      length
    }
  }
`
