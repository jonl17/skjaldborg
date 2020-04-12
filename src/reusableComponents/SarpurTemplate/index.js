import React from "react"
import { Container } from "./styled"
import PageTitle from "../PageTitle"
import { useSelector } from "react-redux"
import YearTitle from "./yearTitle"

// Sarpur yfirlit fyrir ár & myndir í hverju ári
const Template = ({ title, children, year }) => {
  const icelandic = useSelector(state => state.reducer.icelandic)
  return (
    <Container>
      <div className="content-wrap">
        <div className="title-wrap">
          <PageTitle style={{ textAlign: "center" }}>
            {icelandic ? title.is : title.en}
          </PageTitle>
          {year ? <YearTitle year={year}></YearTitle> : null}
        </div>
        {children}
      </div>
    </Container>
  )
}

export default Template
