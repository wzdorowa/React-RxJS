import React, { useMemo } from 'react';
import useStream from '../useStream';
import './Loader.css';

function Loader(props) {
  const { stream$, progressLoader, AlertError } = props;
  const [data, error, isLoading] = useStream(useMemo(() => stream$, []), []);

  if (error !== null) {
    return (props.children(<AlertError error={error.message}/>));
  } else {
    if (isLoading) {
      return (props.children(progressLoader));
    } else {
      return (props.children(data));
    }
  }
}

export default Loader;