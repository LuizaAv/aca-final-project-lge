import React from 'react';
import propTypes from 'prop-types';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { FormattedMessage } from 'react-intl';

const cheсkType = (type) => {
  if (type === 'add') {
    return {
      severity: 'success',
      message: 'snackbarAdd',
    };
  }
  if (type === 'edit') {
    return {
      severity: 'success',
      message: 'snackbarEdit',
    };
  }
  if (type === 'delete') {
    return {
      severity: 'success',
      message: 'snackbarDelet',
    };
  }
  if (type === 'cancel') {
    return {
      severity: 'warning',
      message: 'snackbarCancel',
    };
  }
  if (type === 'error') {
    return {
      severity: 'error',
      message: 'snackbarError',
    };
  }
  return {
    severity: '',
    message: '',
  };
};

export default function Snackbars({ type, open, setOpen }) {
  const { severity, message } = cheсkType(type);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
      <MuiAlert variant="filled" severity={severity} onClose={handleClose}>
        <FormattedMessage id={message} />
      </MuiAlert>
    </Snackbar>
  );
}

Snackbars.propTypes = {
  type: propTypes.string.isRequired,
  open: propTypes.bool.isRequired,
  setOpen: propTypes.func.isRequired,
};
