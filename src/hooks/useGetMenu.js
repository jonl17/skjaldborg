import { graphql, useStaticQuery } from 'gatsby'
import '../cms/fragments/menu'

export const useGetMenu = () => {
  const result = useStaticQuery(graphql`
    {
      prismicMenu {
        ...menuFragment
      }
    }
  `)

  return result.prismicMenu.data.pages.map((node) => ({
    url: node.page.url,
    label: node.link_label,
  }))
}
