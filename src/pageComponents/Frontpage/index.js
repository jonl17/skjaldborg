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
import dagskraPDF from "../../../static/assets/dagskra.pdf"

const Frontpage = ({ data: { imageSharp, video } }) => {
  const platform = useSelector(state => state.reducer.platform)
  const icelandic = useSelector(state => state.reducer.icelandic)
  return (
    <Container>
      <Header />

      <TopVideo frontpage videoSource='videos/Forsida_skura_xcbhav'></TopVideo>

      <div className='btnWrap'>
        <BigBtn
          action={dagskraPDF}
          externalLink
          text={icelandic ? "Dagskrá" : "Schedule"}
        />
      </div>

      <ExcerptBtns />

      <Sponsors />

      <Footer />
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
