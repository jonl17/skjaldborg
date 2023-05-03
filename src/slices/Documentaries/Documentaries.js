import React from 'react'
import { useGetMovies } from '../../hooks/useGetMovies'
import BlockGrid from '../../reusableComponents/BlockGrid/BlockGrid'
import { useLang } from '../../store'

const Documentaries = ({ primary }) => {
  const { lang } = useLang()

  const year = parseInt(primary.year) ?? 2023

  const movies = useGetMovies(lang, year)

  return (
    <section className='h-full relative p-4 lg:p-8'>
      <BlockGrid
        title={lang === 'is' ? `Verk ${year}` : `Documentaries ${year}`}
        items={movies.map((item) => ({
          ...item,
          slug: item.url,
        }))}
        showBackBtn={false}
      />
    </section>
  )
}

export default Documentaries
