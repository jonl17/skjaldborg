import React from "react"
import { DayContainer } from "./styled"
import { Fade } from "react-reveal"
import Item from "./Item"
import { isCoupleOfMinutesOver } from "../../methods"

const Day = ({ schedule, nameOfDay, date }) => {
  return (
    <DayContainer>
      <p className='nameOfTheDay'>{nameOfDay}</p>
      <p className='date les-texti'>{date}</p>
      <div className='timetableWrap'>
        {schedule.map((item, index) => {
          return (
            <Fade key={index} duration={400} right distance='3px'>
              <Item
                item={item}
                hideTime={
                  (index !== 0 &&
                    item.dagsetning.getTime() ===
                      schedule[index - 1].dagsetning.getTime()) ||
                  item.wip ||
                  (item.dagsetning.getMinutes() !== 0 &&
                    isCoupleOfMinutesOver(item.dagsetning.getMinutes()))
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
