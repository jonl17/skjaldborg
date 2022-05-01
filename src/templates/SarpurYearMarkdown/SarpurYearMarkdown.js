import { graphql } from 'gatsby'
import React from 'react'
import BlockGrid from '../../reusableComponents/BlockGrid/BlockGrid'
import { cleanUpSlug } from '../../utils'

const SarpurYearMarkdown = ({ data }) => {
  const movieArr = [
    ...data.premiers.nodes.map((node) => ({
      ...node,
      type: 'premiere',
    })),
    ...data.wips.nodes.map((node) => ({
      ...node,
      type: 'wip',
    })),
  ]

  return (
    <section className='h-full relative p-4 lg:p-8'>
      <BlockGrid
        title='Sarpur 2020'
        items={movieArr
          .sort((a, b) => {
            if (a.frontmatter.title < b.frontmatter.title) return -1
            if (a.frontmatter.title > b.frontmatter.title) return 1
            return 0
          })
          .map((movie) => ({
            image: movie.frontmatter.image.publicURL,
            title: movie.frontmatter.title,
            slug: cleanUpSlug(movie.frontmatter.title, '/sarpur/'),
            ...movie,
          }))}
      />
    </section>
  )
}

export const query = graphql`
  query {
    premiers: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/frumsyningar/" } }
    ) {
      nodes {
        id
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
        id
        frontmatter {
          title
          image {
            publicURL
          }
        }
      }
    }
  }
`

export default SarpurYearMarkdown