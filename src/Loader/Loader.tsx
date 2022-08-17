import { useMemo } from 'react';
import { ReplaySubject } from 'rxjs';
import useStream from '../useStream';
import './Loader.css';

type LoaderProps = {
  stream$: ReplaySubject<unknown>,
  progressLoader: JSX.Element,
  AlertError: JSX.Element,
  children: (data: boolean | null | undefined) => boolean | JSX.Element | null | undefined,
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
