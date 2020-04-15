import React from 'react';
import propTypes from 'prop-types';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';


export default function Snackbars({ type, open, setOpen }) {
  const typeChecking = () => {
    switch (type) {
      case 'add': return (
        <MuiAlert variant="filled" severity="success" onClose={() => { setOpen(false); }}>
          Added successfully
        </MuiAlert>
      );
      case 'edit': return (
        <MuiAlert variant="filled" severity="success" onClose={() => { setOpen(false); }}>
          Edited successfully
        </MuiAlert>
      );
      case 'delete': return (
        <MuiAlert variant="filled" severity="success" onClose={() => { setOpen(false); }}>
          Deleted successfully
        </MuiAlert>
      );
      case 'cancel': return (
        <MuiAlert variant="filled" severity="warning" onClose={() => { setOpen(false); }}>
          Аction was canceled
        </MuiAlert>
      );
      case 'error': return (
        <MuiAlert variant="filled" severity="error" onClose={() => { setOpen(false); }}>
          Error: Server is not responding
        </MuiAlert>
      );
      default: return null;
    }
  };
  return (
    <Snackbar open={open} autoHideDuration={3000} onClose={() => { setOpen(false); }}>
      {typeChecking()}
    </Snackbar>
  );
}

Snackbars.propTypes = {
  type: propTypes.string.isRequired,
  open: propTypes.bool.isRequired,
  setOpen: propTypes.func.isRequired,
};
