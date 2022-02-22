import React from 'react'
import { useGetMenu } from '../../hooks/useGetMenu'
import { useLang, useMenu } from '../../store'
import cn from 'classnames'
import { Link } from 'gatsby'

const NewMenu = () => {
  const { lang } = useLang()
  const menu = useGetMenu(lang)
  const { open, toggleMenu } = useMenu()

  return (
    <nav
      className={cn(
        '  h-full fixed right-0 top-0 overflow-hidden transition-all w-full flex',
        {
          'translate-x-full': !open,
          'translate-x-0': open,
        }
      )}
    >
      <button
        className='w-1/2 hidden md:block'
        onClick={() => toggleMenu(false)}
      ></button>
      <div className='grid place-content-center relative h-full gap-10 w-full lg:w-1/2 bg-primary text-white'>
        <Link
          className='absolute bottom-12 lg:top-12 left-12 hover:text-secondary'
          to={lang === 'is' ? '/en' : '/'}
          onClick={() => toggleMenu(false)}
        >
          <h6>{lang === 'is' ? 'English' : 'Íslenska'}</h6>
        </Link>
        {menu.map((page, key) => (
          <Link
            to={page.url}
            key={key}
            activeClassName='text-secondary'
            className='hover:text-secondary'
            onClick={() => toggleMenu(false)}
          >
            <h1 className='text-4xl lg:text-6xl'>{page.label}</h1>
          </Link>
        ))}
      </div>
    </nav>
  )
}

export default NewMenu
