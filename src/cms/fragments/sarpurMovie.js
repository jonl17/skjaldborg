import { graphql } from 'gatsby'

export const fragment = graphql`
  fragment sarpurMovieFragment on SarpurMovie {
    id
    producer
    director
    content
    title
    trailerURL
    otherCredits {
      name
      role
    }
    playtime
    slug
    image {
      url
    }
  }
`
