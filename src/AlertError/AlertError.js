import { Alert, AlertTitle } from '@mui/material';
import './AlertError.css';

function AlertError(props) {
  return(
    <Alert severity="error" className='alert-error'>
      <AlertTitle>Поймана ошибка:</AlertTitle>
      {props.error}
    </Alert>
  )
}
export default AlertError;