import React from 'react'
import useSetPlatform from '../hooks/useSetPlatform'

/** components */
import { GlobalStyle } from './GlobalStyle'
import PageContainer from './PageContainer'
import SEO from './seo'
import { useDispatch } from 'react-redux'
import { SET_PATHNAME } from '../state/action'
import Footer from './Footer'
import Header from './Header'
import NewMenu from './NewMenu'

const Layout = ({ children, location }) => {
  useSetPlatform()
  const dispatch = useDispatch()
  React.useEffect(() => {
    dispatch({ type: SET_PATHNAME, pathname: location.pathname })
  }, [location.pathname, dispatch])

  return (
    <>
      <SEO></SEO>
      <GlobalStyle></GlobalStyle>
      <Header />
      <main className='relative h-full w-full'>{children}</main>
      <Footer />
      <NewMenu />
    </>
  )
}

export default Layout
