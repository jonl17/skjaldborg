import React from 'react'
import BlockGrid from '../../reusableComponents/BlockGrid/BlockGrid'
import { useLang } from '../../store'

const Documentaries = () => {
  const { lang } = useLang()

  const movies = []

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
