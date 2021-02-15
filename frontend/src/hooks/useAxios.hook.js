import { useState, useEffect } from 'react';
import axios from 'axios';

const useAxios = (url, setData) => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(url);
        const resJson = await res.data;
        setData(resJson);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    })();
  }, [url, setData]);
  return { loading, error };
};
export default useAxios;