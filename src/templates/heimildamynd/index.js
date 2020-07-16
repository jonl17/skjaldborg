import React from "react"
import PageContainer from "../../layouts/PageContainer"
import Header from "../../layouts/Header"
import Footer from "../../layouts/Footer"
import { graphql, Link } from "gatsby"
import CoverImage from "./components/CoverImage"
import Info from "./components/Info"
import { Container } from "./styled"
import Arrow from "../../reusableComponents/Arrow"
import { Fade } from "react-reveal"
import { useSelector } from "react-redux"

const Movie = ({ data: { movie }, pageContext }) => {
  const { html, frontmatter } = movie
  const icelandic = useSelector(state => state.reducer.icelandic)
  return (
    <>
      <Header />
      <PageContainer>
        <CoverImage image={frontmatter.image} />
        <Container>
          <div className='title-container'>
            <div>
              <Fade right distance='15px'>
                <h1>{icelandic ? frontmatter.title : frontmatter.title_en}</h1>
              </Fade>
              <Fade right distance='12.5px' delay={150}>
                <h2>{frontmatter.director}</h2>
              </Fade>
              <Fade right distance='10px' delay={250}>
                <Link to='/heimildamyndir/'>
                  <div className='back-btn-wrap'>
                    <Arrow rotation='-180deg' />
                    <h3>Tilbaka</h3>
                  </div>
                </Link>
              </Fade>
            </div>
          </div>
        </Container>
        <Info html={html} frontmatter={frontmatter} />
        <Footer />
      </PageContainer>
    </>
  )
}

export const query = graphql`
  query($id: String!) {
    movie: markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        title_en
        image {
          childImageSharp {
            fluid(quality: 85) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        Trailer
        director
        producer
        production_company
        editing
        filming
        composer
        sound_design
        dagskra
      }
    }
  }
`

export default Movie
