import React from "react"
import { DayContainer } from "./styled"
import { Fade } from "react-reveal"
import Item from "./Item"

const Day = ({ schedule, nameOfDay, date, verkIvinnslu }) => {
  return (
    <DayContainer>
      <p className='nameOfTheDay'>{nameOfDay}</p>
      <p className='date les-texti'>{date}</p>
      <div className='timetableWrap'>
        {schedule.map((item, index) => {
          return (
            <Fade key={index} duration={400} right distance='3px'>
              {verkIvinnslu && item.title === "Verk í vinnslu" ? (
                verkIvinnslu.nodes.map((verk, idx) => (
                  <Item
                    key={idx}
                    item={{
                      title: verk.frontmatter.title,
                      title_en: verk.frontmatter.title_en,
                      dagsetning: new Date(verk.frontmatter.dagskra),
                      movie: true,
                      frontmatter: { ...verk.frontmatter },
                      html: verk.html,
                    }}
                    hideTime={idx !== 0}
                  />
                ))
              ) : (
                <Item
                  item={item}
                  hideTime={
                    index !== 0 &&
                    item.dagsetning.getTime() ===
                      schedule[index - 1].dagsetning.getTime()
                  }
                />
              )}
            </Fade>
          )
        })}
      </div>
    </DayContainer>
  )
}

export default Day
