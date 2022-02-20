import React, { useState } from 'react'
import { Container } from '../styled'
import PageTitle from '../../../reusableComponents/PageTitle'
import GoogleLogin from '../GoogleLogin'
import EmailPwLogin from '../ManualLogin/EmailPwLogin'
import ManualLogin from '../ManualLogin'
import Arrow from '../../../reusableComponents/Arrow'
import { useSelector } from 'react-redux'
import Footer from '../../../layouts/Footer'
import Header from '../../../layouts/Header'

// applicant form
const Register = () => {
  const [manualSignUp, setManualSignUp] = useState(false)
  const icelandic = useSelector((state) => state.reducer.icelandic)

  return (
    <>
      <Container>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-evenly',
          }}
        >
          <Arrow
            rotation='-180deg'
            hideonstate={!manualSignUp ? 'hide' : null}
            onClick={() => setManualSignUp(false)}
          >
            Tilbaka
          </Arrow>
          <PageTitle nopad>{icelandic ? 'Tengiliður' : 'Contact'}</PageTitle>
        </div>
        {manualSignUp ? (
          <ManualLogin></ManualLogin>
        ) : (
          <div className='login-options-wrap'>
            <h3>
              {icelandic
                ? 'Umsóknarfrestur er til miðnættis 9.júní 2020'
                : 'Application deadline is at midnight June 9th 2020'}
            </h3>
            <h3>{icelandic ? 'Skráðu þig inn með:' : 'Log in with:'}</h3>
            <GoogleLogin></GoogleLogin>
            <EmailPwLogin action={() => setManualSignUp(true)}></EmailPwLogin>
          </div>
        )}
      </Container>
    </>
  )
}

export default Register
