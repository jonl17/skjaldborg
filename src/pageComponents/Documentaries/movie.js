import React, { useState } from "react"
import { GridBox, BackupBox, GridItemWrap } from "../Sarpur/styled"
import { useSelector } from "react-redux"

const Movie = ({ movie }) => {
  const pathname = useSelector(state => state.reducer.pathname)
  const [src, setSrc] = useState("")

  if (movie) {
    return (
      <GridItemWrap>
        <BackupBox></BackupBox>
        <GridBox
          to={pathname + "/" + movie.id}
          style={{ backgroundImage: `url(${src})` }}
        >
          <div className='slykjan'></div>
          <h1 dangerouslySetInnerHTML={{ __html: movie.title }}></h1>
        </GridBox>
      </GridItemWrap>
    )
  } else return null
}

export default Movie
