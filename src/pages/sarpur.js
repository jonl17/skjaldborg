import React from "react"
import SarpurYearsIndex from "../pageComponents/SarpurYearsIndex"
import SarpurMoviesIndex from "../pageComponents/SarpurMoviesIndex"
import { Router } from "@reach/router"
import Header from "../layouts/Header"
import Footer from "../layouts/Footer"

const Sarpur = () => {
  return (
    <>
      <Header></Header>
      <Router basepath="/sarpur">
        <SarpurYearsIndex path="/"></SarpurYearsIndex>
        <SarpurMoviesIndex path="/:year"></SarpurMoviesIndex>
      </Router>
      <Footer></Footer>
    </>
  )
}

export default Sarpur
