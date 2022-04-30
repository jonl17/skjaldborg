import React, { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import slugify from "slugify"
import { formatTime } from "../../methods"
import BigBtn from "../../reusableComponents/BigBtn"
import Content from "../../reusableComponents/Content"
import { InformationWrap, ItemContainer } from "./styled"

const Information = ({ html, title, display }) => {
  const icelandic = useSelector(state => state.reducer.icelandic)
  return (
    <InformationWrap display={display}>
      <Content html={html} className='inner-wrap' />
      <BigBtn
        state={{ fromSchedule: true }}
        action={"/heimildamyndir/" + slugify(title, { lower: true, remove: /[*+~.()'"!:@]/g })}
        text={icelandic ? "Lesa meira" : "Read more"}
        className='btn'
      ></BigBtn>
    </InformationWrap >
  )
}

const Item = ({ item, hideTime }) => {
  const [displayText, setDisplayText] = useState(false)
  const [title, setTitle] = useState(item.title)
  const icelandic = useSelector(state => state.reducer.icelandic)
  useEffect(() => {
    if (!icelandic && item.title_en) {
      setTitle(item.title_en)
    } else {
      setTitle(item.title)
    }
  }, [icelandic, item])
  return (
    <ItemContainer>
      {hideTime ? (
        <span className='time' />
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
            {`${title} `}
            {item.frontmatter.length_in_min
              ? `(${item.frontmatter.length_in_min})`
              : null}
          </h2>
          <Information
            html={item.html}
            title={item.title}
            display={displayText}
          />
        </div>
      ) : (
        <h2 className='title nonMovie les-text'>{item.title}</h2>
      )}
    </ItemContainer>
  )
}

export default Item
