import React, { useState, useContext } from 'react';

const DataContext = React.createContext({});

const initialState = { categories: [], photos: [] };

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

  const value = {
    initState,
    state,
  };

  return (
    <DataContext.Provider value={value}>
      {children}
    </DataContext.Provider>
  )
};

