import { Alert, Tooltip } from '@mui/material';

function AlertErrorMini({ error }: { error: string }): JSX.Element {
  const textAlert = `Ошибка: ${error}`;
  return (
    <Tooltip title={textAlert} placement="right">
      <Alert severity="error" className="alert-error-min" />
    </Tooltip>
  );
}
export default AlertErrorMini;
