import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'

const BannerMedia = ({ image, video }) => {
  return (
    <section className='h-screen'>
      <GatsbyImage
        className='h-full w-full'
        image={image.gatsbyImageData}
        alt={image.alt}
      />
    </section>
  )
}

export default BannerMedia
