import React, { useMemo } from 'react'
import { useGetMovies } from '../../hooks/useGetMovies'
import { useGetEvents } from '../../hooks/useGetEvents'
import { IScheduleItem } from '../../types'
import { useLang } from '../../store'
import ScheduleDay from './components/ScheduleDay'

interface Props {
  items: IScheduleItem[]
}

const NewSchedule = ({ items }: Props) => {
  const { lang } = useLang()

  const splitIntoDays = useMemo(
    () => (items: IScheduleItem[]) => {
      const days = items.reduce(
        (acc: IScheduleItem[][], item: IScheduleItem) => {
          const day = new Date(item.date).getDay()
          if (!acc[day]) {
            acc[day] = []
          }
          acc[day].push(item)
          return acc
        },
        []
      )
      return days.sort((a, b) => a[0].date.getTime() - b[0].date.getTime())
    },
    [items]
  )

  const schedule = splitIntoDays(items)

  return (
    <section className='h-full relative p-4 lg:p-8'>
      <div className='mt-36'>
        <h1 className='page-heading text-primary'>
          {lang === 'is' ? 'Dagskrá 2022' : 'Schedule 2022'}
        </h1>

        {schedule.map((item, key) => (
          <ScheduleDay key={key} items={item} />
        ))}
      </div>
    </section>
  )
}

export default () => {
  const movies = useGetMovies()
  const events = useGetEvents()

  const items1: IScheduleItem[] = movies.map((movie: any) => ({
    date: new Date(movie.scheduled),
    title: movie.title,
    description: movie.description,
    image: movie.image,
    url: movie.url,
    excerpt: movie.excerpt,
  }))

  const items2: IScheduleItem[] = events.map((event: any) => ({
    date: new Date(event.scheduled),
    title: event.title,
    description: event.description,
    image: event.image,
    url: event.url,
    excerpt: event.excerpt,
  }))

  const scheduleItems = [...items1, ...items2].sort(
    (a, b) => a.date.getTime() - b.date.getTime()
  )

  return <NewSchedule items={scheduleItems} />
}
