import React from 'react'
import { useGetSponsors } from '../../hooks/useGetSponsors'
import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'

const Sponsors = () => {
  const sponsors = useGetSponsors()
  const { firstRow, secondRow, honours } = sponsors
  return (
    <section className='bg-primary p-4 lg:p-8'>
      <h3 className='text-white text-center my-5'>Styrktaraðilar</h3>
      <div className='grid grid-cols-2 gap-5 lg:flex justify-between mb-10'>
        {firstRow.map((item, key) => (
          <a key={key} target='_blank' href={item.website.url}>
            <GatsbyImage
              objectFit='contain'
              className='h-56 w-40 max-h-[150px]'
              image={item.logo.gatsbyImageData}
              alt={item.logo.alt ?? ''}
            />
          </a>
        ))}
      </div>
      <div className='grid gap-5 grid-cols-2 lg:grid-cols-5 justify-between mb-10'>
        {secondRow.map((item, key) => (
          <a key={key} href={item.website.url} target='_blank'>
            <GatsbyImage
              objectFit='contain'
              className='h-56 w-40 max-h-[75px]'
              image={item.logo.gatsbyImageData}
              alt={item.logo.alt ?? ''}
            />
          </a>
        ))}
      </div>
      <div className='grid place-content-center'>
        {honours.map((item, key) => (
          <a key={key} target='_blank' href={item.website.url}>
            <div className='h-56 flex justify-center text-white'>
              <GatsbyImage
                image={item.logo.gatsbyImageData}
                alt={item.logo.alt ?? ''}
                objectFit='contain'
                className='h-full lg:w-72'
              />
              <svg
                width='2'
                className='h-full ml-5 mr-10'
                viewBox='0 0 2 64'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path d='M1 0V64' stroke='white' strokeWidth='2' />
              </svg>

              <div className='w-72'>
                <p className='max-w-[100px] grid items-center h-full'>
                  {item.text}
                </p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}

export default Sponsors
