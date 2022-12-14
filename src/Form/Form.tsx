import { useState } from 'react';
import { TextField, Button } from '@mui/material';
import balanceWatcher from '../api/BalanceWatcher';
import './Form.css';

function Form() {
  const [userAddress, setUserAddress] = useState('');
  const [ERC20Address, setERC20Address] = useState('');

  const handleChangeUserAddress = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserAddress(event.target.value);
  };

  const handleChangeERC20Address = (event: React.ChangeEvent<HTMLInputElement>) => {
    setERC20Address(event.target.value);
  };

  const onButtonClick = () => {
    balanceWatcher.addWatchItem([userAddress, ERC20Address]);
    setUserAddress('');
    setERC20Address('');
  };

  return (
    <div className="form">
      <TextField value={userAddress} onChange={handleChangeUserAddress} className="form__input" id="outlined-basic" label="User address" variant="outlined" />
      <TextField value={ERC20Address} onChange={handleChangeERC20Address} id="outlined-basic" label="ERC20 address" variant="outlined" />
      <Button onClick={onButtonClick} variant="contained" size="large">Watch</Button>
    </div>
  );
}

export default Form;
