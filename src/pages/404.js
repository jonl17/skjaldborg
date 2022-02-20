import React from 'react'
import PageTitle from '../reusableComponents/PageTitle'
import Header from '../layouts/Header'

export default () => {
  return (
    <>
      <Header mode='red'></Header>
      <div style={{ paddingTop: '10rem' }}>
        <PageTitle>Þessi síða fannst ekki! ⛱</PageTitle>
      </div>
    </>
  )
}
