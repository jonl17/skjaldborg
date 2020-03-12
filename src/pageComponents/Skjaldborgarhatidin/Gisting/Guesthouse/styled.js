import styled from "styled-components"
import Img from "gatsby-image"
import {
  greenTextColor,
  redColor,
} from "../../../../layouts/PageContainer/styled"

export const Box = styled.a`
  text-decoration: none;
  color: inherit;
`
export const ImageContainer = styled.div``
export const Image = styled(Img)``

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
    .guesthouse-anchor {
      color: inherit;
    }
  }
`
