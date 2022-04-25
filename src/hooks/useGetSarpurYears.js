import { graphql, useStaticQuery } from 'gatsby'

export const useGetSarpurYears = () => {
  const result = useStaticQuery(graphql`
    {
      premiers: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/frumsyningar/" } }
      ) {
        nodes {
          frontmatter {
            title
            image {
              publicURL
            }
          }
        }
      }
      wips: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/verk-i-vinnslu/" } }
      ) {
        nodes {
          frontmatter {
            title
            image {
              publicURL
            }
          }
        }
      }
      allSarpurYear(sort: { fields: year, order: DESC }) {
        nodes {
          id
          slug
          image
          year
          movies {
            id
            producer
            director
            content
            title
            trailerURL
            otherCredits {
              name
              role
            }
            playtime
            image {
              url
              filename
            }
          }
        }
      }
    }
  `)

  const newMovies = [...result.premiers.nodes, ...result.wips.nodes]

  const newYear = {
    year: '2020',
    slug: '/sarpur/2020',
    image: newMovies[2].frontmatter.image.publicURL,
    movies: newMovies,
  }

  const oldYears = result.allSarpurYear.nodes

  return [newYear, ...oldYears]
}
