import { useState, useEffect } from 'react';

function useStream(stream$) {
  const [data, setData] = useState([]);

  useEffect(() => {
    stream$.subscribe(data => {
      setData(data);
    });
    return () => {
      console.log('list', data);
    }
  }, []);

  return data;
}

export default useStream;