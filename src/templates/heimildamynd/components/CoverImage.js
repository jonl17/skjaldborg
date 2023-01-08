import Img from 'gatsby-image'
import { GatsbyImage } from 'gatsby-plugin-image'
import React from 'react'
import { CoverImageContainer } from '../styled'

const CoverImage = ({ image }) => {
  if (image.childImageSharp) {
    return (
      <CoverImageContainer>
        <Img
          alt='some random image'
          style={{ height: '100%' }}
          fluid={image.childImageSharp.fluid}
        />
      </CoverImageContainer>
    )
  } else if (image.gatsbyImageData) {
    return (
      <CoverImageContainer>
        <GatsbyImage
          objectFit='cover'
          className='w-full h-full'
          image={image.gatsbyImageData}
          alt={image.alt ?? ''}
        />
      </CoverImageContainer>
    )
  }

  return (
    <CoverImageContainer>
      <img alt='' className='h-full w-full object-cover' src={image} />
    </CoverImageContainer>
  )
}

export default CoverImage
