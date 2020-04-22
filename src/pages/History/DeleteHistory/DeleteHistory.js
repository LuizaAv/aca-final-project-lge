import React, { useState } from 'react';
import propTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';

import { useStoreContext } from '../../../store/storeContext';
import { deleteBudget } from '../../../store/actions';
import { dbDeleteBudget } from '../../../API/dbActions';
import useStyles from './DeleteHistory.style';


export default function DeleteHistory({
  budget, setSnackbarType, setSnackbarOpen,
}) {
  const classes = useStyles();
  const { dispatch } = useStoreContext();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSnackbarDelete = () => {
    setSnackbarType('delete');
    setSnackbarOpen(true);
  };

  const handleSnackbarErroe = () => {
    setSnackbarType('error');
    setSnackbarOpen(true);
  };

  const handleCancel = () => {
    setOpen(false);
    setSnackbarType('cancel');
    setSnackbarOpen(true);
  };

  const handleDeleteBudget = () => {
    handleClose();
    dbDeleteBudget(budget)
      .then(() => dispatch(deleteBudget(budget)))
      .then(() => handleSnackbarDelete())
      .catch(() => handleSnackbarErroe());
  };

  return (
    <>
      <IconButton
        className={classes.iconButton}
        onClick={handleOpen}
      >
        <DeleteIcon className={classes.icon} />
      </IconButton>

      <Dialog
        open={open}
        onClose={handleClose}
        classes={{ paper: classes.dialog }}
      >
        <DialogTitle className={classes.dialogTitle} disableTypography>
          Are you sure you want to delete this item?
        </DialogTitle>
        <DialogActions className={classes.dialogAction}>
          <Button
            onClick={handleCancel}
            className={classes.actionButton}
            color="secondary"
          >
            Cancel
          </Button>
          <Button
            onClick={handleDeleteBudget}
            className={classes.actionButton}
            color="primary"
          >
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

DeleteHistory.propTypes = {
  budget: propTypes.shape({
    id: propTypes.string.isRequired,
    type: propTypes.string.isRequired,
    name: propTypes.string.isRequired,
    category: propTypes.string.isRequired,
    amount: propTypes.number.isRequired,
    date: propTypes.instanceOf(Date),
  }),
  setSnackbarType: propTypes.func.isRequired,
  setSnackbarOpen: propTypes.func.isRequired,
};

DeleteHistory.defaultProps = {
  budget: {
    id: propTypes.string.isRequired,
    type: propTypes.string.isRequired,
    name: propTypes.string.isRequired,
    category: propTypes.string.isRequired,
    amount: propTypes.number.isRequired,
    date: propTypes.instanceOf(Date),
  },
};
