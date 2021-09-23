/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {getFirestore, doc, getDoc,  } from 'firebase/firestore';
import { useAuth } from '../../context/AuthContext';
import { Cuadricula, Img, Container } from './styles';

const DEFAULT_IMAGE = 'https://i.imgur.com/dJa0Hpl.jpg';

const ListOfFavorites = ({cover = DEFAULT_IMAGE}) =>{
  
  const db = getFirestore()
  const {currentUser} = useAuth()
  const userUid = currentUser.uid
  const [favorites, setFavorites] = useState([])

  useEffect(() => {
    getDoc(doc(db, 'favorites', userUid))
      .then((response) => {setFavorites(response.data().listUrls)})
  }, [])
  
  return (
    <>
      <Cuadricula >
    {favorites.map((element) => (
        <Container key={element}>
          <Img src={element}></Img>
          </Container>
        )
        )
      }
      </Cuadricula>
    </> 
  )
}

export default ListOfFavorites
