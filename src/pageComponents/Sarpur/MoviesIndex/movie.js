import React, { useEffect, useState } from "react"
import { GridBox } from "../styled"
import { useSelector } from "react-redux"

const Movie = ({ movie }) => {
  const pathname = useSelector(state => state.reducer.pathname)
  const [src, setSrc] = useState("")
  useEffect(() => {
    const fallbackPic =
      "https://res.cloudinary.com/dynkhs6v9/image/upload/c_scale,f_auto,q_auto,w_710/v1586345013/images/skjaldborg_logo.jpg"
    if (movie.image && movie.image.filename !== "") {
      let url =
        "https://res.cloudinary.com/dynkhs6v9/image/upload/c_scale,q_auto,w_960/v1586423368" +
        pathname +
        "/" +
        movie.image.filename +
        ".jpg"

      fetch(url).then(resp => {
        if (!resp.ok) setSrc(fallbackPic)
        else setSrc(url)
      })
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
