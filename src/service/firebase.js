export const config = {
  apiKey: process.env.GATSBY_API_KEY,
  authDomain: process.env.GATSBY_AUTH_DOMAIN,
  projectId: process.env.GATSBY_PROJECT_ID,
  storageBucket: process.env.GATSBY_STORAGE_BUCKET,
  appId: process.env.GATSBY_APP_ID,
}

let firebaseCache

export const getFirebase = (firebase) => {
  if (firebaseCache) {
    return firebaseCache
  }
  firebase.initializeApp(config)
  firebaseCache = firebase
  return firebase
}
