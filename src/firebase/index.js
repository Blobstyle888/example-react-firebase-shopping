import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: 'AIzaSyD6Xz8R_IqIma-b140ok4O5GR9rsgygHTc',
  authDomain: 'first-app-f9810.firebaseapp.com',
  databaseURL: 'https://first-app-f9810.firebaseio.com',
  projectId: 'first-app-f9810',
  storageBucket: 'first-app-f9810.appspot.com',
  messagingSenderId: '896842294091',
  appId: '1:896842294091:web:f488d3ba085d0eb6f4bece',
  measurementId: 'G-596MKPRQ2J'
}

if (!firebase.apps.length) {
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig)
}

const db = firebase.firestore()
const auth = firebase.auth()
const storage = firebase.storage()

// db.settings({
//   timestampsInSnapshots: true
// })

export default {
  db,
  auth,
  storage
}
