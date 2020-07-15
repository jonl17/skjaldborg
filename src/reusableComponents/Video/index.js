import React from "react"
import styled from "styled-components"

const Player = styled.iframe`
  height: 350px;
  width: 600px;
`

const Video = ({ src, className = "" }) => {
  return (
    <div className={className}>
      <Player frameBorder='0' allowFullScreen src={src} />
    </div>
  )
}

export default Video
