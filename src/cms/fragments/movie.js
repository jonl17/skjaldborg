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
        seo: gatsbyImageData(height: 630, width: 1200)
        banner: gatsbyImageData
        thumbnails {
          seo {
            url
          }
        }
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
