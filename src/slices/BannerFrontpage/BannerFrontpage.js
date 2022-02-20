import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'
import NewButton from '../../reusableComponents/NewButton'

const BannerFrontpage = ({ image, link }) => {
  return (
    <section className='h-screen relative'>
      <GatsbyImage
        className='h-full w-full'
        image={image.gatsbyImageData}
        alt={image.alt}
      />
      <div className='absolute top-0 left-0 h-full w-full'>
        <div className='h-full w-full grid place-items-center'>
          <NewButton external onClick={link.url}>
            {link.label}
          </NewButton>
        </div>
      </div>
    </section>
  )
}

export default BannerFrontpage
