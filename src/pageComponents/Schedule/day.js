import React from "react"
import { DayContainer, ItemContainer } from "./styled"
import { formatTime } from "../../methods"
import { Link } from "gatsby"
import slugify from "slugify"
import { Fade } from "react-reveal"

const Item = ({ item, hideTime }) => {
  return (
    <ItemContainer>
      {hideTime ? (
        <h2 className='time'></h2>
      ) : (
        <h2 className='time'>{formatTime(item.dagsetning, true)}</h2>
      )}
      {item.movie ? (
        <Link
          to={"/heimildamyndir/" + slugify(item.title, { lower: true })}
          className='title titlar'
          state={{ fromSchedule: true }}
        >
          <h2 className='movieTitleWrap'>
            <span className='green-plus'>+</span> {item.title}
          </h2>
        </Link>
      ) : (
        <h2 className='title nonMovie les-text'>{item.title}</h2>
      )}
    </ItemContainer>
  )
}

const Day = ({ schedule, nameOfDay, date }) => {
  return (
    <DayContainer>
      <p className='nameOfTheDay'>{nameOfDay}</p>
      <p className='date les-texti'>{date}</p>
      <div className='timetableWrap'>
        {schedule.map((item, index) => {
          return (
            <Fade duration={400} right distance='3px'>
              <Item
                key={index}
                item={item}
                hideTime={
                  index !== 0 &&
                  item.dagsetning.getTime() ===
                    schedule[index - 1].dagsetning.getTime()
                }
              />
            </Fade>
          )
        })}
      </div>
    </DayContainer>
  )
}

export default Day
