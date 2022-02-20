import { graphql, useStaticQuery } from 'gatsby'
import '../cms/fragments/page'
import { pageResolver } from '../cms/resolvers'

export const useGetPages = () => {
  const result = useStaticQuery(graphql`
    {
      allPrismicPage(filter: { tags: { in: "info-page" } }) {
        nodes {
          ...pageFragment
        }
      }
    }
  `)

  return result.allPrismicPage.nodes.map((node) => pageResolver(node))
}
