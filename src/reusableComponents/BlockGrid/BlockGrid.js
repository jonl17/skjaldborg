import { Link } from 'gatsby'
import React from 'react'
import { cleanUpTitle } from '../../utils'
import LinkBlock from '../LinkBlock'
import Arrow from '../Arrow'
import { useLang } from '../../store'
import { useLocation } from '@reach/router'

const BlockGrid = ({ items, title, showBackBtn = true }) => {
  const { lang } = useLang()
  const { pathname } = useLocation()
  return (
    <div className='mt-36'>
      <div className='text-center'>
        {showBackBtn && (
          <Link className='inline-flex' to='/sarpur'>
            <Arrow rotation='-180deg' />
            <h2 className='ml-4 text-xl text-tertiary'>
              {lang === 'is' ? 'Tilbaka' : 'Go back'}
            </h2>
          </Link>
        )}
        <h1 className='text-6xl mb-12 text-tertiary text-center'>
          {cleanUpTitle(title)}
        </h1>
      </div>

      <div className='grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5'>
        {items.map((item, key) => (
          <LinkBlock item={item} key={key} />
        ))}
      </div>
    </div>
  )
}

export default BlockGrid
