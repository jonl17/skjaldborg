import React from 'react'
import { Link } from 'gatsby'
import cn from 'classnames'

const LinkBlock = ({ item }) => {
  const [active, setActive] = React.useState(false)
  const toggleActive = (active) => setActive(active)

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
      </div>
    </Link>
  )
}

export default LinkBlock
