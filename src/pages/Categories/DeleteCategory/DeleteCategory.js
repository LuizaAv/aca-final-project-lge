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
import { dbDeleteCategory } from '../../../API/dbActions';
import { deleteCategory } from '../../../store/actions';
import { useSnackbarContext } from '../../../components/Snackbars/snackbarContext';
import { DELETE, CANCEL, ERROR } from '../../../components/Snackbars/snackbarActions';
import useStyles from './DeleteCategory.style';

export default function DeleteCategory({ categoryId }) {
  const classes = useStyles();
  const { state, dispatch } = useStoreContext();
  const [open, setOpen] = useState(false);
  const { snackbarDispatch } = useSnackbarContext();

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

  const handleDeleteCategory = async () => {
    handleClose();
    try {
      await dbDeleteCategory(categoryId);
      dispatch(deleteCategory(categoryId));
      snackbarDispatch(DELETE);
    } catch (err) {
      snackbarDispatch(ERROR);
    }
  };

  const isCategoryUsed = state.budget.some((item) => item.categoryId === categoryId);

  return (
    <>
      <Tooltip
        arrow
        title={isCategoryUsed ? <FormattedMessage id="isCategoryUsed" /> : <FormattedMessage id="delete" />}
      >
        <span>
          <IconButton
            className={classes.iconButton}
            onClick={handleOpen}
            disabled={isCategoryUsed}
          >
            <DeleteIcon className={classes.icon} />
          </IconButton>
        </span>
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
            onClick={handleDeleteCategory}
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

DeleteCategory.propTypes = {
  categoryId: propTypes.string.isRequired,
};
