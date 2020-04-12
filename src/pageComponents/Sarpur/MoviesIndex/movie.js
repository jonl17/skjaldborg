import React, { useEffect, useState } from "react"
import { GridBox } from "../styled"
import useGetFirebase from "../../../hooks/useGetFirebase"
import { docData } from "rxfire/firestore"
import { useSelector } from "react-redux"

const Movie = ({ movie }) => {
  const pathname = useSelector(state => state.reducer.pathname)
  const [src, setSrc] = useState("")
  useEffect(() => {
    console.log(movie)
    if (movie.image) {
      let url =
        "https://res.cloudinary.com/dynkhs6v9/image/upload/c_scale,q_auto,w_960/v1586423368" +
        pathname +
        "/" +
        movie.image.filename +
        ".jpg"

      setSrc(url)
    }
  }, [movie, pathname])
  if (movie) {
    return (
      <GridBox
        to={pathname + "/" + movie.id}
        style={{ backgroundImage: `url(${src})` }}
      >
        <div className="slykjan"></div>
        <h1 dangerouslySetInnerHTML={{ __html: movie.title }}></h1>
      </GridBox>
    )
  } else return null
}

export default Movie
