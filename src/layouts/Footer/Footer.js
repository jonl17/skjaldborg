import React from 'react'
import Logo from '../../reusableComponents/Logo'
import { Link } from 'gatsby'
import PostList from '../../reusableComponents/Postlist'
import { useGetFooter } from '../../hooks/useGetFooter'
import { GatsbyImage } from 'gatsby-plugin-image'

const Footer = () => {
  const data = useGetFooter()

  return (
    <footer className='lg:h-96 bg-black text-secondary p-4 pb-10 lg:p-8'>
      <section className='grid gap-7 justify-center lg:flex lg:gap-0 lg:justify-between mt-20'>
        <div>
          <Link className='grid place-content-center' to='/'>
            <Logo />
          </Link>
          <p className='text-current text-center mt-3'>
            Hátið íslenskra <br /> heimildamynd
          </p>
        </div>

        <div className='text-center'>
          <h6>Contact</h6>
          <a href='mailto:skjaldborg@skjaldborg.is' className='underline'>
            <p>skjaldborg@skjaldborg.is</p>
          </a>
          <p>Kt: 6505090800</p>
        </div>

        <div>
          <PostList />
        </div>
      </section>
      <section className='grid grid-cols-2 gap-10 lg:grid-flow-col lg:h-20 max-w-2xl m-auto mt-10'>
        {data.sponsors.map((sponsor, key) => (
          <GatsbyImage
            className='h-full'
            objectFit='contain'
            image={sponsor.logo.gatsbyImageData}
            alt={sponsor.logo.alt}
          />
        ))}
      </section>
    </footer>
  )
}

export default Footer
