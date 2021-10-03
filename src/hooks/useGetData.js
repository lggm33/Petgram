/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import { db } from '../firebase/FirebaseConfig';
import { getDocs, collection } from '@firebase/firestore';

const useGetData = () => {

  const[initState, setInitState] = useState({photos: [], categories: []})
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    
    setLoading(true);
    const photos = []
    const categories = []

    const p1 = getDocs(collection(db,'photos'))
    .then(response => response.forEach(doc => {photos.push({...doc.data(), fbId: doc.id})}))

    const p2 = getDocs(collection(db,'categories'))
      .then(response => response.forEach(doc => {categories.push({...doc.data()})}))

      Promise.all([p1, p2])
        .then(() => {
          setInitState({photos: photos, categories: categories})
          setLoading(false)
        })
        .catch((e) => {
          setError(e.code)
          setLoading(false)
        })
    
  }, [])

  return {initState, error, loading}
}

export default useGetData

