/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-tag-spacing */
/* eslint-disable import/prefer-default-export */
import React from 'react';
import { useData } from '../../context/DataContext';
import { PhotoCard } from '../../components';

const Detail = (props) => {
  const { detailId } = props;
  const { state } = useData(); 
  const detailPhotoCard = state.photos.filter((photo) => photo.id === Number(detailId));
  return (
    <div>
      <PhotoCard {...detailPhotoCard[0]} />
    </div>
  );
};

export default Detail;

