import { useState, useEffect } from 'react';

function useStream(stream$, defaultValue) {
  const [data, setData] = useState(defaultValue);
  const [error, setError] = useState(null);

  useEffect(() => {
    const subscription = stream$.subscribe({
      next: (data) => {
        setTimeout(() => {
          setData(data);
        }, 3000);
      },
      error: (error) => {
        setError(error);
      }
    });
    return () => {
      subscription.unsubscribe();
    }
  }, [stream$]);

  return [data, error];
}

export default useStream;