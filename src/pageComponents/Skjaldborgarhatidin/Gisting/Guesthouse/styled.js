import styled from "styled-components"
import Img from "gatsby-image"
import { greenTextColor, redColor } from "@constants"

export const Box = styled.div`
  text-decoration: none;
  color: inherit;
  .guesthouse-website-anchor {
    color: inherit;
    text-decoration: none;
  }
`
export const ImageContainer = styled.div`
  height: 15rem;
`
export const Image = styled(Img)`
  height: 100%;
`

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  .guesthouse-title {
    color: ${greenTextColor};
    font-size: 1.5rem;
    margin: 1rem 0;
    text-transform: uppercase;
  }
  .contact-details-wrap {
    display: flex;
    justify-content: space-between;
    padding-right: 2rem;
    p {
      margin: 0;
      color: ${redColor};
      font-family: les;
    }
    .guesthouse-map-anchor {
      color: inherit;
      color: ${redColor};
    }
  }
`
