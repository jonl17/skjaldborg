import React from "react"
import { Container } from "./styled"
import Fadeinsection from "../FadeInSection"

const Content = ({ html }) => {
  return (
    <Fadeinsection effectType="fader">
      <Container dangerouslySetInnerHTML={{ __html: html }}></Container>{" "}
    </Fadeinsection>
  )
}

export default Content
