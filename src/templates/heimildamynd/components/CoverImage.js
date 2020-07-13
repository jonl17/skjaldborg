import React from "react"
import Img from "gatsby-image"
import { CoverImageContainer } from "../styled"

const CoverImage = ({ image }) => {
  return (
    <CoverImageContainer>
      <Img style={{ height: "100%" }} fluid={image.childImageSharp.fluid} />
    </CoverImageContainer>
  )
}

export default CoverImage
