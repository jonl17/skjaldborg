import React, { useState } from 'react'
import { useGetSarpurYears } from '../../hooks/useGetSarpurYears'
import { Link } from 'gatsby'
import LinkBlock from '../../reusableComponents/LinkBlock'
import BlockGrid from '../../reusableComponents/BlockGrid/BlockGrid'

const NewSarpur = () => {
  const years = useGetSarpurYears()
  return (
    <section className='h-full relative p-4 lg:p-8'>
      <BlockGrid
        title='Sarpur'
        items={years.map((year) => ({
          ...year,
          title: year.year,
        }))}
        showBackBtn={false}
      />
    </section>
  )
}

export default NewSarpur
