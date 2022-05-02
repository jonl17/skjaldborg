import React, { useState, useEffect } from 'react'
import { Popup, Text, Consent } from './styled'
import { useSelector } from 'react-redux'

const LOCALSTORAGEKEY = 'cookieConsentSkjaldborg2020.iss'

const Cookies = () => {
  const icelandic = useSelector((state) => state.reducer.icelandic)
  const [hidden, setHidden] = useState(true)

  useEffect(() => {
    if (localStorage.getItem(LOCALSTORAGEKEY)) {
      setHidden(true)
    } else setHidden(false)
  }, [])

  const userConsent = () => {
    setHidden(true)
    if (localStorage) {
      localStorage.setItem(LOCALSTORAGEKEY, true)
    }
  }

  return !hidden ? (
    <Popup>
      <Text className='bg-secondary text-primary'>
        {icelandic ? 'Kökur!' : 'Cookies!'}
      </Text>
      <Consent onClick={() => userConsent()}>OK</Consent>
    </Popup>
  ) : null
}

export default Cookies
