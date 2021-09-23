/* eslint-disable react-hooks/exhaustive-deps */

/* eslint-disable import/prefer-default-export */

import React, { useEffect, useState } from 'react';
import { useData } from '../../context/DataContext';
// import { db } from '../../firebase/FirebaseConfig';
import { getFirestore, getDocs, collection} from '@firebase/firestore';
import { ListOfCategories, ListOfPhotoCards } from '../../components';

export const Home = (props) => {

  const db = getFirestore()
  const {initState, state} = useData()
  const { id } = props;
  const [ fbData, setfbData] = useState({photos: [], categories: []})

  useEffect(() => {

    if (state.photos.length === 0) {
      
      const p1 = getDocs(collection(db,'photos'))
      .then(response => response.forEach(doc => {setfbData(fbData.photos.push({...doc.data(), fbId: doc.id}))}))
  
      const p2 = getDocs(collection(db,'categories'))
        .then(response => response.forEach(doc => {setfbData(fbData.categories.push(doc.data()))}))

      Promise.all([p1, p2])
        .then(() => {
          initState({
            categories: fbData.categories,
            photos:fbData.photos,
          });
        })
    }
  }, [])

  return (
    <>
      <ListOfCategories />
      <ListOfPhotoCards id={id} />
    </>
  );
};

export default Home;
