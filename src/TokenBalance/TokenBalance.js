import React, { useMemo } from 'react';
import { CircularProgress } from '@mui/material';
import balanceWatcher from "../BalanceWatcher";
import useStream from '../useStream';
import './TokenBalance.css';

function TokenBalance(props) {
  const watchItem = props.watchItem;
  const [balance, error] = useStream(useMemo(() => balanceWatcher.getBalance(watchItem), []));

  if (error !== null) {
    return (<h1>Ошибка поймана: {error.message}</h1>)
  } else {
    if (balance === undefined) {
      return (<CircularProgress size={'4vh'} />);
    } else {
      return (
        <span className='balance'>{balance}</span>
      )
    }
  }
}

export default TokenBalance;