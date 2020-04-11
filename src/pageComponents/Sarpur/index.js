import React from "react"
import { useSelector } from "react-redux"

// components
import { Container } from "./styled"
import PageTitle from "../../reusableComponents/PageTitle"
import Years from "./years"

const Sarpur = () => {
  const icelandic = useSelector(state => state.reducer.icelandic)
  return (
    <Container>
      <div className="content-wrap">
        <div className="title-wrap">
          <PageTitle style={{ textAlign: "center" }}>
            {icelandic ? "Sarpur" : "Archive"}
          </PageTitle>
        </div>
        <Years></Years>
      </div>
    </Container>
  )
}

export default Sarpur
