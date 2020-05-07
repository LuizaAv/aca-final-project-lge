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

export default function DeleteCategory({ category }) {
  const classes = useStyles();
  const { dispatch } = useStoreContext();
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
      await dbDeleteCategory(category);
      dispatch(deleteCategory(category));
      snackbarDispatch(DELETE);
    } catch (err) {
      snackbarDispatch(ERROR);
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
          <DeleteIcon className={classes.icon} />
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
  category: propTypes.shape({
    id: propTypes.string.isRequired,
    type: propTypes.string.isRequired,
    name: propTypes.string.isRequired,
  }),
};

DeleteCategory.defaultProps = {
  category: {
    id: propTypes.string.isRequired,
    type: propTypes.string.isRequired,
    name: propTypes.string.isRequired,
  },
};
