import { CircularProgress } from '@mui/material';
import Loader from '../Loader/Loader';
import TokenBalance from '../TokenBalance/TokenBalance';
import AlertError from '../AlertError/AlertError';
import balanceWatcher from '../api/BalanceWatcher';
import './WatchList.css';

function WatchList() {
  return (
    <Loader
      stream$={balanceWatcher.getWatchList()}
      progressLoader={<CircularProgress size="10vh" />}
      AlertError={AlertError}
    >
      {(data) => {
        if (data.length === 0) {
          <h1>Список пуст!</h1>;
        } else {
          return (
            <ul className="watch-list">
              {data.map((item: string[]) => (
                <li key={item[0]} className="watch-list__item">
                  <div>
                    <span className="watch-list__item-address">{item[0]}</span>
                    {' '}
                    {item[1]}
                  </div>
                  <TokenBalance watchItem={item} />
                </li>
              ))}
            </ul>
          );
        }
        return data;
      }}
    </Loader>
  );
}

export default WatchList;
