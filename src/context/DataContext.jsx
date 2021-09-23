import React, { useState, useContext } from 'react';

const DataContext = React.createContext({});

const initialState = { categories: [], photos: [], favorites: [] };

export const useData = () => useContext(DataContext)

export const DataProvider = ({ children}) => {
  const [state, setState] = useState(initialState);

  const initState = (payload) => {
    setState({
      ...state,
      categories: payload.categories,
      photos: payload.photos,
    });
  };

  const addFavorites = (payload) => {
    setState({
      ...state,
      favorites: [...state.favorites, payload],
    })
  }

  const deleteFavorites = (payload) => {
    setState({
      ...state,
      favorites: state.favorites.filter((items) => items !== payload)
    })
  }

  const value = {
    initState,
    addFavorites,
    deleteFavorites,
    state,
  };

  return (
    <DataContext.Provider value={value}>
      {children}
    </DataContext.Provider>
  )
};

