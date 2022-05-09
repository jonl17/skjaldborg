import React from 'react'
import { useGetMovies } from '../../hooks/useGetMovies'
import BlockGrid from '../../reusableComponents/BlockGrid/BlockGrid'
import { useLang } from '../../store'

const Documentaries = () => {
  const { lang } = useLang()

  const movies = useGetMovies(lang)

  return (
    <section className='h-full relative p-4 lg:p-8'>
      <BlockGrid
        title={lang === 'is' ? 'Heimildamyndir' : 'Documentaries'}
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
