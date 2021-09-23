import React, { useContext } from 'react';
import { db } from '../firebase/FirebaseConfig';

const FirestoreContext = React.createContext();

export const useFirestore = () => useContext(FirestoreContext);

export const FirestorProvider =( {children} ) => {

  const creatColletion =  async () => {
    await db.collection('categories').doc().set({nombre: 'gabriel'})
  }

  const getDataAllways = () => {
    db.collection('data').onSnapshot((querySnapShot) => {
      querySnapShot.forEach((doc) => {console.log(doc.data())})
    })
  }
  
  const getDataOnce = async (col) => {
    const querySnapShot = await db.collection(col).get()
    querySnapShot.forEach(doc => console.log(doc.data()))
  }

  const onDeleteData = async (col, id) => {
    await db.collection(col).doc(id).delete()
  }  
  
  const value = {
    creatColletion,
    getDataAllways,
    getDataOnce,
    onDeleteData
  }

  return (
    <FirestoreContext.Provider value={value}>
      {children}
    </FirestoreContext.Provider>
  )
}

