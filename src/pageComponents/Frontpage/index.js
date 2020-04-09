import React from "react"
import { Container, SubmitBtnWrap } from "./styled"
import BigBtn from "../../reusableComponents/BigBtn"
import { graphql, StaticQuery } from "gatsby"
import ExcerptBtns from "../../reusableComponents/ExcerptBtns"
import Sponsors from "../../reusableComponents/Sponsors"

import TopVideo from "../../reusableComponents/TopImage/video"

import Footer from "../../layouts/Footer"
import Header from "../../layouts/Header"
import { useSelector } from "react-redux"
import Topimage from "../../reusableComponents/TopImage"

const Frontpage = ({ data: { imageSharp, video } }) => {
  const platform = useSelector(state => state.reducer.platform)
  const icelandic = useSelector(state => state.reducer.icelandic)
  return (
    <Container>
      <Header></Header>

      {platform === "shit" ? (
        <Topimage frontpage publicId={"cinema_uw8cmq"}></Topimage>
      ) : (
        <TopVideo
          frontpage
          videoSource="videos/Forsida_skura_xcbhav"
        ></TopVideo>
      )}

      <SubmitBtnWrap>
        <BigBtn
          frontpage
          text={icelandic ? "Senda inn mynd" : "Submit a film"}
          action="/umsokn"
        ></BigBtn>
      </SubmitBtnWrap>
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
            ...GatsbyImageSharpFluid_noBase64
          }
        }
        video: file(name: { eq: "Forsida_skura" }) {
          publicURL
        }
      }
    `}
    render={data => <Frontpage data={data} {...props}></Frontpage>}
  ></StaticQuery>
)
