import { graphql, StaticQuery } from 'gatsby'
import React from 'react'
import { useSelector } from 'react-redux'
import Footer from '../../layouts/Footer'
import Sponsors from '../../reusableComponents/Sponsors'
import TopVideo from '../../reusableComponents/TopImage/video'
import BigBtn from '../../reusableComponents/BigBtn'
import { Container } from './styled'
import Postlist from '../../reusableComponents/Postlist'
import { Popup, InnerPopupWrap } from './Popup/Popup'
import Content from '../../reusableComponents/Content'
import NewButton from '../../reusableComponents/NewButton/NewButton'
import AlertBanner from '../../reusableComponents/AlertBanner'

const Frontpage = ({ data: { imageSharp, video } }) => {
  const icelandic = useSelector((state) => state.reducer.icelandic)

  return (
    <Container>
      <div className='h-screen w-full'>
        <video
          autoPlay
          muted
          playsInline
          className='h-full w-full object-cover object-top'
          src={video.publicURL}
          loop
        ></video>
      </div>

      <div className='absolute top-24 lg:top-56 w-full grid place-items-center'>
        <AlertBanner />
      </div>

      <Sponsors />
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
