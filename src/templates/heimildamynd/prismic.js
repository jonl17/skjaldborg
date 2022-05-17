import { graphql } from 'gatsby'
import React from 'react'
import PageContainer from '../../layouts/PageContainer'
import Banner from './components/Banner'
import CoverImage from './components/CoverImage'
import Info from './components/Info'

import '../../cms/fragments/movie'
import { movieResolver } from '../../cms/resolvers'

const PrismicMovie = ({ data, pageContext }) => {
  const movie = movieResolver(data.prismicMovie)

  return (
    <>
      <PageContainer>
        <CoverImage image={movie.image} />
        <Banner
          title={movie.title}
          title_en=''
          director={movie.director}
          year='2022'
          backLink={
            movie.lang === 'is' ? '/heimildamyndir' : '/en/documentaries'
          }
        />
        <Info
          html={movie.description.html}
          dates={[movie.scheduled]}
          otherCredits={[
            { name: movie.director, role: 'Leikstjóri', roleEn: 'Director' },
            ...movie.otherRoles,
          ]}
          showDates
        />
      </PageContainer>
    </>
  )
}

export const query = graphql`
  query($id: String!, $lang: String!) {
    prismicMovie(id: { eq: $id }, lang: { eq: $lang }) {
      ...movieFragmentFull
    }
  }
`

export default PrismicMovie
