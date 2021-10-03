/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/prefer-default-export */
import React from 'react';
import {  PhotoCard } from '../index';

const ListOfPhotoCards = (props) => {
  const { id, photos, uid } = props;


  const filteredCategories = () => {
    if (id) {
      return (photos.filter((photo) => photo.categoryId === Number(id)));
    }
    return photos;
  };

  return (
    <ul>
      {filteredCategories().map((item) => <PhotoCard key={item.id} {...item} uid={uid} />)}
    </ul>
  );
};

export default ListOfPhotoCards;
