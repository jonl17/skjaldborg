import { graphql, useStaticQuery } from 'gatsby'
import '../cms/fragments/menu'

export const useGetMenu = (lang) => {
  const result = useStaticQuery(graphql`
    {
      allPrismicMenu {
        nodes {
          lang
          ...menuFragment
        }
      }
    }
  `)

  const menu = result.allPrismicMenu.nodes.filter(
    (node) => node.lang.slice(0, 2) === lang
  )

  return menu[0].data.pages.map((node) => ({
    url: node.page.url,
    label: node.link_label,
  }))
}
