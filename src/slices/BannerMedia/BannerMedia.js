import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'

const BannerMedia = ({ image, video }) => {
  return (
    <section className='h-screen'>
      <GatsbyImage
        className='h-full w-full brightness-85'
        image={image.gatsbyImageData}
        alt={image.alt}
        objectPosition='top'
      />
    </section>
  )
}

export default BannerMedia
