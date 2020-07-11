import React, { useState, useEffect, useContext } from "react"
import { Grid } from "../Sarpur/styled"
import Movie from "./movie"
import { RootContext } from "../../context/main"

const Documentaries = ({ docs }) => {
  return (
    docs && (
      <Grid>
        {docs.nodes.map((movie, index) => (
          <Movie movie={movie} key={index}></Movie>
        ))}
      </Grid>
    )
  )
}

export default Documentaries
