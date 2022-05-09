import { graphql, useStaticQuery } from 'gatsby'
import '../cms/fragments/movie'

const resolver = (node) => ({
  url: node.url,
  uid: node.uid,
  title: node.data.title.text,
  description: node.data.description,
  image: node.data.featured_image,
  director: node.data.director,
  type: node.data.type,
  scheduled: node.data.scheduled,
  otherRoles: node.data.other_roles,
})

export const useGetMovies = (lang = 'is') => {
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
    .filter((node) => node.lang.slice(0, 2) === lang)
    .map(resolver)
}
