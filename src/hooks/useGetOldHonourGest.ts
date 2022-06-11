import { graphql, useStaticQuery } from 'gatsby'

export const useGetOldHonourGuest = () => {
  const result: Queries.OldHonourGuestsQuery = useStaticQuery(graphql`
    query OldHonourGuests {
      allMarkdownRemark(
        filter: { frontmatter: { honour_guest: { eq: true } } }
      ) {
        nodes {
          frontmatter {
            title
            director
            title_en
            image {
              childImageSharp {
                gatsbyImageData
              }
            }
            director
            producer
            production_company
            editing
            filming
            honour_guest
          }
        }
      }
    }
  `)

  return result.allMarkdownRemark.nodes
}
