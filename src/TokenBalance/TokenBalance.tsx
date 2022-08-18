import { CircularProgress } from '@mui/material';
import Loader from '../Loader/Loader';
import AlertErrorMini from '../AlertErrorMini/AlertErrorMini';
import balanceWatcher from '../api/BalanceWatcher';
import './TokenBalance.css';

function TokenBalance({ watchItem }: { watchItem: string[] }) {
  return (
    <Loader
      stream$={balanceWatcher.getBalance(watchItem)}
      progressLoader={<CircularProgress size="4vh" />}
      AlertError={AlertErrorMini}
    >
      {
        (data) => {
          if (typeof data === 'number') {
            return (<span className="balance">{data}</span>);
          }
          return data;
        }
      }
    </Loader>
  );
}

export default TokenBalance;
