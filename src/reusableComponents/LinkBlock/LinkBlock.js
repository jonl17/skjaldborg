import React from 'react'
import { Link } from 'gatsby'
import cn from 'classnames'
import { useLang } from '../../store'

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
      default:
        return ''
    }
  }

  return (
    <Link
      to={item.slug}
      className='relative block'
      onMouseEnter={() => toggleActive(true)}
      onMouseLeave={() => toggleActive(false)}
    >
      <div className={cn('h-96 lg:h-72 brightness-75', {})}>
        <img
          className='h-full w-full object-cover z-0 pointer-events-none'
          src={item.image}
        />
      </div>
      <div className='absolute top-0 text-secondary p-4 grid place-content-center h-full w-full'>
        <h2 className='text-3xl text-center py-3'>{item.title}</h2>
        {item.type && (
          <h6 className='text-center absolute bottom-10 w-full'>
            {handleType(item.type)}
          </h6>
        )}
      </div>
    </Link>
  )
}

export default LinkBlock
