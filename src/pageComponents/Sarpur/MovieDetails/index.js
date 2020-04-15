import React, { useEffect, useState } from "react"
import useGetFirebase from "../../../hooks/useGetFirebase"
import { docData } from "rxfire/firestore"

// components
import Template from "../../../reusableComponents/SarpurTemplate"
import Content from "./content"

const Details = ({ id, year }) => {
  const {
    db: { firestore },
    isLoading,
  } = useGetFirebase()

  const [movie, setMovie] = useState(null)

  useEffect(() => {
    if (!isLoading) {
      let docRef = firestore.collection("sarpurMovies").doc(id)
      const subscription = docData(docRef).subscribe(data => {
        setMovie(data)
      })
      return () => subscription.unsubscribe()
    }
  }, [isLoading, firestore, id])

  if (!isLoading && movie) {
    return (
      <Template
        link={"/sarpur/" + year}
        year={year}
        title={{ is: movie.title, en: movie.title }}
      >
        <Content movie={movie}></Content>
      </Template>
    )
  } else return null
}

export default Details
