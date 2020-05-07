import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { ChromePicker } from 'react-color';
import { FormattedMessage } from 'react-intl';

import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Popover from '@material-ui/core/Popover';

import useStyles from './AddCategory.style';
import { useStoreContext } from '../../../store/storeContext';
import { addCategory } from '../../../store/actions';
import { dbAddCategory } from '../../../API/dbActions';
import { useSnackbarContext } from '../../../components/Snackbars/snackbarContext';
import { ADD, CANCEL, ERROR } from '../../../components/Snackbars/snackbarActions';

export default function AddCategory() {
  const classes = useStyles();
  const { dispatch } = useStoreContext();
  const [type, setType] = useState('');
  const [name, setName] = useState('');
  const [color, setColor] = useState('');
  const [dialogOpen, setDialogOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const { snackbarDispatch } = useSnackbarContext();

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

  const handleCancel = () => {
    setDialogOpen(false);
    snackbarDispatch(CANCEL);
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

  const handleAddCategory = async () => {
    const id = uuidv4();
    const addedCategory = {
      id, type, name, color,
    };
    handleStateReset();
    try {
      await dbAddCategory(addedCategory);
      dispatch(addCategory(addedCategory));
      snackbarDispatch(ADD);
    } catch (err) {
      snackbarDispatch(ERROR);
    }
  };

  const doneDisabled = (name === '' || type === '' || color === '');

  return (
    <>
      <Button
        variant="outlined"
        onClick={handleDialogOpen}
        className={classes.button}
      >
        <FormattedMessage id="addCategory" />
      </Button>

      <Dialog
        classes={{ paper: classes.dialog }}
        fullWidth
        maxWidth="xs"
        onClose={handleDialogClose}
        open={dialogOpen}
      >
        <DialogTitle className={classes.title}>
          <FormattedMessage id="addCategory" />
        </DialogTitle>

        <FormControl className={classes.itemSize}>
          <InputLabel>
            <FormattedMessage id="categoryType" />
          </InputLabel>
          <Select value={type} onChange={handleTypeChange}>
            <MenuItem value="expense">
              <FormattedMessage id="expense" />
            </MenuItem>
            <MenuItem value="income">
              <FormattedMessage id="income" />
            </MenuItem>
          </Select>
        </FormControl>

        <TextField
          className={classes.itemSize}
          label={<FormattedMessage id="categoryName" />}
          value={name}
          onChange={handleNameChange}
        />

        <div className={classes.colorPicker}>
          <Button
            className={classes.buttonColor}
            style={{ backgroundColor: color }}
            onClick={handlePopoverOpen}
            variant="outlined"
          >
            <FormattedMessage id="selectColor" />
          </Button>
          <Popover
            open={Boolean(anchorEl)}
            onClose={handlePopoverClose}
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'center',
            }}
          >
            <ChromePicker
              disableAlpha
              onChange={handleColorChange}
              color={color}
            />
          </Popover>
        </div>

        <DialogActions className={classes.dialogAction}>
          <Button
            className={classes.actionButton}
            onClick={handleCancel}
            color="secondary"
          >
            <FormattedMessage id="cancel" />
          </Button>
          <Button
            className={classes.actionButton}
            disabled={doneDisabled}
            onClick={handleAddCategory}
            color="primary"
          >
            <FormattedMessage id="done" />
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
