import React from "react"
import { Container } from "./styled"
import PageTitle from "../../reusableComponents/PageTitle"
import Day from "./day"
import { useSelector } from "react-redux"

const DAYS = [
  {
    name: { is: "Föstudagur", en: "Friday" },
    key: "friday",
    date: { is: "31. júlí", en: "31. July" },
  },
  {
    name: { is: "Laugardagur", en: "Saturday" },
    key: "saturday",
    date: { is: "1. ágúst", en: "1. August" },
  },
  {
    name: { is: "Sunnudagur", en: "Sunday" },
    key: "sunday",
    date: { is: "2. ágúst", en: "2. August" },
  },
]

const Schedule = ({ schedule }) => {
  const icelandic = useSelector(state => state.reducer.icelandic)
  return (
    <Container>
      <div className='content-wrap'>
        <PageTitle>{icelandic ? "Dagskrá" : "Schedule"} 2020</PageTitle>
        <div className='vertical-border' />
        {DAYS.map((day, index) => (
          <Day
            key={index}
            nameOfDay={icelandic ? day.name.is : day.name.en}
            date={icelandic ? day.date.is : day.date.en}
            schedule={schedule[day.key]}
          />
        ))}
      </div>
    </Container>
  )
}

export default Schedule
