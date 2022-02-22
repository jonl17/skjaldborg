import { graphql, useStaticQuery } from 'gatsby'
import '../cms/fragments/sponsors'

const resolver = (node) => ({
  firstRow: node.data.first_row,
  secondRow: node.data.second_row,
  honours: node.data.honours,
})

export const useGetSponsors = () => {
  const result = useStaticQuery(graphql`
    {
      prismicSponsors {
        ...sponsorsFragment
      }
    }
  `)

  return resolver(result.prismicSponsors)
}
