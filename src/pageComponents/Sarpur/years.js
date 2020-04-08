import React from "react"
import { Grid, YearBox } from "./styled"
const years = [
  "2007",
  "2008",
  "2009",
  "2010",
  "2011",
  "2012",
  "2013",
  "2014",
  "2015",
  "2016",
  "2017",
  "2018",
  "2019",
]

const Years = () => {
  return (
    <Grid>
      {years.map((item, index) => (
        <YearBox key={index}>
          <h1>{item}</h1>
        </YearBox>
      ))}
    </Grid>
  )
}

export default Years
