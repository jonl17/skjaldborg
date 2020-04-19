import styled from "styled-components"
import { redColor, breakpoints } from "@constants"
import AniLink from "gatsby-plugin-transition-link/AniLink"

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 0rem;
  width: 100%;
  margin: 0 auto;
  padding: 0;
  box-sizing: border-box;
  margin-top: -3.5rem;
  grid-auto-rows: minmax(15rem, 20rem);

  /** desktop */
  @media only screen and (min-width: ${breakpoints.desktop}) {
    grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
    grid-auto-rows: 27vw;
    padding: 1rem;
    grid-gap: 1rem;
    margin-top: 0;
  }
`
export const Box = styled(AniLink)`
  background: ${redColor};
  color: inherit;
  text-decoration: none;
  position: relative;
  overflow: hidden;
  img {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    object-fit: cover;
    opacity: 0.7;
    transition: 0.5s ease-in-out;
  }
  img:hover {
    transform: scale(1.05);
  }
  p {
    color: white;
    font-size: 1.5rem;
    text-align: center;
    text-transform: uppercase;
    position: absolute;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    @media only screen and (min-width: ${breakpoints.desktop}) {
      height: auto;
    }
  }
`
export const FillerImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  object-fit: cover;
  opacity: 0.7;
  transition: 0.5s ease-in-out;
  ${Box}:hover & {
    transform: scale(1.05);
  }
`
