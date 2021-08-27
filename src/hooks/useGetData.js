import { useState } from 'react';
import axios from 'axios';

const useGetData = (query) => {
  const [loading, setLoading] = useState(true);
  const api = `https://curso-react-avanzado-default-rtdb.firebaseio.com/${query}.json`;

  const getData = async () => {
    try {
      const response = await axios.get(api);
      setLoading(false);
      return response.data;
    } catch (e) {
      const error = e;
      console.log(error);
      setLoading(false);
      return error;
    }
  };

  return { loading, setLoading, getData };
};

export default useGetData;
