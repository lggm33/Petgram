/* eslint-disable react-hooks/exhaustive-deps */

/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import React, { useEffect } from 'react';
import { useData } from '../../context/DataContext';
import { ListOfCategories, ListOfPhotoCards } from '../../components';

export const Home = (props) => {

  const {initState} = useData()
  const { id } = props;

  useEffect(async () => {
    const getCategories = axios.get('https://curso-react-avanzado-default-rtdb.firebaseio.com/categories.json');
    const getPhotos = axios.get('https://curso-react-avanzado-default-rtdb.firebaseio.com/photos.json');

    await axios.all([getCategories, getPhotos])
      .then(axios.spread((...allData) => {
        initState({
          categories: allData[0].data,
          photos: allData[1].data,
        });
      }));

  }, []);

  return (
    <>
      <ListOfCategories />
      <ListOfPhotoCards id={id} />
    </>
  );
};

export default Home;
