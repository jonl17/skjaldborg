import React from "react"
import { ParticipantsWrap } from "./styled"
const Participants = ({ movie }) => {
  return (
    <ParticipantsWrap>
      {movie.director !== "" ? (
        <div className="item">
          <p className="role">Leikstjóri</p>
          <p className="name">{movie.director}</p>
        </div>
      ) : null}
      {movie.producer !== "" ? (
        <div className="item">
          <p className="role">Framleiðandi</p>
          <p className="name">{movie.producer}</p>
        </div>
      ) : null}
      {movie.otherCredits.map((item, index) => (
        <div key={index} className="item">
          <p className="role">{item.role}</p>
          <p className="name">{item.name}</p>
        </div>
      ))}
    </ParticipantsWrap>
  )
}

export default Participants
