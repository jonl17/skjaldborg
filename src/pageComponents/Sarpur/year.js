import React from "react"
import FadeInSection from "../../techComponents/FadeInSection"

import { YearBox } from "./styled"

const Year = ({ year }) => {
  return (
    <FadeInSection intensity="10">
      <YearBox
        to={"/sarpur/" + year.id}
        style={{ backgroundImage: `url(${year.image})` }}
      >
        <div className="slykjan"></div>
        <h1>{year.id}</h1>
      </YearBox>
    </FadeInSection>
  )
}

export default Year
