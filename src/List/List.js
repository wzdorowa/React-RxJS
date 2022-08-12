import React from 'react';
import facade from "../Facade";
import useStream from '../useStream';
import './List.css';

function List() {
  const list = useStream(facade.getItem(), []);

  if (list.length > 0 ) {
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

export default List;