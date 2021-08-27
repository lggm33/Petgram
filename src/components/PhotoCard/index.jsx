/* eslint-disable operator-linebreak */
/* eslint-disable import/prefer-default-export */
import React from 'react';
import { Link } from '@reach/router';
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md';
import useLocalStorage from '../../hooks/useLocalStorage';
import useNearScreen from '../../hooks/useNearScreen';
import { ImgWrapper, Img, Button, Container } from './styles';

const DEFAULT_IMAGE = 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60';

const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE }) => {

  const key = `like-${id}`;
  const keyLikes = `keyLikes-${id}`;

  const [show, element] = useNearScreen();

  const [liked, setLiked] = useLocalStorage(key, false);
  const [countLikes, setCountLikes] = useLocalStorage(keyLikes, likes);

  const Icon = liked ? MdFavorite : MdFavoriteBorder;

  const handleOnClick = () => {
    setLiked(!liked);
    liked ? (
      setCountLikes(countLikes - 1)
    ) : (
      setCountLikes(countLikes + 1)
    );
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

            <Button>
              <Icon size='32px' onClick={() => handleOnClick()} />
              {' '}
              {countLikes}
              {' '}
              likes!
            </Button>
          </>
        )
      }
    </Container>

  );
};

export default PhotoCard;

