import React from "react"
import useSetPlatform from "../hooks/useSetPlatform"
import "./font.css"

/** components */
import { GlobalStyle } from "./GlobalStyle"
import PageContainer from "./PageContainer"
import SEO from "./seo"
import { useDispatch } from "react-redux"
import { SET_PATHNAME } from "../state/action"

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
      <PageContainer pathname={location.pathname}>{children}</PageContainer>
    </>
  )
}

export default Layout
