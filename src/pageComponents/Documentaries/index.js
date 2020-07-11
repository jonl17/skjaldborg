import React from "react"
import { Grid } from "../Sarpur/styled"
import Movie from "./movie"
import PageTitle from "../../reusableComponents/PageTitle"

const Documentaries = ({ docs, title }) => {
  return (
    docs && (
      <>
        <PageTitle nopad>{title}</PageTitle>
        <Grid>
          {docs.nodes.map((movie, index) => (
            <Movie pathname='/heimildamyndir' movie={movie} key={index}></Movie>
          ))}
        </Grid>
      </>
    )
  )
}

export default Documentaries
