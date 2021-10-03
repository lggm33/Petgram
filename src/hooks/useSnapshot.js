/* eslint-disable no-unused-expressions */
/* eslint-disable react-hooks/exhaustive-deps */
import {useEffect, useState } from 'react';
import { onSnapshot, doc } from '@firebase/firestore';
import { db } from '../firebase/FirebaseConfig';

const useSnapshot = (collection, docID) => {

  const [dataSnap, setData] = useState({})
  const [loading, setLoading] = useState(true)
  
  useEffect(() => {
    const unSub = onSnapshot(doc(db, collection, docID), (snap) => {
      setData(snap.data())
      setLoading(false)
    })
    return () => unSub()
  }, [])

  // useEffect(() => {}, [dataSnap, loading])

    return [dataSnap, loading]
}

export default useSnapshot