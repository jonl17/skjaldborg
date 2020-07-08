import React from 'react'
import Header from '../layouts/Header'
import Template from '../reusableComponents/SarpurTemplate'
import Documentaries from '../pageComponents/Documentaries'

const TITLES = {
  is: 'Heimildamyndir 2020',
  en: 'Documentaries 2020'
}

const Heimildamyndir = () => {
  return (
    <>
      <Header mode='red' />
      <Template title={TITLES}>
        <Documentaries />
      </Template>
    </>
  )
}

export default Heimildamyndir
