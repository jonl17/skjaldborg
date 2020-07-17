import React from "react"
import { Anchor, Button, Text, Fill, ExternalAnchor } from "./styled"
import { useSelector } from "react-redux"

const BigBtn = ({
  button,
  buttonSubmit,
  text,
  action,
  white,
  className = "",
  externalLink,
}) => {
  const postlisted = useSelector(state => state.reducer.postlisted)

  if (button) {
    return (
      <Button disabled={postlisted} white={white} onClick={action}>
        <Fill></Fill>
        <span style={{ zIndex: 1 }}>{text}</span>
      </Button>
    )
  } else if (buttonSubmit) {
    return (
      <Button white={white} type='submit'>
        <Fill></Fill>
        <span style={{ zIndex: 1 }}>{text}</span>
      </Button>
    )
  } else if (externalLink) {
    return (
      <Text className={className}>
        <ExternalAnchor target='_blank' href={action} white={white}>
          <Fill></Fill>
          <span style={{ zIndex: 1 }}>{text}</span>
        </ExternalAnchor>
      </Text>
    )
  } else {
    return (
      <Text className={className}>
        <Anchor white={white} to={action}>
          <Fill></Fill>
          <span style={{ zIndex: 1 }}>{text}</span>
        </Anchor>
      </Text>
    )
  }
}

export default BigBtn
