import React from "react"
import { Container } from "./styled"

const Text = ({ meta, about, footer, red }) => {
  return (
    <Container color={red ? "red" : "white"}>
      {about ? (
        <>
          <h1 className="titlar">{meta.title}</h1>
          <p>{meta.subtitle}</p>
        </>
      ) : (
        <>
          <p>{meta.period}</p>
          <p>{meta.location}</p>
        </>
      )}
    </Container>
  )
}

export default Text
