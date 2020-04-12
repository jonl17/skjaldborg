import React from "react"
import FadeInSection from "../../../techComponents/FadeInSection"

import { GridBox } from "../styled"

const Year = ({ year }) => {
  return (
    <FadeInSection intensity="10">
      <GridBox
        to={"/sarpur/" + year.id}
        style={{ backgroundImage: `url(${year.image})` }}
      >
        <div className="slykjan"></div>
        <h1>{year.id}</h1>
      </GridBox>
    </FadeInSection>
  )
}

export default Year
