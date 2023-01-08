import React from 'react'
import useSetPlatform from '../hooks/useSetPlatform'

/** components */
import { GlobalStyle } from './GlobalStyle'
import SEO from './seo'
import { useDispatch } from 'react-redux'
import { SET_PATHNAME } from '../state/action'
import Footer from './Footer'
import Header from './Header'
import NewMenu from './NewMenu'
import { useLang } from '../store'
import { useEffect } from 'react'
import { useLocation } from '@reach/router'

const Layout = ({ children, location }) => {
  useSetPlatform()
  const dispatch = useDispatch()
  React.useEffect(() => {
    dispatch({ type: SET_PATHNAME, pathname: location.pathname })
  }, [location.pathname, dispatch])

  const { toggleLang } = useLang()
  const { pathname } = useLocation()

  useEffect(() => {
    if (pathname.includes('/en')) {
      toggleLang('en')
    } else {
      toggleLang('is')
    }
  }, [pathname, toggleLang])

  return (
    <>
      {/* <SEO></SEO> */}
      <GlobalStyle></GlobalStyle>
      <Header />
      <main className='relative h-full w-full'>{children}</main>
      <Footer />
      <NewMenu />
    </>
  )
}

export default Layout
