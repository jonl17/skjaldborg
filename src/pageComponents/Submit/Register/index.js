import React, { useEffect, useState } from "react"
import { Container } from "../styled"
import { navigate } from "gatsby"
import PageTitle from "../../../reusableComponents/PageTitle"
import GoogleLogin from "../GoogleLogin"
import EmailPwLogin from "../ManualLogin/EmailPwLogin"
import { authState } from "rxfire/auth"
import useGetFirebase from "../../../hooks/useGetFirebase"
import ManualLogin from "../ManualLogin"
import { Arrow } from "../Success"
import { useSelector } from "react-redux"

// applicant form
const Register = () => {
  const [authenticated, authenticate] = useState(null)
  const [manualSignUp, setManualSignUp] = useState(false)

  const {
    db: { auth },
    isLoading,
  } = useGetFirebase()

  useEffect(() => {
    let subscription
    if (!isLoading) {
      subscription = authState(auth).subscribe(user => {
        authenticate(user)
      })
      return () => subscription.unsubscribe()
    }
  }, [isLoading, auth])

  // gets off page if already logged in
  useEffect(() => {
    if (authenticated) {
      navigate("/umsokn/kvikmynd")
    }
  }, [authenticated])

  const icelandic = useSelector(state => state.reducer.icelandic)

  return (
    <>
      <Container>
        <Arrow
          hideonstate={!manualSignUp ? "hide" : null}
          onClick={() => setManualSignUp(false)}
        >
          Tilbaka
        </Arrow>
        <PageTitle nopad>{icelandic ? "Tengiliður" : "Contact"}</PageTitle>

        {/* <p style={{ color: "gray" }}>
          Forsvarsaðili verkefnis skráist sjálfkrafa á póstlista.. TODO
        </p> */}
        {manualSignUp ? (
          <ManualLogin></ManualLogin>
        ) : (
          <div className="login-options-wrap">
            <h3>{icelandic ? "Skráðu þig inn með:" : "Log in with:"}</h3>
            <GoogleLogin></GoogleLogin>
            <EmailPwLogin action={() => setManualSignUp(true)}></EmailPwLogin>
          </div>
        )}
      </Container>
    </>
  )
}

export default Register
