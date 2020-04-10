import React from "react"
import FadeInSection from "../../techComponents/FadeInSection"

import { YearBox } from "./styled"

const Year = ({ year }) => {
  return (
    <FadeInSection intensity="10">
      <YearBox bgImg={year.image}>
        <div className="slykjan"></div>
        <h1>{year.id}</h1>
      </YearBox>
    </FadeInSection>
  )
}

export default Year
