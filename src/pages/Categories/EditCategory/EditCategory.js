import React, { useState } from 'react';
import propTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { ChromePicker } from 'react-color';

import Tooltip from '@material-ui/core/Tooltip';
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
import Popover from '@material-ui/core/Popover';

import { useStoreContext } from '../../../store/storeContext';
import { dbEditCategory } from '../../../API/dbActions';
import { editCategory } from '../../../store/actions';
import { useSnackbarContext } from '../../../components/Snackbars/snackbarContext';
import { EDIT, CANCEL, ERROR } from '../../../components/Snackbars/snackbarActions';
import useStyles from './EditCategory.style';

export default function EditCategory({ category }) {
  const classes = useStyles();
  const { state, dispatch } = useStoreContext();
  const [type, setType] = useState(category.type);
  const [name, setName] = useState(category.name);
  const [color, setColor] = useState(category.color);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const { snackbarDispatch } = useSnackbarContext();

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

  const handleCancel = () => {
    setDialogOpen(false);
    snackbarDispatch(CANCEL);
    setType(category.type);
    setName(category.name);
    setColor(category.color);
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

  const handleEditCategory = async () => {
    const { id } = category;
    const editedCategory = {
      id, type, name, color,
    };
    handleClose();
    try {
      await dbEditCategory(editedCategory);
      dispatch(editCategory(editedCategory));
      snackbarDispatch(EDIT);
    } catch (err) {
      snackbarDispatch(ERROR);
    }
  };

  const isPreviousValue = (
    type === category.type && name === category.name && color === category.color
  );
  const isDuplicate = state.categories.some((item) => (
    name === item.name && type === item.type && (type !== category.type || name !== category.name)
  ));
  const isEmpty = (name === '' || type === '' || color === '');
  const doneDisabled = (isEmpty || isDuplicate || isPreviousValue);

  return (
    <>
      <Tooltip
        arrow
        title={<FormattedMessage id="edit" />}
      >
        <IconButton
          className={classes.iconButton}
          onClick={handleOpen}
        >
          <EditIcon
            className={classes.icon}
          />
        </IconButton>
      </Tooltip>

      <Dialog
        classes={{ paper: classes.dialog }}
        fullWidth
        maxWidth="xs"
        onClose={handleClose}
        open={dialogOpen}
      >
        <DialogTitle className={classes.title}>
          <FormattedMessage id="editCategory" />
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
            onClick={handleEditCategory}
            color="primary"
          >
            <FormattedMessage id="done" />
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
};

EditCategory.defaultProps = {
  category: {
    id: propTypes.string.isRequired,
    type: propTypes.string.isRequired,
    name: propTypes.string.isRequired,
    color: propTypes.string.isRequired,
  },
};
