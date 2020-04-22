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
import { CirclePicker } from 'react-color';
import Popover from '@material-ui/core/Popover';

import useStyles from './AddCategory.style';
import { useStoreContext } from '../../../store/storeContext';
import { addCategory } from '../../../store/actions';
import { dbAddCategory } from '../../../API/dbActions';

const colors = [
  '#e53935', '#ec407a', '#ffcdd2', '#ab47bc', '#7e57c2', '#0D47A1',
  '#29b6f6', '#80deea', '#26a69a', '#9ccc65', '#689f38', '#afb42b',
  '#fdd835', '#FF8F00', '#ff7043', '#8d6e63', '#616161', '#78909c',
];

export default function AddCategory({ setSnackbarType, setSnackbarOpen }) {
  const classes = useStyles();
  const { dispatch } = useStoreContext();
  const [type, setType] = useState('');
  const [name, setName] = useState('');
  const [color, setColor] = useState('');
  const [dialogOpen, setDialogOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleDialogOpen = () => {
    setDialogOpen(true);
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
  };

  const handlePopoverOpen = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
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
    setDialogOpen(false);
    setSnackbarType('cancel');
    setSnackbarOpen(true);
  };

  const handleTypeChange = (e) => {
    setType(e.target.value);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleColorChange = (selectedColor) => {
    setColor(selectedColor.hex);
  };

  const handleStateReset = () => {
    setType('');
    setName('');
    setColor('');
    setDialogOpen(false);
  };

  const handleAddCategory = () => {
    const id = uuidv4();
    const addedCategory = {
      id, type, name, color,
    };
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
        onClick={handleDialogOpen}
        className={classes.button}
      >
        Add Category
      </Button>

      <Dialog
        classes={{ paper: classes.dialog }}
        fullWidth
        maxWidth="xs"
        onClose={handleDialogClose}
        open={dialogOpen}
      >
        <DialogTitle className={classes.title}>Add category</DialogTitle>

        <FormControl className={classes.itemSize}>
          <InputLabel>Category type</InputLabel>
          <Select value={type} onChange={handleTypeChange}>
            <MenuItem value="expense">Expense</MenuItem>
            <MenuItem value="income">Income</MenuItem>
          </Select>
        </FormControl>

        <TextField
          className={classes.itemSize}
          label="Category name"
          value={name}
          onChange={handleNameChange}
        />

        <div className={classes.colorPicker}>
          <Button
            style={{ backgroundColor: color }}
            onClick={handlePopoverOpen}
            variant="outlined"
          >
            select color
          </Button>
          <Popover
            open={Boolean(anchorEl)}
            onClick={handlePopoverClose}
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: 'center',
              horizontal: 'center',
            }}
            transformOrigin={{
              vertical: 'center',
              horizontal: 'center',
            }}
          >
            <MenuItem>
              <CirclePicker
                onChange={handleColorChange}
                colors={colors}
                color={color}
              />
            </MenuItem>
          </Popover>
        </div>

        <DialogActions className={classes.dialogAction}>
          <Button
            className={classes.actionButton}
            onClick={handleCancel}
            color="secondary"
          >
            Cancel
          </Button>
          <Button
            className={classes.actionButton}
            disabled={doneDisabled}
            onClick={handleAddCategory}
            color="primary"
          >
            Done
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
