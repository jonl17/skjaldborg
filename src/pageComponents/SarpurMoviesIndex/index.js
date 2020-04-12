import React from "react"

// components
import Template from "../../reusableComponents/SarpurTemplate"

const SarpurYear = ({ year }) => {
  return (
    <Template year={year} title={{ is: "Sarpur", en: "Archive" }}></Template>
  )
}

export default SarpurYear
