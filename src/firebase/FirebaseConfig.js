import firebase from 'firebase/app';
import 'firebase/auth';
// import 'firebase/firestore';

const app = firebase.initializeApp({
  apiKey: "AIzaSyAou3q_u_YoTHQh3nzJYD9qZmtUnApqcfI",
  authDomain: "curso-firebase-30522.firebaseapp.com",
  projectId: "curso-firebase-30522",
  storageBucket: "curso-firebase-30522.appspot.com",
  messagingSenderId: "120250935902",
  appId: "1:120250935902:web:0840ccf6c51d4f67f1a2cf"
})

export const auth = app.auth()
// export const db = app.firestore();
export default app;