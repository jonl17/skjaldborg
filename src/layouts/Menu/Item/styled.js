import styled from "styled-components"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { greenColor, breakpoints } from "@constants"

export const Text = styled.h1`
  margin: 0;
  padding: 1rem;
`
export const Anchor = styled(AniLink)`
  text-decoration: none;
  padding: 0rem;
  color: white;
  font-size: 2.5rem;
  @media only screen and (min-width: ${breakpoints.desktop}) {
    font-size: 4rem;
    &&:hover {
      color: ${greenColor};
      cursor: pointer;
    }
  }
`
