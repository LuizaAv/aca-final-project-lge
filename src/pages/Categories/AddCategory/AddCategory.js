import React, { useState } from 'react';
import propTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import useStyles from './AddCategory.style';
import {FormattedMessage} from 'react-intl';

import { useStoreContext } from '../../../store/storeContext';
import { addCategory } from '../../../store/actions';
import { dbAddCategory } from '../../../API/dbActions';


export default function AddCategory({ setSnackbarType, setSnackbarOpen }) {
  const classes = useStyles();
  const { dispatch } = useStoreContext();
  const [type, setType] = useState('');
  const [name, setName] = useState('');
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSnackbarAdd = () => {
    setSnackbarType('add');
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

  const handleTypeChange = (e) => {
    setType(e.target.value);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleStateReset = () => {
    setType('');
    setName('');
    setOpen(false);
  };

  const handleAddCategory = () => {
    const id = uuidv4();
    const addedCategory = { id, type, name };
    handleStateReset();
    dbAddCategory(addedCategory)
      .then(() => dispatch(addCategory(addedCategory)))
      .then(() => handleSnackbarAdd())
      .catch(() => handleSnackbarErroe());
  };

  const doneDisabled = (name === '' || type === '');

  return (
    <>
      <Button
        variant="outlined"
        onClick={handleOpen}
        className={classes.button}
      >
        <FormattedMessage id='AddCategory'/>
      </Button>

      <Dialog
        classes={{ paper: classes.dialog }}
        fullWidth
        maxWidth="xs"
        onClose={handleClose}
        open={open}
      >
        <DialogTitle className={classes.title}>
        <FormattedMessage id='AddCategory'/>
          </DialogTitle>

        <FormControl className={classes.itemSize}>
          <InputLabel>
          <FormattedMessage id='CategoryType'/>
          </InputLabel>
          <Select value={type} onChange={handleTypeChange}>
            <MenuItem value="expense">
              <FormattedMessage id='Expense'/></MenuItem>
            <MenuItem value="income">
            <FormattedMessage id='Income'/></MenuItem>
          </Select>
        </FormControl>

        <TextField
          className={classes.itemSize}
          label={<FormattedMessage id='CategoryName' />}
          value={name}
          onChange={handleNameChange}
        />

        <DialogActions className={classes.dialogAction}>
          <Button
            className={classes.actionButton}
            onClick={handleCancel}
            color="secondary"
          >
            <FormattedMessage id='Cancel'/>
          </Button>
          <Button
            className={classes.actionButton}
            disabled={doneDisabled}
            onClick={handleAddCategory}
            color="primary"
          >
            <FormattedMessage id='Done'/>
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

AddCategory.propTypes = {
  setSnackbarType: propTypes.func.isRequired,
  setSnackbarOpen: propTypes.func.isRequired,
};
