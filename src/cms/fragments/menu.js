import { graphql } from 'gatsby'

export const fragment = graphql`
  fragment menuFragment on PrismicMenu {
    data {
      pages {
        page {
          url
        }
        link_label
      }
    }
  }
`
