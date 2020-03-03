import React, { useEffect } from "react"
import { useDispatch } from "react-redux"
import { AUTHENTICATE } from "../state/action"
import useAuth from "../hooks/useAuth"
import useSetPlatform from "../hooks/useSetPlatform"
import "./font.css"

/** components */
import { GlobalStyle } from "./GlobalStyle"
import PageContainer from "./PageContainer"
import SEO from "./seo"

const Layout = ({ children, location }) => {
  const dispatch = useDispatch()

  useSetPlatform()

  const { isLoading, profile } = useAuth()

  useEffect(() => {
    if (!isLoading) {
      console.log("authenticating:" + profile)
      dispatch({ type: AUTHENTICATE, profile: profile })
    }
  }, [isLoading, dispatch, profile])

  return (
    <>
      <SEO></SEO>
      <GlobalStyle></GlobalStyle>
      <PageContainer pathname={location.pathname}>{children}</PageContainer>
    </>
  )
}

export default Layout
