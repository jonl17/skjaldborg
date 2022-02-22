import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'

const BannerMedia = ({ image, video }) => {
  return (
    <section className='lg:h-[65vh]'>
      <GatsbyImage
        className='lg:h-full w-full brightness-85'
        image={image.gatsbyImageData}
        alt={image.alt}
        objectPosition='center'
      />
    </section>
  )
}

export default BannerMedia
