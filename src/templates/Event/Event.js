import { graphql } from 'gatsby'
import React from 'react'
import PageContainer from '../../layouts/PageContainer'
import Banner from '../heimildamynd/components/Banner'
import CoverImage from '../heimildamynd/components/CoverImage'
import Info from '../heimildamynd/components/Info'
import '../../cms/fragments/event'
import { eventResolver } from '../../cms/resolvers'
import { withPrismicPreview } from 'gatsby-plugin-prismic-previews'

const PrismicEvent = ({ data, pageContext }) => {
  const event = eventResolver(data.prismicEvent)

  return (
    <>
      <PageContainer>
        <CoverImage image={event.image} />
        <Banner
          title={event.title}
          title_en=''
          director={''}
          year='2022'
          backLink={event.lang === 'is' ? '/vidburdir' : '/en/events'}
          backLinkText={event.lang === 'is' ? 'Viðburðir 2022' : 'Events 2022'}
        />
        <Info
          html={event.description.html}
          dates={[event.scheduled]}
          otherCredits={[]}
          showDates
        />
      </PageContainer>
    </>
  )
}

export default withPrismicPreview(PrismicEvent)

export const query = graphql`
  query($id: String!, $lang: String!) {
    prismicEvent(id: { eq: $id }, lang: { eq: $lang }) {
      _previewable
      ...eventFragmentFull
    }
  }
`
