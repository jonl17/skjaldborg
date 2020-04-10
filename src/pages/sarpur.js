import React from "react"
import SarpurIndex from "../pageComponents/Sarpur"
import SarpurYear from "../pageComponents/SarpurYear"
import { Router } from "@reach/router"
import Header from "../layouts/Header"
import Footer from "../layouts/Footer"

const Sarpur = () => {
  return (
    <>
      <Header></Header>
      <Router basepath="/sarpur">
        <SarpurIndex path="/"></SarpurIndex>
        <SarpurYear path="/:year"></SarpurYear>
      </Router>
      <Footer></Footer>
    </>
  )
}

export default Sarpur
