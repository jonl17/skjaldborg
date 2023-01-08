import { graphql, useStaticQuery } from 'gatsby'
import '../cms/fragments/event'
import { eventResolver } from '../cms/resolvers'

export const useGetEvents = (lang = 'is') => {
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
    .filter((node) => node.lang.slice(0, 2) === lang)
    .map(eventResolver)
}
