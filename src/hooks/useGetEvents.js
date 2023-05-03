import { graphql, useStaticQuery } from 'gatsby'
import '../cms/fragments/event'
import { eventResolver } from '../cms/resolvers'

export const useGetEvents = (lang = 'is', year = new Date().getFullYear()) => {
  const result = useStaticQuery(graphql`
    {
      allPrismicEvent {
        nodes {
          lang
          ...eventFragmentFull
        }
      }
    }
  `)

  return result.allPrismicEvent.nodes
    .filter(
      (node) =>
        node.lang.slice(0, 2) === lang &&
        new Date(node.data.scheduled).getFullYear() === year
    )
    .map(eventResolver)
}
