import { graphql, useStaticQuery } from 'gatsby'

export const useGetSarpurMovies = () => {
  const result = useStaticQuery(graphql`
    {
      allSarpurMovie {
        nodes {
          id
          slug
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
          image {
            url
          }
        }
      }
    }
  `)

  const sarpurinn = result.allSarpur.nodes

  return sarpurinn
}
