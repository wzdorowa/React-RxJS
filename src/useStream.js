import { useState, useEffect } from 'react';

function useStream(stream$, defaultValue) {
  const [data, setData] = useState(defaultValue);

  useEffect(() => {
    const subscription = stream$.subscribe(data => {
      setData(data);
    });
    return () => {
      subscription.unsubscribe();
    }
  }, [stream$]);

  return data;
}

export default useStream;