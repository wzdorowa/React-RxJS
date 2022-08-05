import { TextField, Button } from "@mui/material";
import './Form.css';

function Form() {
  return (
    <div className="form">
      <TextField id="outlined-basic" label="User address" variant="outlined" />
      <TextField id="outlined-basic" label="ERC20 address" variant="outlined" />
      <Button variant="contained" size="large">Send</Button>
    </div>
  );
}

export default Form;