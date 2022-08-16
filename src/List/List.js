import React, { useMemo } from 'react';
import balanceWatcher from "../BalanceWatcher";
import useStream from '../useStream';
import Loader from '../Loader/Loader';
import './List.css';

function WatchList() {
  const [watchList, error] = useStream(useMemo(() => balanceWatcher.getWatchList(), []), []);

  if (error !== null) {
    return (<h1>Ошибка поймана: {error.message}</h1>)
  } else {
    if (watchList.length === 0) {
      return (<Loader/>);
    } else {
      return (
        <ul className="list">
          {watchList.map((item) =>
            <li key={item[0]} className="list__item">
              <span className="list__item-address">{item[0]}</span> {item[1]}
            </li>
          )}
        </ul>
      )
    }
  }
}

export default WatchList;