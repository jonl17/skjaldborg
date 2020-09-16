import { graphql, StaticQuery } from "gatsby"
import React from "react"
import { useSelector } from "react-redux"
import Footer from "../../layouts/Footer"
import Header from "../../layouts/Header"
import ExcerptBtns from "../../reusableComponents/ExcerptBtns"
import Sponsors from "../../reusableComponents/Sponsors"
import TopVideo from "../../reusableComponents/TopImage/video"
import BigBtn from "../../reusableComponents/BigBtn"
import { Container } from "./styled"
import Postlist from "../../reusableComponents/Postlist"
import PDF from "../../../static/assets/Forsala_armbanda.pdf"
import DagskraImage from "../../../static/assets/dagskra-mynd.jpg"

const Frontpage = ({ data: { imageSharp, video } }) => {
  const icelandic = useSelector((state) => state.reducer.icelandic)
  return (
    <Container>
      <Header />

      <TopVideo frontpage videoSource="videos/Forsida_skura_xcbhav"></TopVideo>

      <div className="btnWrap">
        <BigBtn
          externalLink
          action="https://bioparadis.is/vidburdir/skjaldborg-2020/"
          text={icelandic ? "Miðasala í Bíó Paradís" : "Tickets in Bíó Paradís"}
          className="nopad"
        />
        <BigBtn
          externalLink
          action={DagskraImage}
          text={icelandic ? "Dagskrá í Bíó Paradís" : "Schedule at Bíó Paradís"}
        />
      </div>
      <div className="postlistWrap">
        <Postlist className="postlist" />
      </div>

      <ExcerptBtns />

      <Sponsors />

      <Footer />
    </Container>
  )
}

export default (props) => (
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
    render={(data) => <Frontpage data={data} {...props}></Frontpage>}
  ></StaticQuery>
)
