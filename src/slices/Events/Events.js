import React from 'react'
import { useGetEvents } from '../../hooks/useGetEvents'
import BlockGrid from '../../reusableComponents/BlockGrid/BlockGrid'
import { useLang } from '../../store'

const Events = ({ primary }) => {
  const { lang } = useLang()

  const events = useGetEvents(lang, parseInt(primary.year) ?? 2023)

  return (
    <section className='h-full relative p-4 lg:p-8'>
      <BlockGrid
        title={lang === 'is' ? 'Viðburðir' : 'Events'}
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
