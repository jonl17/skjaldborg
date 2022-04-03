import { graphql, useStaticQuery } from 'gatsby'
import '../cms/fragments/seo'

export const useGetSeo = () => {
  const result = useStaticQuery(graphql`
    {
      prismicSeo {
        ...seoFragment
      }
    }
  `)

  return result.prismicSeo.data
}
