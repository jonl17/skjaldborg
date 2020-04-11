import styled from "styled-components"
import { greenColor } from "@constants"
import Img from "gatsby-image"
import { breakpoints } from "../../constants"

export const Container = styled.div`
  background: ${greenColor};
  padding: 3rem 3rem 7.5rem 3rem;
  position: relative;

  /** mobile */
  margin: 0;
  /** desktop */
  @media only screen and (min-width: ${breakpoints.desktop}) {
    margin: 0 0 7.5rem 0;
  }

  h1 {
    color: white;
    text-align: center;
    text-transform: uppercase;
    margin-top: 0;
    margin-bottom: 3rem;
  }
  div.sponsor-grid-top5 {
    display: flex;
    flex-wrap: wrap;
    box-sizing: border-box;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    flex-direction: column;
    @media (min-width: ${breakpoints.desktop}) {
      flex-direction: row;
    }
    @media (min-width: ${breakpoints.tablet}) {
      flex-direction: row;
    }
    img {
      max-width: 12rem;
      object-fit: contain;
      width: auto;
      height: 8rem;
      margin: 0 auto;
    }
    a {
      padding: 2.5rem 0 2.5rem 0;
      margin: 0 auto;
    }
  }
  div.sponsor-grid-rest {
    padding-top: 2rem;
    display: flex;
    flex-wrap: wrap;
    margin: 0 auto;
    align-items: center;
    justify-content: space-evenly;
    box-sizing: border-box;
    width: 100%;
    img {
      max-width: 7rem;
      object-fit: contain;
      height: 6rem;
      margin: 0;
    }
    a {
      padding: 1.5rem 0 1.5rem 0;
      margin: 0 auto;
    }
  }
`
export const Icon = styled.div`
  box-sizing: border-box;
`
export const Image = styled(Img)`
  height: 100%;
`
