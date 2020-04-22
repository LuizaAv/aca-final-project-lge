import React, { useState } from 'react';
import propTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import { CirclePicker } from 'react-color';
import Popover from '@material-ui/core/Popover';

import { useStoreContext } from '../../../store/storeContext';
import { editCategory } from '../../../store/actions';
import useStyles from './EditCategory.style';
import { dbEditCategory } from '../../../API/dbActions';

const colors = [
  '#e53935', '#ec407a', '#ffcdd2', '#ab47bc', '#7e57c2', '#0D47A1',
  '#29b6f6', '#80deea', '#26a69a', '#9ccc65', '#689f38', '#afb42b',
  '#fdd835', '#FF8F00', '#ff7043', '#8d6e63', '#616161', '#78909c',
];

export default function EditCategory({
  category, setSnackbarType, setSnackbarOpen,
}) {
  const classes = useStyles();
  const { dispatch } = useStoreContext();
  const [type, setType] = useState(category.type);
  const [name, setName] = useState(category.name);
  const [color, setColor] = useState(category.color);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleOpen = () => {
    setDialogOpen(true);
  };

  const handleClose = () => {
    setDialogOpen(false);
  };

  const handlePopoverOpen = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const handleSnackbarEdit = () => {
    setSnackbarType('edit');
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

  const handleEditCategory = () => {
    const { id } = category;
    const editedCategory = {
      id, type, name, color,
    };
    handleClose();
    dbEditCategory(editedCategory)
      .then(() => dispatch(editCategory(editedCategory)))
      .then(() => handleSnackbarEdit())
      .catch(() => handleSnackbarErroe());
  };

  const doneDisabled = (
    name === '' || type === '' || color === ''
    || (
      type === category.type
      && name === category.name
      && color === category.color
    )
  );

  return (
    <>
      <IconButton
        className={classes.iconButton}
        onClick={handleOpen}
      >
        <EditIcon
          className={classes.icon}
        />
      </IconButton>

      <Dialog
        classes={{ paper: classes.dialog }}
        fullWidth
        maxWidth="xs"
        onClose={handleClose}
        open={dialogOpen}
      >
        <DialogTitle className={classes.title}>Edit Category</DialogTitle>

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
            onClick={handleEditCategory}
            color="primary"
          >
            Done
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

EditCategory.propTypes = {
  category: propTypes.shape({
    id: propTypes.string.isRequired,
    type: propTypes.string.isRequired,
    name: propTypes.string.isRequired,
    color: propTypes.string.isRequired,
  }),
  setSnackbarType: propTypes.func.isRequired,
  setSnackbarOpen: propTypes.func.isRequired,
};

EditCategory.defaultProps = {
  category: {
    id: propTypes.string.isRequired,
    type: propTypes.string.isRequired,
    name: propTypes.string.isRequired,
    color: propTypes.string.isRequired,
  },
};
