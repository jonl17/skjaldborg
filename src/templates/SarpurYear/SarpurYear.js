import React, { useEffect } from 'react'
import { graphql } from 'gatsby'
import BlockGrid from '../../reusableComponents/BlockGrid/BlockGrid'
import { useLocation } from '@reach/router'
import { useGetSarpurYears } from '../../hooks/useGetSarpurYears'
import { handleCloudinaryImage } from '../../utils'
import slugify from 'slugify'

const SarpurYear = ({ data, pageContext }) => {
  const year = useGetSarpurYears().find(
    (arr) => arr.year === pageContext.node.year
  )

  const items = year.movies.map((movie) => ({
    ...movie,
    image: handleCloudinaryImage(movie, pageContext.node.year),
  }))

  return (
    <section className='h-full relative p-4 lg:p-8'>
      <BlockGrid
        title='Sarpur'
        items={items.map((item) => ({
          ...item,
          slug: `/sarpur/${pageContext.node.year}/${slugify(item.title, {
            lower: true,
          })}`,
        }))}
      />
    </section>
  )
}

export default SarpurYear
