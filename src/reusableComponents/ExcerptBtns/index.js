import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import { Container, Box } from './styled'
import Fadeinsection from '../../techComponents/FadeInSection'
import { useSelector } from 'react-redux'
import { Image, Transformation } from 'cloudinary-react'
import { Link } from 'gatsby'

const ExcerptBtns = ({
  data: {
    site: {
      siteMetadata: { dropdownpages },
    },
  },
}) => {
  const icelandic = useSelector((state) => state.reducer.icelandic)
  return (
    <section className='lg:h-[400px] lg:flex justify-evenly'>
      {dropdownpages.map((page, index) => (
        <Link
          to={page.slug}
          key={index}
          className='h-full w-full relative text-white '
        >
          <Image
            cloudName={process.env.GATSBY_CLOUDINARY_CLOUD_NAME}
            publicId={page.image}
            secure
            className='h-full w-full object-cover'
          >
            <Transformation quality='auto' fetchFormat='auto' />
          </Image>
          <span className='absolute top-0 left-0 h-full w-full bg-black opacity-10' />
          <div className='grid place-items-center h-full text-center w-full absolute top-0 hover:bg-primary transition-all'>
            <h3 className=''>{icelandic ? page.name : page.name_en}</h3>
          </div>
        </Link>
      ))}
    </section>
  )
}

export default (props) => (
  <StaticQuery
    query={graphql`
      {
        site {
          siteMetadata {
            dropdownpages {
              name
              name_en
              slug
              image
            }
          }
        }
      }
    `}
    render={(data) => <ExcerptBtns data={data} {...props} />}
  ></StaticQuery>
)
