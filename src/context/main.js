// RootContext.js
import React, { useEffect, useState } from 'react'
import firebase from 'gatsby-plugin-firebase'
import { Provider as ReduxProvider } from 'react-redux'
import { createStore as createThisStore } from 'redux'
import rootReducer from '../state'
import { user } from 'rxfire/auth'

const createStore = () => createThisStore(rootReducer)

export const RootContext = React.createContext()

const Provider = ({ children }) => {
  const [firestore, setFirestore] = useState(null)
  const [auth, setAuth] = useState(null)
  const [storage, setStorage] = useState(null)

  const [currentUser, setCurrentUser] = useState(null)

  useEffect(() => {
    setFirestore(firebase.firestore())
    setAuth(firebase.auth())
    setStorage(firebase.storage())
  }, [])

  useEffect(() => {
    if (auth) {
      user(auth).subscribe((u) => setCurrentUser(u))
    }
  }, [auth])

  return (
    <ReduxProvider store={createStore()}>
      <RootContext.Provider
        value={{
          firestore,
          auth,
          storage,
          providers: {
            google: new firebase.auth.GoogleAuthProvider(),
          },
          currentUser,
        }}
      >
        {children}
      </RootContext.Provider>
    </ReduxProvider>
  )
}

export default ({ children }) => <Provider>{children}</Provider>
