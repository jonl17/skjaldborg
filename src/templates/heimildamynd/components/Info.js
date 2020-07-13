import React from "react"
import { InfoContainer } from "../styled"
import Content from "../../../reusableComponents/Content"

const Info = ({ html }) => {
  return (
    <InfoContainer>
      <Content html={html} />
    </InfoContainer>
  )
}

export default Info
