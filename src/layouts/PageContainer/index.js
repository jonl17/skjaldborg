// components
// tech
import React from "react"
import { useSelector } from "react-redux"
import Burger from "../Burger"
import Cookies from "../Cookies"
import LangBtn from "../LangBtn"
import Menu from "../Menu"
import { Loader, PageWrap } from "./styled"


const PageContainer = ({ children, pathname }) => {
  const platform = useSelector(state => state.reducer.platform)

  return (
    <Loader opacity={platform}>
      <PageWrap>
        <Cookies></Cookies>
        <Burger></Burger>
        {platform !== "mobile" ? <LangBtn></LangBtn> : null}
        <Menu></Menu>
        <div>{children}</div>
      </PageWrap>
    </Loader>
  )
}

export default PageContainer
