import React from "react"
import { useSelector } from "react-redux"
import slugify from "slugify"
import { BackupBox, GridBox, GridItemWrap } from "../Sarpur/styled"

const Movie = ({ movie, pathname }) => {
  const icelandic = useSelector(state => state.reducer.icelandic)
  if (movie) {
    return (
      <GridItemWrap>
        <BackupBox></BackupBox>
        <GridBox
          to={
            pathname + "/" + slugify(movie.frontmatter.title, { lower: true, remove: /[*+~.()'"!:@]/g })
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
      </GridItemWrap >
    )
  } else return null
}

export default Movie
