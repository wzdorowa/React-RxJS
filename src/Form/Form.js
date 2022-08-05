import { useState } from "react";
import { TextField, Button } from "@mui/material";
import './Form.css';

function Form() {
  const [userAddress, setUserAddress] = useState();
  const [ERC20Address, setERC20Address] = useState();

  const handleChangeUserAddress = (event) => {
    console.log('value', event.target.value);
    setUserAddress(event.target.value);
  }

  const handleChangeERC20Address = (event) => {
    console.log('value', event.target.value);
    setERC20Address(event.target.value);
  }

  const onButtonClick = () => {
    localStorage.setItem(userAddress, ERC20Address)
  }

  return (
    <div className="form">
      <TextField onChange={handleChangeUserAddress} className="form__input" id="outlined-basic" label="User address" variant="outlined" />
      <TextField onChange={handleChangeERC20Address} id="outlined-basic" label="ERC20 address" variant="outlined" />
      <Button variant="contained" size="large" onClick={onButtonClick}>Watch</Button>
    </div>
  );
}

export default Form;