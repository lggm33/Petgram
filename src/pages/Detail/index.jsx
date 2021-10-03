/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-tag-spacing */
/* eslint-disable import/prefer-default-export */
import React, {useEffect, useState} from 'react';
import { PhotoCard, Loading } from '../../components';

const Detail = (props) => {
  const { detailId, initState } = props;
  const [detailPhoto, setDetailPhoto] = useState({}) 
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (initState.photos.length > 0) {
      setDetailPhoto(initState.photos.filter((photo) => photo.fbId === detailId))
      setLoading(false)
    } 

    
  }, [initState])
  
  console.log({detailPhoto})
  
  return (
    <div>
      {loading ? <Loading/> : <PhotoCard {...detailPhoto[0]}/>}
    </div>
  );
};

export default Detail;

