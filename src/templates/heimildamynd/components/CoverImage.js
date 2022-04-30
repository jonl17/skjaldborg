import Img from "gatsby-image"
import React from "react"
import { CoverImageContainer } from "../styled"

const CoverImage = ({ image }) => {
  return (
    <CoverImageContainer>
      {image.childImageSharp ? <Img style={{ height: "100%" }} fluid={image.childImageSharp.fluid} /> : <img className="h-full w-full object-cover" src={image} />}
    </CoverImageContainer>
  )
}

export default CoverImage
