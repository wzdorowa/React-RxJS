import React from 'react';
import { CircularProgress } from '@mui/material';
import Loader from '../Loader/Loader';
import AlertErrorMini from '../AlertErrorMini/AlertErrorMini';
import balanceWatcher from "../BalanceWatcher";
import './TokenBalance.css';

function TokenBalance(props) {
  return (
    <Loader
      stream$={balanceWatcher.getBalance(props.watchItem)}
      progressLoader={<CircularProgress size={'4vh'}/>}
      AlertError={AlertErrorMini}
    >
      {
        (data) => {
          if(typeof data === 'number') {
            return (<span className='balance'>{data}</span>);
          } else {
            return data;
          }
        }
      }
    </Loader>
  );
}

export default TokenBalance;