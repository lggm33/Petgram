import { useState, useEffect } from "react";
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut , onAuthStateChanged} from 'firebase/auth';
import { auth } from '../firebase/FirebaseConfig'

const useAuth = () => {

  const [currentUser, setCurrentUser] = useState();
  const [authloading, setLoading] = useState(true);

  const signUp = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
  }

  const logOut = () => {
    return signOut(auth)
  }

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user)
      setLoading(false)
    })
    return unSubscribe
  }, []);


  return {
    currentUser,
    signUp,
    signIn,
    logOut,
    authloading,
  }

}

export default useAuth