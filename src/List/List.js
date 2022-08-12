import React, { useState, useEffect } from 'react';
import facade from "../Facade";
import './List.css';

function List() {
  const [list, setList] = useState([]);

  useEffect(() => {
    const stream$ = facade.getItem();
    stream$.subscribe(data => {
      setList(data);
    });
    return () => {
      console.log('list', list);
    }
  }, []);


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