/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-sequences */
/* eslint-disable no-unused-expressions */
/* eslint-disable operator-linebreak */
/* eslint-disable import/prefer-default-export */
import React, {useEffect, useState} from 'react';
import {getFirestore, doc, updateDoc, increment, arrayUnion, arrayRemove, onSnapshot} from 'firebase/firestore';
import { useAuth} from '../../context/AuthContext';
import { Link } from '@reach/router';
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md';
import useNearScreen from '../../hooks/useNearScreen';
import { ImgWrapper, Img, Button, Container } from './styles';


const DEFAULT_IMAGE = 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60';
const db = getFirestore()


const PhotoCard = ({ fbId, id, src = DEFAULT_IMAGE }) => {
  
  const {currentUser} = useAuth();
  let userUid = ''
  let photoIdFb = {}
  let favoriteRef = {}

  if (currentUser) {
    userUid = currentUser.uid
    photoIdFb = doc(db, 'photos', fbId )
    favoriteRef = doc(db, 'favorites', userUid)
  }
  
  const [data, setData] = useState({})

  const [show, element] = useNearScreen();

  const [liked, setLiked] = useState(false);

  const Icon = liked ? MdFavorite : MdFavoriteBorder;



// fetch number of likes photos
  useEffect(() => {
    try {
      let unsub = onSnapshot(doc(db, 'photos', fbId), (snap) => {
        setData(snap.data())
        return () => unsub()
      })
    } catch {
      null
    }
    // return () => {unsub()}
  }, [])

// fetch if like photo
  useEffect(() => {
    try {
      const unsub = onSnapshot(doc(db, 'favorites', userUid), (snap) => {
        const data = snap.data()
        data && (
          setLiked(data.listUrls.find((element) => element === src ))
        )
      })
      return () => unsub()
    } catch {
      null
    }
    
    
  }, []) 
  

  const handleOnClick = async () => {
    setLiked(!liked);
    if (liked) {
      await updateDoc(photoIdFb, {likes: increment(-1)})
      await updateDoc(favoriteRef, {listUrls: arrayRemove(src)})

    } else {
      await updateDoc(photoIdFb, {likes: increment(1)});
      await updateDoc(favoriteRef, {listUrls: arrayUnion(src)})
    }
  };

  return (
    <Container ref={element}>
      {
        show && (
          <>
            <Link to={`/detail/${id}`}>
              <ImgWrapper>
                <Img src={src} />
              </ImgWrapper>
            </Link>

            {currentUser && (
              <Button>
                <Icon size='32px' onClick={() => handleOnClick()} />
                {' '}
                {data.likes}
                {' '}
                likes!
              </Button>
            ) }
            
          </>
        )
      }
    </Container>

  );
};

export default PhotoCard;

