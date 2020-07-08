import React, { useState, useEffect, useContext } from "react"
import { collectionData } from "rxfire/firestore"
import { Grid } from "../Sarpur/styled"
import Movie from "./movie"
import { RootContext } from "../../context/main"

const Documentaries = ({ year }) => {
  const { firestore } = useContext(RootContext)

  const [movies, setMovies] = useState([])

  useEffect(() => {
    if (firestore) {
      let docRef = firestore.collection("movies")
      const subscription = collectionData(docRef).subscribe(movies => setMovies(movies))
      return () => subscription.unsubscribe()
    }
  }, [firestore, year])

  if (!firestore) {
    return null
  } else {
    return (
      <Grid>
        {movies.map((movie, index) => (
          <Movie movie={movie} key={index}></Movie>
        ))}
      </Grid>
    )
  }
}

export default Documentaries
