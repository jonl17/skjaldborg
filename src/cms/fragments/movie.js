import { graphql } from 'gatsby'

export const fragment = graphql`
  fragment movieFragmentFull on PrismicMovie {
    url
    uid
    prismicId
  }
`
