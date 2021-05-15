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
import PDF from "../../../static/assets/nytt-dagskra.pdf"
import { Popup, InnerPopupWrap } from "./Popup/Popup"
import Content from "../../reusableComponents/Content"

const Frontpage = ({ data: { imageSharp, video } }) => {
  const icelandic = useSelector((state) => state.reducer.icelandic)
  return (
    <Container>
      <Header />

      <TopVideo frontpage videoSource="videos/Forsida_skura_xcbhav"></TopVideo>

      <Popup>
        <InnerPopupWrap>
          <Content
            html=" <h1>Skjaldborg verður haldin næst um hvítasunnuhelgi 2022.</h1>
        <p>
          Hér að neðan er dagskrá hátíðarinnar frá síðasta ári, sem sýnd verður
          í Skjaldborgarbíói um helgina 14.-16. maí 2021.
        </p>"
          />
        </InnerPopupWrap>
        <BigBtn
          externalLink
          action={PDF}
          text={icelandic ? "Dagskrá" : "Schedule"}
        />
      </Popup>

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
