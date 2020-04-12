import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import styled from "styled-components"
import { redColor, breakpoints } from "@constants"
import { useSelector } from "react-redux"
import Arrow from "../../../reusableComponents/Arrow"

const Anchor = styled(AniLink)`
  width: 100%;
  text-align: center;
  color: inherit;
  text-decoration: none;
  box-sizing: border-box;
  color: ${redColor};
  display: inline-flex;
  justify-content: space-evenly;
  align-items: center;
  transition: 0.2s;
  margin-bottom: 1rem;
  padding: 3rem;

  &&:hover {
    width: 85%;
  }
  @media only screen and (min-width: ${breakpoints.desktop}) {
    height: 5rem;
    margin-top: 50%;
  }
`

const Navigator = ({ next: { url, name, name_en } }) => {
  const icelandic = useSelector(state => state.reducer.icelandic)
  return (
    <Anchor direction="right" to={url} cover bg="#BCDCBA">
      <h2 className="titlar">{icelandic ? name : name_en}</h2>
      <Arrow></Arrow>
    </Anchor>
  )
}

export default Navigator
