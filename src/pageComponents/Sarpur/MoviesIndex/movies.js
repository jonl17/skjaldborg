import React, { useState, useEffect } from "react"
import useGetFirebase from "../../../hooks/useGetFirebase"
import { docData } from "rxfire/firestore"
import { Grid } from "../styled"
import Movie from "./movie"

const Movies = ({ year }) => {
  const {
    isLoading,
    db: { firestore },
  } = useGetFirebase()
  const [movies, setMovies] = useState([])

  useEffect(() => {
    if (!isLoading) {
      let docRef = firestore.collection("sarpur").doc(year)
      const subscription = docData(docRef).subscribe(yearData => {
        setMovies(yearData.movies)
      })

      return () => subscription.unsubscribe()
    }
  }, [isLoading, firestore, year])

  if (isLoading) {
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

export default Movies
