import dbConfig from "./firebaseConfig"
import firebase from 'firebase/app'
import 'firebase/firestore'

const app = firebase.initializeApp(dbConfig)

export default app.firestore()