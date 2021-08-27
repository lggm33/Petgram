import { useState } from 'react';

const initialState = { categories: [], photos: [] };

const useGlobalState = () => {
  const [state, setState] = useState(initialState);

  const initState = (payload) => {
    setState({
      ...state,
      categories: payload.categories,
      photos: payload.photos,
    });
  };

  return {
    initState,
    state,
  };
};
export default useGlobalState;
