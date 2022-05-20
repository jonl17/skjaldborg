import { graphql } from 'gatsby'

export const fragment = graphql`
  fragment eventFragmentFull on PrismicEvent {
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
      }
      rich_text {
        html
      }
      featured_image {
        url
        alt
        gatsbyImageData
      }
      type
      scheduled
    }
  }
`
