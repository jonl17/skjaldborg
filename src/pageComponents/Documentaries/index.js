import React from "react"
import { Grid } from "../Sarpur/styled"
import Movie from "./movie"
import PageTitle from "../../reusableComponents/PageTitle"
import { Fade } from "react-reveal"

const Documentaries = ({ docs, title }) => {
  return (
    docs && (
      <>
        <PageTitle nopad>{title}</PageTitle>
        <Grid>
          {docs.nodes.map((movie, index) => (
            <Fade bottom distance='25px' delay={index * 50}>
              <Movie movie={movie} key={index}></Movie>
            </Fade>
          ))}
        </Grid>
      </>
    )
  )
}

export default Documentaries
