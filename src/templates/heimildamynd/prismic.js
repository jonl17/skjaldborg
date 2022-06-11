import { graphql } from 'gatsby'
import React from 'react'
import PageContainer from '../../layouts/PageContainer'
import Banner from './components/Banner'
import CoverImage from './components/CoverImage'
import Info from './components/Info'
import '../../cms/fragments/movie'
import { movieResolver } from '../../cms/resolvers'
import { withPrismicPreview } from 'gatsby-plugin-prismic-previews'
import { Helmet } from 'react-helmet'
import SEO from '../../reusableComponents/SEO'

const PrismicMovie = ({ data, pageContext }) => {
  const movie = movieResolver(data.prismicMovie)

  return (
    <>
      <SEO
        title={movie.title}
        description={movie.excerpt.text}
        image={movie.image}
      />
      <PageContainer>
        <CoverImage image={movie.image} />
        <Banner
          title={movie.title}
          title_en=''
          director={movie.director}
          year='2022'
          backLink={movie.lang === 'is' ? '/verk-2022' : '/en/works-2022'}
          backLinkText={
            movie.lang === 'is' ? 'Öll verk 2022' : 'All works 2022'
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

export default withPrismicPreview(PrismicMovie)

export const query = graphql`
  query($id: String!, $lang: String!) {
    prismicMovie(id: { eq: $id }, lang: { eq: $lang }) {
      _previewable
      ...movieFragmentFull
    }
  }
`
