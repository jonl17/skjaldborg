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

const Frontpage = ({ data: { imageSharp, video } }) => {
  const icelandic = useSelector(state => state.reducer.icelandic)
  return (
    <Container>
      <Header />

      <TopVideo frontpage videoSource='videos/Forsida_skura_xcbhav'></TopVideo>

      <div className='btnWrap'>
        <BigBtn
          externalLink
          action={PDF}
          text={icelandic ? "Forsala armbanda" : "Presale"}
          className='nopad'
        />
        <BigBtn action={"/dagskra"} text={icelandic ? "Dagskrá" : "Schedule"} />
      </div>
      <div className='postlistWrap'>
        <Postlist className='postlist' />
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
