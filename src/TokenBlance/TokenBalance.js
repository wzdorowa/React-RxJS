import React, { useMemo } from 'react';
import balanceWatcher from "../BalanceWatcher";
import useStream from '../useStream';
import Loader from '../Loader/Loader';
import './TokenBalance.css';

function TokenBalance(props) {
  const watchItem = props.watchItem;
  const [balance, error] = useStream(useMemo(() => balanceWatcher.getBalance(watchItem), []));

  if (error !== null) {
    return (<h1>Ошибка поймана: {error.message}</h1>)
  } else {
    if (balance === undefined) {
      return (<Loader/>);
    } else {
      return (
        <span className='balance'>{balance}</span>
      )
    }
  }
}

export default TokenBalance;