import React, { useState, useEffect } from "react"
import { Container } from "./styled"
import { useSelector } from "react-redux"
import useSetTargetBlank from "../../hooks/useSetTargetBlank"

const splitLang = html => {
  return html.split("<p>--ENSKA--</p>")
}

const Content = ({ html, className = "" }) => {
  const [lang, setLang] = useState(splitLang(html)[0])
  const icelandic = useSelector(state => state.reducer.icelandic)

  useEffect(() => {
    let languages = splitLang(html)
    if (icelandic) {
      setLang(languages[0])
    } else {
      setLang(languages.length > 1 ? languages[1] : languages[0])
    }
  }, [icelandic, html])

  useSetTargetBlank("content-wrap")

  return (
    <Container
      className={className}
      id='content-wrap'
      dangerouslySetInnerHTML={{ __html: lang }}
    ></Container>
  )
}

export default Content
