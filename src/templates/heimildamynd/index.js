import React from "react"
import PageContainer from "../../layouts/PageContainer"
import Header from "../../layouts/Header"
import Footer from "../../layouts/Footer"
import { graphql, Link } from "gatsby"
import CoverImage from "./components/CoverImage"
import { Container } from "./styled"
import Arrow from "../../reusableComponents/Arrow"
import { Fade } from "react-reveal"

const Movie = ({ data: { movie }, pageContext }) => {
  const { html, frontmatter } = movie
  return (
    <>
      <Header />
      <PageContainer>
        <CoverImage image={frontmatter.image} />
        <Container>
          <div className='title-container'>
            <div>
              <Fade right distance='15px'>
                <h1>{frontmatter.title}</h1>
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
        <Footer />
      </PageContainer>
    </>
  )
}

export const query = graphql`
  query($id: String!) {
    movie: markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(quality: 85) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        director
      }
    }
  }
`

export default Movie
