import React from 'react'
import { Link } from 'gatsby'
import Logo from '../../reusableComponents/Logo'
import { useGetSeo } from '../../hooks/useGetSeo'
import cn from 'classnames'
import { useLocation } from '@reach/router'
import Burger from '../Burger'
import { useLang } from '../../store'

const Header = () => {
  const meta = useGetSeo()
  const { pathname } = useLocation()
  const { lang } = useLang()

  return (
    <header
      className={cn('absolute top-0 z-30 p-4 lg:p-8 text-secondary', {
        'text-secondary': pathname === '/' || pathname === '/en',
        'text-tertiary': pathname !== '/' && pathname !== '/en',
      })}
    >
      <section className='grid gap-12 grid-flow-col'>
        <Link to={lang === 'is' ? '/' : '/en'}>
          <Logo />
        </Link>
        <div className='text-current'>
          <h6>{meta.date}</h6>
          <h6>{meta.place}</h6>
        </div>
        <Burger />
      </section>
    </header>
  )
}

export default Header
