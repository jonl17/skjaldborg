// import Register from "../pageComponents/Submit/Register"
// import SubmitMovie from "../pageComponents/Submit/SubmitMovie"
import { navigate } from 'gatsby'
import { useContext, useEffect, useState } from 'react'
import { RootContext } from "../context/main"

const Umsokn = () => {
  const [loggedIn, setLoggedIn] = useState(false)
  const { currentUser } = useContext(RootContext)

  useEffect(() => {
    navigate('/')
  }, [])

  useEffect(() => {
    if (currentUser) {
      setLoggedIn(currentUser)
    }
    else setLoggedIn(false)
  }, [currentUser])

  // if (loggedIn) {
  //   return <SubmitMovie></SubmitMovie>
  // }
  // else return <Register></Register>
  return null
}

export default Umsokn
