import React from "react"

// components
import Template from "../../../reusableComponents/SarpurTemplate"
import Years from "./years"

// Árin yfirlitssíða
const Sarpur = () => {
  return (
    <Template title={{ is: "Sarpur", en: "Archive" }}>
      <Years></Years>
    </Template>
  )
}

export default Sarpur
