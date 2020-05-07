import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { FormattedMessage } from 'react-intl';
import { useSnackbarContext } from './snackbarContext';
import { CLOSE } from './snackbarActions';

export default function Snackbars() {
  const { snackbarState, snackbarDispatch } = useSnackbarContext();

  const handleClose = () => {
    snackbarDispatch(CLOSE);
  };

  return (
    <Snackbar open={snackbarState.open} autoHideDuration={3000} onClose={handleClose}>
      <MuiAlert variant="filled" severity={snackbarState.severity} onClose={handleClose}>
        <FormattedMessage id={snackbarState.message} />
      </MuiAlert>
    </Snackbar>
  );
}
