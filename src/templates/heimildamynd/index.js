import React from "react"
import PageTitle from "../../reusableComponents/PageTitle"
import PageContainer from "../../layouts/PageContainer"
import Header from "../../layouts/Header"
import Footer from "../../layouts/Footer"
import { Container } from "./styled"
import { graphql } from "gatsby"

const Movie = ({ data: { movie }, pageContext }) => {
  return (
    <>
      <Header mode='red' />
      <PageContainer>
        <Container>
          <PageTitle>{movie.frontmatter.title}</PageTitle>
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
      }
    }
  }
`

export default Movie
