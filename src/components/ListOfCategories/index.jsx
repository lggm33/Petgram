/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/prefer-default-export */
import React, { useEffect, useState } from 'react';
import { useData } from '../../context/DataContext';
import { Category, Loading } from '../index';
import { List, Item } from './styles';

export const ListOfCategories = () => {

  const [showFixed, setShowFixed] = useState(false);
  const { state } = useData();
  const [loading, setLoading] = useState(true);

  useEffect(() => { state.categories.length !== 0 && setLoading(false); }, [state]);

  useEffect(() => {
    const onScroll = (e) => {
      const newShowFixed = window.scrollY > 200;
      showFixed !== newShowFixed && setShowFixed(newShowFixed);
    };
    document.addEventListener('scroll', onScroll);
    return () => document.removeEventListener('scroll', onScroll);
  }, [showFixed]);

  const renderList = (fixed) => (
    <List fixed={fixed}>
      {
        state.categories.map((category) => <Item key={category.id}><Category {...category} path={`/pet/${category.id}`} /></Item>)
      }
    </List>
  );

  return (
    <>
      {loading ? <Loading /> : renderList()}
      {showFixed && renderList(true)}
    </>
  );
};

export default ListOfCategories;

