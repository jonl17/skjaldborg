import React from "react"

import { YearBox } from "./styled"

const Year = ({ year }) => {
  return (
    <YearBox bgImg={year.image}>
      <div className="slykjan"></div>
      <h1>{year.id}</h1>
    </YearBox>
  )
}

export default Year
