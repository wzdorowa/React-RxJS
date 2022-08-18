import { useMemo } from 'react';
import { Observable, ReplaySubject } from 'rxjs';
import useStream from '../api/useStream';
import './Loader.css';

type LoaderProps = {
  stream$: ReplaySubject<unknown> | Observable<number>,
  progressLoader: JSX.Element,
  AlertError: ({ error }: { error: string; }) => JSX.Element,
  children: (data) => JSX.Element,
};

function Loader(props: LoaderProps) {
  const { stream$, progressLoader, AlertError } = props;
  const [data, error, isLoading] = useStream(useMemo(() => stream$, []), []);

  if (error !== null) {
    return (props.children(<AlertError error={error.message} />));
  }
  if (isLoading) {
    return (props.children(progressLoader));
  }
  return (props.children(data));
}

export default Loader;
