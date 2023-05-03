import { graphql, useStaticQuery } from 'gatsby'
import '../cms/fragments/movie'
import { movieResolver } from '../cms/resolvers'

export const useGetMovies = (lang = 'is', year = new Date().getFullYear()) => {
  const result = useStaticQuery(graphql`
    {
      allPrismicMovie {
        nodes {
          lang
          ...movieFragmentFull
        }
      }
    }
  `)

  return result.allPrismicMovie.nodes
    .filter(
      (node) =>
        node.lang.slice(0, 2) === lang &&
        new Date(node.data.scheduled).getFullYear() === year
    )
    .map(movieResolver)
}
