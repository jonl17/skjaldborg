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

  const frontpage = pathname === '/' || pathname === '/en'

  return (
    <header
      className={cn('absolute top-0 z-30 p-4 lg:p-8 text-secondary', {
        'text-secondary': frontpage,
        'text-tertiary': !frontpage,
      })}
    >
      <section className='lg:grid gap-12 grid-flow-col'>
        <Link to={lang === 'is' ? '/' : '/en'}>
          <Logo />
        </Link>
        <div
          className={cn('mt-7 lg:mt-0', {
            'text-secondary': frontpage,
            'text-tertiary': !frontpage,
          })}
        >
          <h6 className='text-current'>{meta.date}</h6>
          <h6 className='text-current'>{meta.place}</h6>
        </div>
        <Burger />
      </section>
    </header>
  )
}

export default Header
