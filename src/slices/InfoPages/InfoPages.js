import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { useGetPages } from '../../hooks/useGetPages'
import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import { useLocation } from '@reach/router'
import { useLang } from '../../store'

const InfoPages = () => {
  const { lang } = useLang()
  const pages = useGetPages(lang)
  return (
    <section className='excerpt-buttons px-5 py-10'>
      <div className='grid lg:grid-flow-col gap-5'>
        {pages.map((page, key) => (
          <Link className='h-96 relative' to={page.url}>
            <GatsbyImage
              className='h-full w-full brightness-75'
              image={page.featuredImage.gatsbyImageData}
              alt={page.featuredImage.alt}
            />
            <div className='absolute h-full top-0 left-0 w-full text-center'>
              <h3 className='text-white mt-10'>{page.title}</h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}

export default InfoPages
