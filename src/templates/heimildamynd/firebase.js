import { graphql } from 'gatsby'
import React from 'react'
import PageContainer from '../../layouts/PageContainer'
import { handleCloudinaryImage } from '../../utils'
import Banner from './components/Banner'
import CoverImage from './components/CoverImage'
import Info from './components/Info'

const MarkDownMovie = ({ data, pageContext }) => {

  const { year } = pageContext
  const { title, content, director, producer, otherCredits } = data.sarpurMovie

  const cloudinaryImg = handleCloudinaryImage(data.sarpurMovie, year)

  const participants = [
    { key: 'director', name: director },
    { key: 'producer', name: producer }
  ]

  return (
    <>
      <PageContainer>
        <CoverImage image={cloudinaryImg} />
        <Banner title={title} director={director} year={year} />
        <Info html={content} dates={[]} participants={participants} otherCredits={otherCredits} />
      </PageContainer>
    </>
  )
}

export const query = graphql`
  query($id: String!) {
    sarpurMovie (id: {eq: $id}) {
      title
      image {
        filename
        url
      }
      content
      director
      producer
      otherCredits {
        name
        role
      }
    }
  }
`

export default MarkDownMovie
