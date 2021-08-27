/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/prefer-default-export */
import React, { useEffect, useState } from 'react';
import { useData } from '../../context/DataContext';
import { Loading, PhotoCard } from '../index';

const ListOfPhotoCards = (props) => {
  const { id } = props;
  const { state } = useData();
  const [loading, setLoading] = useState(true);

  useEffect(() => { state.photos.length !== 0 && setLoading(false); }, [state]);

  const filteredCategories = () => {
    if (id) {
      return (state.photos.filter((photo) => photo.categoryId === Number(id)));
    }
    return state.photos;
  };

  return (
    <ul>
      {
        loading ? (
          <Loading />) : (
          filteredCategories().map((item) => <PhotoCard key={item.id} {...item} />)
        )
      }
    </ul>
  );
};

export default ListOfPhotoCards;
