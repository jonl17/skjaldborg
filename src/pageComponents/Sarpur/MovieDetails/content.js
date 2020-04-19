import React, { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { ContentWrap } from "./styled"
import Participants from "./participants"

const Content = ({ movie }) => {
  let pathname = useSelector(state => state.reducer.pathname)
  pathname = pathname.replace(movie.id, "")
  const [src, setSrc] = useState("")
  useEffect(() => {
    const fallbackPic =
      "https://res.cloudinary.com/dynkhs6v9/image/upload/c_scale,f_auto,q_auto,w_937/v1586956574/images/skjaldborg_tomsaeti_zrrv5o.png"
    if (movie.image && movie.image.filename !== "") {
      let url =
        "https://res.cloudinary.com/dynkhs6v9/image/upload/c_scale,q_auto,w_960/v1586423368" +
        pathname +
        "/" +
        movie.image.filename +
        ".jpg"

      fetch(url).then(resp => {
        if (resp.status === 404) setSrc(fallbackPic)
        else setSrc(url)
      })
    }
  }, [movie, pathname])
  return (
    <ContentWrap>
      <div className="main-box">
        <Participants movie={movie}></Participants>
        <div className="text-image-wrap">
          <div
            className="text"
            dangerouslySetInnerHTML={{ __html: movie.content }}
          ></div>
          <div className="image">
            <img alt={movie.title} src={src}></img>
          </div>
        </div>
      </div>
    </ContentWrap>
  )
}

export default Content
