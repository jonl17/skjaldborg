import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { ADD_ADRIR } from "../../../../../state/action"
import { greenColor } from "@constants"

// components
import { InputWrap, Button } from "./styled"
import { InputBox } from "../../../styled"

export default ({ index }) => {
  const [nafn, setNafn] = useState("")
  const [hlutverk, setHlutverk] = useState("")

  const dispatch = useDispatch()

  const [saved, setSaved] = useState(false)

  const icelandic = useSelector(state => state.reducer.icelandic)

  return (
    <InputWrap onChange={() => setSaved(false)}>
      <InputBox
        onChange={e => {
          setNafn(e.target.value)
        }}
        name={"nafn"}
        placeholder={icelandic ? "Nafn" : "Name"}
      ></InputBox>
      <InputBox
        onChange={e => setHlutverk(e.target.value)}
        name={"hlutverk"}
        placeholder={icelandic ? "Hlutverk" : "Role"}
      ></InputBox>
      <Button
        background={saved ? greenColor : "transparent"}
        onClick={e => {
          e.preventDefault()
          dispatch({
            type: ADD_ADRIR,
            annar: { [hlutverk]: nafn, id: index },
          })
          setSaved(true)
        }}
      >
        {saved
          ? icelandic
            ? "Vistað"
            : "Saved"
          : icelandic
          ? "Vista"
          : "Save"}
      </Button>
    </InputWrap>
  )
}
