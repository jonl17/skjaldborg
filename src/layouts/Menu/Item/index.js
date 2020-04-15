import React from "react"
import { Text, Anchor } from "./styled"
import Dropdown from "./Dropdown"
import { useDispatch, useSelector } from "react-redux"
import { TRIGGER_MENU } from "../../../state/action"

const Item = ({ item }) => {
  const dispatch = useDispatch()
  const icelandic = useSelector(state => state.reducer.icelandic)
  return (
    <Text>
      {item.name === `Hátíðin` ? (
        <Dropdown>{icelandic ? item.name : item.name_en}</Dropdown>
      ) : (
        <Anchor
          cover
          bg="#be4545"
          direction="left"
          duration={1}
          className="titlar"
          activeStyle={{ color: `rgb(188,220,186)` }}
          partiallyActive={item.name === "Sarpur" || item.name === "Umsókn"}
          onClick={() =>
            dispatch({
              type: TRIGGER_MENU,
              trigger: `closed`,
            })
          }
          to={item.slug}
        >
          {icelandic ? item.name : item.name_en}
        </Anchor>
      )}
    </Text>
  )
}

export default Item
