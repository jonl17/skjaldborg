import React, { useState } from 'react'
import { newFormatTime } from '../../../../methods'
import { useLang } from '../../../../store'
import { IScheduleItem } from '../../../../types'
import { handleDate } from '../../utils'
import cn from 'classnames'
import { GatsbyImage } from 'gatsby-plugin-image'

const SingleScheduleItem = ({
  date,
  title,
  image,
  excerpt,
  url,
  prevDate,
  type,
  director,
  length,
}: IScheduleItem & { prevDate: Date | null }) => {
  const [expanded, setExpanded] = useState(false)

  const { lang } = useLang()

  const sameSlot = date.getTime() === prevDate?.getTime()

  return (
    <div
      className={cn('flex overflow-hidden relative transition-all', {
        'h-44 lg:h-24': !expanded,
        'h-72 lg:h-56 bg-primary/75': expanded,
      })}
    >
      <div className='absolute left-0 top-0 h-full w-full'>
        <GatsbyImage
          className={cn('h-full w-full transition-opacity', {
            'opacity-0': !expanded,
            'opacity-50': expanded,
          })}
          image={image.gatsbyImageData}
          alt={image.alt}
        />
      </div>
      <div
        className={cn('relative flex', {
          'text-primary': !expanded,
          'text-white': expanded,
        })}
      >
        <p className='font-bold text-3xl border-current h-full w-32 lg:w-36 flex pl-3 pt-5 border-r-2'>
          {!sameSlot && newFormatTime(date)}
        </p>
        <div className='pl-6 lg:pl-24 '>
          <div className='flex pt-5 w-44 lg:w-full'>
            <button
              className='hover:opacity-70 flex'
              onClick={() => setExpanded((prev) => !prev)}
            >
              <p className='text-5xl text-secondary mr-3 -mt-2'>
                {expanded ? '-' : '+'}
              </p>

              <div>
                <p className='text-xl text-left lg:text-3xl font-bold font-regular uppercase'>
                  {title}
                  {`${length && " '"}${length}`}
                </p>
                {type === 'wip' ? (
                  <p className='text-left'>Verk í vinnslu</p>
                ) : director ? (
                  <p className='text-left'>{director}</p>
                ) : null}
              </div>
            </button>
          </div>
          {expanded && (
            <div>
              {excerpt.html && (
                <div
                  className='hide-iframe text-lg w-44 lg:w-full text-left'
                  dangerouslySetInnerHTML={{ __html: excerpt.html }}
                />
              )}
              <a href={url} target='_blank'>
                <p className='underline'>
                  {lang === 'is' ? 'Sjá meira' : 'See more'}
                </p>
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

type Props = {
  items: IScheduleItem[]
}

const ScheduleDay = ({ items }: Props) => {
  const { lang } = useLang()
  const { day, date } = handleDate(items[0].date, lang)
  return (
    <section className='text-primary'>
      <div className='text-current p-3 border-r-2 inline-block w-32 lg:w-36 border-current'>
        <p className='font-bold uppercase'>{day}</p>
        <p>{date}</p>
      </div>
      <div className='border-t-2 border-current grid'>
        {items.map((item, key) => (
          <SingleScheduleItem
            key={key}
            {...item}
            prevDate={key !== 0 ? items[key - 1].date : null}
          />
        ))}
      </div>
    </section>
  )
}

export default ScheduleDay
