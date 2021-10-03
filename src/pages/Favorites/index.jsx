/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {ListOfFavorites, Loading} from '../../components';
import useFirestore from '../../hooks/useFirestore';
import { auth } from '../../firebase/FirebaseConfig';

const Favorites = (props) => {
  
  const {currentUser: {uid}} = auth
  const { getCollection } = useFirestore()
  const [favorites, setFavorites] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const snapFavorites = []
    getCollection('photos')
      .then((response) => {response.forEach((snap) => {
        if (snap.data().favoritesUser.some((user) => user === uid)) {
          snapFavorites.push(snap.data())
        } 
      })
      setLoading(false)
    })
    .then(() => {setFavorites(snapFavorites)})
    
  }, [])
  

  return (
    <>
      <h1 style={{textAlign: 'center'}}>
        Favorites
      </h1>
      {loading ? <Loading/> : <ListOfFavorites favorites={favorites}/> }
    </>
  );
};

export default Favorites;
