import React, { useEffect, useState } from "react"
import { Text, Anchor } from "./styled"
import Dropdown from "./Dropdown"
import { useDispatch, useSelector } from "react-redux"
import { TRIGGER_MENU } from "../../../state/action"
import { hyphenate } from "hyphen/is"

const Item = ({ item }) => {
  const [name, setName] = useState("")
  const dispatch = useDispatch()
  const icelandic = useSelector(state => state.reducer.icelandic)
  useEffect(() => {
    hyphenate(icelandic ? item.name : item.name_en).then(result =>
      setName(result)
    )
  }, [item])
  return (
    <Text>
      {item.name === `Hátíðin` ? (
        <Dropdown>{icelandic ? item.name : item.name_en}</Dropdown>
      ) : (
        <Anchor
          cover
          bg='#be4545'
          direction='left'
          duration={1}
          className='titlar'
          activeStyle={{ color: `rgb(188,220,186)` }}
          partiallyActive={
            item.name === "Sarpur" ||
            item.name === "Umsókn" ||
            item.name === "Heimildamyndir"
          }
          onClick={() =>
            dispatch({
              type: TRIGGER_MENU,
              trigger: `closed`,
            })
          }
          to={item.slug}
        >
          {name}
        </Anchor>
      )}
    </Text>
  )
}

export default Item
