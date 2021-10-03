/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-sequences */
/* eslint-disable no-unused-expressions */
/* eslint-disable operator-linebreak */
/* eslint-disable import/prefer-default-export */
import React, {useState} from 'react';
import {increment, arrayUnion, arrayRemove, } from 'firebase/firestore';
import { Link } from '@reach/router';
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md';
import useNearScreen from '../../hooks/useNearScreen';
import { ImgWrapper, Img, Button, Container } from './styles';
import useSnapshot from '../../hooks/useSnapshot';
import useFirestore from '../../hooks/useFirestore';

const PhotoCard = ({ fbId, id, src, currentUser, uid }) => {

  const [show, element] = useNearScreen();
  const [liked, setLiked] = useState(false);
  const {updateDocument} = useFirestore();

  const [snapPhotos, loadingPhotos] = useSnapshot('photos', fbId)

  const Icon =  snapPhotos.favoritesUser?.some((userID) => userID === uid) ? MdFavorite : MdFavoriteBorder

  const handleOnClick = async () => {
    setLiked(!liked);
    if (liked) {
      await updateDocument('photos', fbId, {
        favoritesUser: arrayRemove(uid),
        likes: increment(-1)
      })

    } else {
      await updateDocument('photos', fbId, {
        favoritesUser: arrayUnion(uid),
        likes: increment(1)
      })
    }
    

  };


  return (
    <Container ref={element}>
      {
        show && (
          <>
            <Link to={`/detail/${fbId}`}>
              <ImgWrapper>
                <Img src={src} />
              </ImgWrapper>
            </Link>

            {uid && (
              <Button>
                {!loadingPhotos && <Icon size='32px' onClick={() => handleOnClick()} /> }
                
                {' '}
                {snapPhotos.likes}
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

