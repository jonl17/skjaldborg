import React from 'react'
import LinkBlock from '../LinkBlock'

const BlockGrid = ({ items, title }) => {
  return (
    <div className='mt-36'>
      <h1 className='text-6xl mb-12 text-tertiary text-center'>{title}</h1>
      <div className='grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5'>
        {items.map((item, key) => (
          <LinkBlock item={item} key={key} />
        ))}
      </div>
    </div>
  )
}

export default BlockGrid
