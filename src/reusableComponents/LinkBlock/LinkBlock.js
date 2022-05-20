import cn from 'classnames'
import { Link } from 'gatsby'
import React from 'react'
import { useLang } from '../../store'
import { cleanUpTitle } from '../../utils'
import { GatsbyImage } from 'gatsby-plugin-image'

const LinkBlock = ({ item }) => {
  const [active, setActive] = React.useState(false)
  const toggleActive = (active) => setActive(active)

  const { lang } = useLang()

  const handleType = (type) => {
    switch (type) {
      case 'premiere':
        return lang === 'is' ? 'Frumsýning' : 'Premiere'
      case 'wip':
        return lang === 'is' ? 'Verk i vinnslu' : 'Work in progress'
      case 'regular':
        return lang === 'is' ? 'Sýning' : 'Screening'
      default:
        return ''
    }
  }

  return (
    <Link
      to={item.slug}
      className='relative block overflow-hidden'
      onMouseEnter={() => toggleActive(true)}
      onMouseLeave={() => toggleActive(false)}
    >
      <div className={cn('h-96 lg:h-72 brightness-75', {})}>
        {item.image.gatsbyImageData ? (
          <GatsbyImage
            objectFit='cover'
            className='w-full h-full'
            image={item.image.gatsbyImageData}
            alt={item.image.alt ?? ''}
          />
        ) : (
          <img
            className='h-full w-full object-cover z-0 pointer-events-none'
            src={item.image}
            alt={item.image.alt ?? ''}
          />
        )}
      </div>
      <div
        className={cn(
          'absolute top-0 text-secondary p-4 grid place-content-center h-full w-full transition-colors',
          {
            'bg-primary/40': active,
          }
        )}
      >
        <h2 className='text-3xl text-center py-3 text-secondary'>
          {cleanUpTitle(item.title)}
        </h2>
        {item.type && (
          <h6 className='text-center absolute bottom-10 w-full text-secondary'>
            {handleType(item.type)}
          </h6>
        )}
      </div>
    </Link>
  )
}

export default LinkBlock
