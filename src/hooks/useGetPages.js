import { graphql, useStaticQuery } from 'gatsby'
import '../cms/fragments/page'
import { pageResolver } from '../cms/resolvers'

export const useGetPages = (lang) => {
  const result = useStaticQuery(graphql`
    {
      allPrismicPage(filter: { tags: { in: "info-page" } }) {
        nodes {
          ...pageFragment
        }
      }
    }
  `)

  return result.allPrismicPage.nodes
    .filter((node) => node.lang.slice(0, 2) === lang)
    .map((node) => pageResolver(node))
}
