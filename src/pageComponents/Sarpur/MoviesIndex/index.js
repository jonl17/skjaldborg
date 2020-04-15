import React from "react"

// components
import Template from "../../../reusableComponents/SarpurTemplate"
import Movies from "./movies"

const SarpurYear = ({ year }) => {
  return (
    <Template
      link={"/sarpur"}
      year={year}
      title={{ is: "Sarpur", en: "Archive" }}
    >
      <Movies year={year}></Movies>
    </Template>
  )
}

export default SarpurYear
