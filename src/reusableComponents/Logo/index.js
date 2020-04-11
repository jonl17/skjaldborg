import React from "react"
import { Container } from "./styled"
import Logo from "./svg"

export default ({ footer, red }) => {
  return (
    <Container footer={footer ? "true" : "false"} to="/">
      <Logo color={red ? "red" : "white"}></Logo>
    </Container>
  )
}
