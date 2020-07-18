import React from "react"
import { DayContainer, ItemContainer } from "./styled"
import { formatTime } from "../../methods"
import { useState } from "react"

const Item = ({ item, hideTime }) => {
  return (
    <ItemContainer>
      {hideTime ? (
        <h2 className='time'></h2>
      ) : (
        <h2 className='time'>{formatTime(item.dagsetning, true)}</h2>
      )}
      <h2 className='title'>{item.title}</h2>
    </ItemContainer>
  )
}

const Day = ({ schedule, nameOfDay, date }) => {
  return (
    <DayContainer>
      <p className='nameOfTheDay'>{nameOfDay}</p>
      <p className='date'>{date}</p>
      <div className='timetableWrap'>
        {schedule.map((item, index) => {
          if (index !== 0) {
            console.log(schedule[index - 1].dagsetning)
          }
          return (
            <Item
              key={index}
              item={item}
              hideTime={
                index !== 0 &&
                item.dagsetning.getTime() ===
                  schedule[index - 1].dagsetning.getTime()
              }
            />
          )
        })}
      </div>
    </DayContainer>
  )
}

export default Day
