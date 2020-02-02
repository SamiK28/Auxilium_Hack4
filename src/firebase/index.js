import firebase from 'firebase'
import 'firebase/firestore'
import 'firebase/auth'

// firebase init goes here
const config = {
  apiKey: 'AIzaSyC0PTBz-QNvVnJes3a3sU8GQrJiy2OsS08',
  authDomain: 'donatomatic.firebaseapp.com',
  databaseURL: 'https://donatomatic.firebaseio.com',
  projectId: 'donatomatic',
  storageBucket: 'donatomatic.appspot.com',
  messagingSenderId: '38814938275',
  appId: '1:38814938275:web:ce0c78a237117afa2b7b16'
}
// Initialize Firebase
firebase.initializeApp(config)
// firebase.analytics()

// firebase utils
const db = firebase.firestore()
const auth = firebase.auth()
const currentUser = auth.currentUser

// firebase collections
// const usersCollection = db.collection('users')
// const postsCollection = db.collection('posts')
// const commentsCollection = db.collection('comments')
// const likesCollection = db.collection('likes')

export default {
  db,
  auth,
  currentUser,
  firebase
}
