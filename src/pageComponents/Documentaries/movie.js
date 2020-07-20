import React, { useState } from "react"
import { GridBox, BackupBox, GridItemWrap } from "../Sarpur/styled"
import { useSelector } from "react-redux"
import slugify from "slugify"

const Movie = ({ movie, pathname }) => {
  const icelandic = useSelector(state => state.reducer.icelandic)
  if (movie) {
    return (
      <GridItemWrap>
        <BackupBox></BackupBox>
        <GridBox
          to={
            pathname + "/" + slugify(movie.frontmatter.title, { lower: true })
          }
          style={{
            backgroundImage: `url(${movie.frontmatter.image.childImageSharp.fluid.src})`,
          }}
        >
          <div className='slykjan'></div>
          {!icelandic && movie.frontmatter.title_en ? (
            <h1
              dangerouslySetInnerHTML={{ __html: movie.frontmatter.title_en }}
            ></h1>
          ) : (
            <h1
              dangerouslySetInnerHTML={{ __html: movie.frontmatter.title }}
            ></h1>
          )}
        </GridBox>
      </GridItemWrap>
    )
  } else return null
}

export default Movie
