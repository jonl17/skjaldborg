import React from 'react'
import SarpurYearsIndex from '../pageComponents/Sarpur/YearsIndex'
import SarpurMoviesIndex from '../pageComponents/Sarpur/MoviesIndex'
import MovieDetails from '../pageComponents/Sarpur/MovieDetails'
import { Router } from '@reach/router'
import Header from '../layouts/Header'
import Footer from '../layouts/Footer'

const Sarpur = () => {
  return (
    <>
      <Router basepath='/sarpur'>
        <SarpurYearsIndex path='/'></SarpurYearsIndex>
        <SarpurMoviesIndex path='/:year'></SarpurMoviesIndex>
        <MovieDetails path='/:year/:id'></MovieDetails>
      </Router>
    </>
  )
}

export default Sarpur
