import React from 'react'
import slugify from 'slugify'
import { useGetSarpurYears } from '../../hooks/useGetSarpurYears'
import BlockGrid from '../../reusableComponents/BlockGrid/BlockGrid'
import { handleCloudinaryImage } from '../../utils'

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
        items={items.map((item) => ({
          ...item,
          slug: `/sarpur/${slugify(item.title, {
            lower: true,
            remove: /[*+~.()'"!:@]/g
          }
          )}`,
        }))}
      />
    </section>
  )
}

export default SarpurYear
