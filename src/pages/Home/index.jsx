/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable import/prefer-default-export */
import React from 'react';
import { ListOfCategories, ListOfPhotoCards, ErrorPage, Loading } from '../../components';

export const Home = (props) => {

  const { id, error, loading, initState: {photos, categories}, uid } = props;

  return (
    <>
      {error && <ErrorPage error={error} />}
      {loading && <Loading/>}
      {(!error && !loading) && (
        <>
          <ListOfCategories categories={categories}/>
          <ListOfPhotoCards id={id} photos={photos} uid={uid}/>
        </>
      )}      
    </>
  );
};

export default Home;
