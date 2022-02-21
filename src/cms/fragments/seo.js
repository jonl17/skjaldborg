import { graphql } from 'gatsby'

export const fragment = graphql`
  fragment seoFragment on PrismicSeo {
    data {
      date
      place
    }
  }
`
