import React, { useState, useContext, useEffect } from 'react';
import { auth } from '../firebase/FirebaseConfig';
import { FirestorProvider } from '../context/FirestoreContext'

const AuthContext = React.createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider =( {children} ) => {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);

  const signUp = (email, password) => {
    return auth.createUserWithEmailAndPassword(email, password)
  }

  const signIn = (email, password) => {
    return auth.signInWithEmailAndPassword(email, password)
  }

  const logOut = () => {
    return auth.signOut()
  }

  const logIn = (email, password) => {
    return auth.signInWithEmailAndPassword(email, password)
  }

  function resetPassword(email) {
    return auth.sendPasswordResetEmail(email)
  }

  function updateEmail(email) {
    return currentUser.updateEmail(email)
  }

  function updatePassword(password) {
    return currentUser.updatePassword(password)
  }

  useEffect(() => {
    const unSubscribe = auth.onAuthStateChanged((user) => {
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
    resetPassword,
    updateEmail,
    updatePassword,
  }

  return (
    <FirestorProvider>
      <AuthContext.Provider value={value}>
        {!loading && children}
      </AuthContext.Provider>  
    </FirestorProvider>
  )
}