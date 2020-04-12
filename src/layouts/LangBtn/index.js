import React, { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { CHANGE_LANGUAGE } from "../../state/action"
import { Box, Text, Lang } from "./styled"
import { redColor } from "@constants"

const LangBtn = () => {
  const icelandic = useSelector(state => state.reducer.icelandic)
  const dispatch = useDispatch()
  const pathname = useSelector(state => state.reducer.pathname)

  const [color, setColor] = useState("white")

  useEffect(() => {
    if (pathname.includes("/umsokn") || pathname.includes("/sarpur")) {
      setColor(`${redColor}`)
    } else setColor("white")
  }, [pathname])

  return (
    <Box onClick={() => dispatch({ type: CHANGE_LANGUAGE })}>
      <Text color={color}>
        <Lang>{icelandic ? "English" : "Íslenska"}</Lang>
      </Text>
    </Box>
  )
}

export default LangBtn
