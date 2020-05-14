import React, { useState } from 'react';
import propTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';

import { useStoreContext } from '../../../store/storeContext';
import { dbDeleteBudget } from '../../../API/dbActions';
import { deleteBudget } from '../../../store/actions';
import { useSnackbarContext } from '../../../components/Snackbars/snackbarContext';
import { useLoadingContext } from '../../../components/Loading/loadingContext';
import { DELETE, CANCEL, ERROR } from '../../../components/Snackbars/snackbarActions';
import useStyles from './DeleteHistory.style';

export default function DeleteHistory({ budgetId }) {
  const classes = useStyles();
  const { dispatch } = useStoreContext();
  const { snackbarDispatch } = useSnackbarContext();
  const { setLoading } = useLoadingContext();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCancel = () => {
    setOpen(false);
    snackbarDispatch(CANCEL);
  };

  const handleDeleteBudget = async () => {
    setLoading(true);
    handleClose();
    try {
      await dbDeleteBudget(budgetId);
      dispatch(deleteBudget(budgetId));
      snackbarDispatch(DELETE);
      setLoading(false);
    } catch (err) {
      snackbarDispatch(ERROR);
      setLoading(false);
    }
  };

  return (
    <>
      <Tooltip
        arrow
        title={<FormattedMessage id="delete" />}
      >
        <IconButton
          className={classes.iconButton}
          onClick={handleOpen}
        >
          <DeleteIcon className={classes.icon} classes={{ root: 'my-class-name' }} />
        </IconButton>
      </Tooltip>

      <Dialog
        open={open}
        onClose={handleClose}
        classes={{ paper: classes.dialog }}
      >
        <DialogTitle className={classes.dialogTitle} disableTypography>
          <FormattedMessage id="deleteWarning" />
        </DialogTitle>
        <DialogActions className={classes.dialogAction}>
          <Button
            onClick={handleCancel}
            className={classes.actionButton}
            color="secondary"
          >
            <FormattedMessage id="cancel" />
          </Button>
          <Button
            onClick={handleDeleteBudget}
            className={classes.actionButton}
            color="primary"
          >
            <FormattedMessage id="ok" />
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

DeleteHistory.propTypes = {
  budgetId: propTypes.string.isRequired,
};
