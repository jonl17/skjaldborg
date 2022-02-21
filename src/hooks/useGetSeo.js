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

  console.log(result)

  return result.prismicSeo.data
}
