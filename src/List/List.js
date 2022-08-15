import React, { useMemo } from 'react';
import facade from "../Facade";
import useStream from '../useStream';
import Loader from '../Loader/Loader';
import './List.css';

function List() {
  const [list, error] = useStream(useMemo(() => facade.getItem(), []), []);

  if (error !== null) {
    return (<h1>Ошибка поймана: {error.message}</h1>)
  } else {
    if (list.length === 0) {
      return (<Loader/>);
    } else {
      return (
        <ul className="list">
          {list.map((item) =>
            <li key={item[0]} className="list__item">
              <span className="list__item-address">{item[0]}</span> {item[1]}
            </li>
          )}
        </ul>
      )
    }
  }
}

export default List;