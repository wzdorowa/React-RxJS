import { useState, useEffect } from 'react';

function useStream(stream$) {
  const [watchList, setWatchList] = useState();
  const [error, setError] = useState(null);

  useEffect(() => {
    const subscription = stream$.subscribe({
      next: (list) => {
        setTimeout(() => {
          setWatchList(list);
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

  return [watchList, error];
}

export default useStream;