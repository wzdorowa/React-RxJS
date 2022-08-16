import { Alert, Tooltip } from '@mui/material';

function AlertErrorMini(props) {
  const textAlert = `Ошибка: ${props.error}`;
  return(
    <Tooltip title={textAlert} placement="right">
      <Alert severity="error" className='alert-error-min'/>
    </Tooltip>
  )
}
export default AlertErrorMini;