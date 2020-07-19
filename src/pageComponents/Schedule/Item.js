import React, { useState } from "react"
import { formatTime } from "../../methods"
import { Link } from "gatsby"
import Content from "../../reusableComponents/Content"
import { ItemContainer, InformationWrap } from "./styled"
import slugify from "slugify"
import { useSelector } from "react-redux"
import BigBtn from "../../reusableComponents/BigBtn"

const Information = ({ html, title }) => {
  const icelandic = useSelector(state => state.reducer.icelandic)
  return (
    <InformationWrap>
      <Content html={html} className='inner-wrap' />
      <BigBtn
        state={{ fromSchedule: true }}
        action={"/heimildamyndir/" + slugify(title, { lower: true })}
        text={icelandic ? "Lesa meira" : "Read more"}
        className='btn'
      ></BigBtn>
    </InformationWrap>
  )
}

const Item = ({ item, hideTime }) => {
  const [displayText, setDisplayText] = useState(false)

  return (
    <ItemContainer>
      {hideTime ? (
        <h2 className='time'></h2>
      ) : (
        <h2 className='time'>{formatTime(item.dagsetning, true)}</h2>
      )}
      {item.movie ? (
        <div className='title titlar'>
          <h2
            onClick={() => setDisplayText(!displayText)}
            className='movieTitleWrap'
          >
            <span className='green-plus'>{displayText ? "-" : "+"}</span>
            {`${item.title}`}{" "}
            {item.frontmatter.length_in_min
              ? `(${item.frontmatter.length_in_min})`
              : null}
          </h2>
          {displayText && <Information html={item.html} title={item.title} />}
        </div>
      ) : (
        <h2 className='title nonMovie les-text'>{item.title}</h2>
      )}
    </ItemContainer>
  )
}

export default Item
