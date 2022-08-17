import { useState, useEffect } from 'react';
import { ReplaySubject } from 'rxjs';

function useStream(stream$: ReplaySubject<unknown>) {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const subscription = stream$.subscribe({
      next: (dataStream) => {
        setTimeout(() => {
          setData(dataStream);
          setLoading(false);
        }, 2000);
      },
      error: (errorStream) => {
        setError(errorStream);
      },
    });
    return () => {
      subscription.unsubscribe();
    };
  }, [stream$]);

  return [data, error, isLoading];
}

export default useStream;
