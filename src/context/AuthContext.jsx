import React, { useState, useContext, useEffect } from 'react';
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut , onAuthStateChanged} from 'firebase/auth';
import { auth } from '../firebase/FirebaseConfig'


const AuthContext = React.createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider =( {children} ) => {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);

  const signUp = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
  }

  const logOut = () => {
    return signOut(auth)
  }

  const logIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
  }

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user)
      setLoading(false)
    })
    return unSubscribe
  }, []);


  const value = {
    currentUser,
    signUp,
    signIn,
    logOut,
    logIn,
    loading,
  }

  return (
      <AuthContext.Provider value={value}>
        {!loading && children}
      </AuthContext.Provider>  
  )
}