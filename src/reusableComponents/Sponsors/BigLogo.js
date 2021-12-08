import React from "react"
import styled from "styled-components"
import RosSvg from "../../../static/assets/eyrarrosin.svg"

const Wrap = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: inherit;
  img {
    box-sizing: border-box;
    padding: 1rem;
    height: 12rem;
    @media (max-width: 600px) {
      width: 10rem;
    }
  }
  .detail-wrap {
    border-left: 2px solid white;
    box-sizing: border-box;
  }

  p {
    color: white;
    margin: 0.5rem 0 0.5rem 3rem;
    font-size: 1.1rem;
    @media (max-width: 600px) {
      margin-left: 1.5rem;
    }
  }
`

const BigLogo = ({ image, link, children }) => {
  return (
    <Wrap
      rel="noopener noreferrer"
      href={link}
      // href="https://listahatid.is/eyrarrosin/eyrarrosin"
      target="_blank"
    >
      <img src={image.url} alt="eyrarros-logo"></img>
      <div className="detail-wrap">
        {children}
        {/* <p>Handhafi</p>
        <p>Eyrarrósarinnar</p>
        <p>2020</p> */}
      </div>
    </Wrap>
  )
}

export default BigLogo
