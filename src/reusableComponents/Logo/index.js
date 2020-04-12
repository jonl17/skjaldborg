import React from "react"
import { Container } from "./styled"
import Logo from "./svg"

export default ({ footer, color }) => {
  return (
    <Container footer={footer ? "true" : "false"} to="/">
      <Logo color={color}></Logo>
    </Container>
  )
}
