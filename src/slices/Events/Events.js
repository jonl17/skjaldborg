import React from 'react'
import { useGetEvents } from '../../hooks/useGetEvents'
import BlockGrid from '../../reusableComponents/BlockGrid/BlockGrid'
import { useLang } from '../../store'

const Events = ({ primary }) => {
  const { lang } = useLang()

  const year = parseInt(primary.year) ?? 2023

  const events = useGetEvents(lang, year)

  return (
    <section className='h-full relative p-4 lg:p-8'>
      <BlockGrid
        title={lang === 'is' ? `Viðburðir ${year}` : `Events ${year}`}
        items={events.map((item) => ({
          ...item,
          slug: item.url,
        }))}
        showBackBtn={false}
      />
    </section>
  )
}

export default Events
