// v9 compat packages are API compatible with v8 code
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const app = firebase.initializeApp({
  apiKey: "AIzaSyAou3q_u_YoTHQh3nzJYD9qZmtUnApqcfI",
  authDomain: "curso-firebase-30522.firebaseapp.com",
  projectId: "curso-firebase-30522",
  storageBucket: "curso-firebase-30522.appspot.com",
  messagingSenderId: "120250935902",
  appId: "1:120250935902:web:0840ccf6c51d4f67f1a2cf"
})

const db = app.firestore(); 
const auth = app.auth()
export { auth, db }
export default app;