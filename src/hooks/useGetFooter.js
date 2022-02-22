import { graphql, useStaticQuery } from 'gatsby'
import '../cms/fragments/footer'

export const useGetFooter = () => {
  const result = useStaticQuery(graphql`
    {
      prismicFooter {
        ...footerFragment
      }
    }
  `)

  return result.prismicFooter.data
}
