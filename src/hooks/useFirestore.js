import { useState } from 'react';
import { db } from '../firebase/FirebaseConfig';
import { doc, getDoc, setDoc, onSnapshot, updateDoc, collection, getDocs } from '@firebase/firestore';

const useFirestore = () => {

  const [data, setData] = useState({})

  const getDocument = async (collection, docID) => {
    const snap = await getDoc(doc(db, collection, docID))
    return snap
  } 

  const setDocument = async (collection, docID, data) => {
    const snap = await setDoc(doc(db, collection, docID), {...data})
    return snap
  }

  const getSnapshot = async (collection, docID) => {
    const unSub = await onSnapshot(doc(db, collection, docID), (snap) => {setData(snap)})
    
    return {unSub, data}
  }

  const updateDocument = (collection, docID, data, ) => {
    updateDoc(doc(db, collection, docID), {...data} )
  }

  const getCollection = async (c) => {
    const snap = await getDocs(collection(db, c))
    return snap
  }

  return {
    getDocument,
    setDocument, 
    getSnapshot, 
    updateDocument,
    getCollection,
  }
}

export default useFirestore