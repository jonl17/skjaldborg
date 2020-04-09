import React, { useEffect, useState } from "react"
import useGetFirebase from "../../hooks/useGetFirebase"
import { collectionData } from "rxfire/firestore"

// components
import { Grid } from "./styled"
import Year from "./year"

const Years = () => {
  const {
    isLoading,
    db: { firestore },
  } = useGetFirebase()
  const [years, setYears] = useState([])

  useEffect(() => {
    if (!isLoading) {
      collectionData(firestore.collection("sarpur"), "id").subscribe(items => {
        setYears(items)
      })
    }
  }, [isLoading, firestore])

  if (!isLoading) {
    return (
      <Grid>
        {years
          .slice(0)
          .reverse()
          .map((year, index) => (
            <Year key={index} year={year}></Year>
          ))}
      </Grid>
    )
  } else return null
}

export default Years
