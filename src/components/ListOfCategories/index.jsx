/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/prefer-default-export */
import React, { useEffect, useState } from 'react';
import { Category } from '../index';
import { List, Item } from './styles';

export const ListOfCategories = ({categories}) => {

  const [showFixed, setShowFixed] = useState(false);

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
        categories.map((category) => <Item key={category.id}><Category {...category} path={`/pet/${category.id}`} /></Item>)
      }
    </List>
  );

  return (
    <>
      {renderList()}
      {showFixed && renderList(true)}
    </>
  );
};

export default ListOfCategories;

