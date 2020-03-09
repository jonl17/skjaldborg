import React from "react"
import { Container } from "./styled"
import TopImage from "../../reusableComponents/TopImage"
import BigBtn from "../../reusableComponents/BigBtn"
import { graphql, StaticQuery } from "gatsby"
import ExcerptBtns from "../../reusableComponents/ExcerptBtns"
import Sponsors from "../../reusableComponents/Sponsors"

import Footer from "../../layouts/Footer"
import Header from "../../layouts/Header"

const Frontpage = ({ data: { imageSharp } }) => {
  return (
    <Container>
      <Header></Header>

      <TopImage frontpage image={imageSharp}></TopImage>

      <BigBtn text="Innsending mynda 2020" action="/umsokn"></BigBtn>

      <ExcerptBtns />

      <Sponsors></Sponsors>

      <Footer></Footer>
    </Container>
  )
}

export default props => (
  <StaticQuery
    query={graphql`
      {
        imageSharp(fluid: { originalName: { eq: "cinema.jpg" } }) {
          fluid(
            maxHeight: 2000
            traceSVG: { color: "rgb(190, 69, 69)" }
            toFormat: JPG
          ) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    `}
    render={data => <Frontpage data={data} {...props}></Frontpage>}
  ></StaticQuery>
)