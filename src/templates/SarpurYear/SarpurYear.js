import React from 'react'
import { useGetSarpurYears } from '../../hooks/useGetSarpurYears'
import BlockGrid from '../../reusableComponents/BlockGrid/BlockGrid'
import { cleanUpSlug, handleCloudinaryImage } from '../../utils'

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
        title={`Sarpur ${pageContext.node.year}`}
        showBackBtn={false}
        items={items.map((item) => ({
          ...item,
          slug: cleanUpSlug(item.title, '/sarpur/'),
        }))}
      />
    </section>
  )
}

export default SarpurYear
