import { useState, useEffect } from 'react';

function useStream(stream$) {
  const [data, setData] = useState();
  const [error, setError] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const subscription = stream$.subscribe({
      next: (data) => {
        setTimeout(() => {
          setData(data);
          setLoading(false);
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

  return [data, error, isLoading];
}

export default useStream;