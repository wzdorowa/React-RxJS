import { Alert, AlertTitle } from '@mui/material';
import './AlertError.css';

function AlertError({ error }: { error: string }) {
  return (
    <Alert severity="error" className="alert-error">
      <AlertTitle>Поймана ошибка:</AlertTitle>
      {error}
    </Alert>
  );
}
export default AlertError;
