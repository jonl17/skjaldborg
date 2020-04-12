import React from "react"
import Arrow from "../Arrow"
import styled from "styled-components"
import { Link } from "gatsby"
import { redColor } from "@constants"

const Container = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  max-width: 7.5rem;
  margin: 0 auto;
  h2 {
    color: ${redColor};
    margin: 0;
  }
`

const YearTitle = ({ year }) => {
  return (
    <Container to="/sarpur">
      <Arrow rotation={"-180deg"}></Arrow>
      <h2>{year}</h2>
    </Container>
  )
}

export default YearTitle
