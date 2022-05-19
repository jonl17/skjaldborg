import { graphql } from 'gatsby'
import React from 'react'
import PageContainer from '../../layouts/PageContainer'
import Banner from './components/Banner'
import CoverImage from './components/CoverImage'
import Info from './components/Info'

const MarkDownMovie = ({ data: { movie } }) => {
  const { html, frontmatter } = movie

  const participants = [
    { key: 'director', name: frontmatter.director },
    { key: 'producer', name: frontmatter.producer },
    { key: 'production_company', name: frontmatter.production_company },
    { key: 'editing', name: frontmatter.editing },
    { key: 'filming', name: frontmatter.filming },
    { key: 'composer', name: frontmatter.composer },
    { key: 'sound_desing', name: frontmatter.sound_design },
  ]

  return (
    <>
      <PageContainer>
        <CoverImage image={frontmatter.image} />
        <Banner
          backLink='/sarpur/2020'
          title={frontmatter.title}
          title_en={frontmatter.title_en}
          director={frontmatter.director}
          year='2020'
        />
        <Info
          html={html}
          dates={frontmatter.dagskra}
          participants={participants}
        />
      </PageContainer>
    </>
  )
}

export const query = graphql`
  query($id: String!) {
    movie: markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        title_en
        image {
          childImageSharp {
            fluid(quality: 85) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        Trailer
        director
        producer
        production_company
        editing
        filming
        composer
        sound_design
        dagskra
      }
    }
  }
`

export default MarkDownMovie
