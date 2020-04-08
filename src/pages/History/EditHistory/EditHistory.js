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
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';

import { useStoreContext } from '../../../store/storeContext';
import { editBudget } from '../../../store/actions';

import useStyles from './EditHistory.style';

export default function EditHistory({ budget, SnackBarOpen }) {
  const classes = useStyles();
  const { state, dispatch } = useStoreContext();
  const [type, setType] = useState(budget.type);
  const [name, setName] = useState(budget.name);
  const [category, setCategory] = useState(budget.category);
  const [amount, setAmount] = useState(budget.amount);
  const [date, setDate] = useState(budget.date);
  const [picherError, setPicherError] = useState('');
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleTypeChange = (e) => {
    setType(e.target.value);
    setCategory('');
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handleAmountChange = (e) => {
    const { value } = e.target;
    const firstChar = /^[1-9]/.test(value);
    const allChar = firstChar ? /^[0-9]+$/.test(value) : false;
    const text = allChar ? value : value.slice(0, -1);
    setAmount(text);
  };

  const handleDateChange = (newData) => {
    setDate(newData);
  };

  const handlePicherError = (e) => {
    setPicherError(e);
  };

  const handleEditBudget = () => {
    const { id } = budget;
    const editedBudget = {
      id, type, name, category, amount: +amount, date,
    };
    handleOpen();
    SnackBarOpen(true)
    dispatch(editBudget(editedBudget));
  };

  const doneDisabled = !(
    type !== ''
    && category !== ''
    && name !== ''
    && amount !== ''
    && date !== null
    && picherError === ''
  );

  return (
    <>
      <IconButton
        className={classes.iconButton}
        onClick={handleOpen}
      >
        <EditIcon className={classes.icon} />
      </IconButton>
      <Dialog
        classes={{ paper: classes.dialog }}
        fullWidth
        maxWidth="xs"
        onClose={handleOpen}
        open={open}
      >
        <DialogTitle className={classes.title}>Edit Budget</DialogTitle>

        <FormControl className={classes.itemSize}>
          <InputLabel>Type</InputLabel>
          <Select value={type} onChange={handleTypeChange}>
            <MenuItem value="expense">Expense</MenuItem>
            <MenuItem value="income">Income</MenuItem>
          </Select>
        </FormControl>

        <FormControl className={classes.itemSize}>
          <InputLabel>Category</InputLabel>
          <Select value={category} onChange={handleCategoryChange}>
            {state.categories
              .filter((stateCategory) => stateCategory.type === type)
              .map((stateCategory) => (
                <MenuItem value={stateCategory.name} key={stateCategory.id}>
                  {stateCategory.name}
                </MenuItem>
              ))}
          </Select>
        </FormControl>

        <TextField
          className={classes.itemSize}
          label="name"
          value={name}
          onChange={handleNameChange}
        />

        <TextField
          className={classes.itemSize}
          label="Amount"
          value={amount}
          onChange={handleAmountChange}
        />

        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <KeyboardDatePicker
            className={classes.date}
            format="dd/MM/yyyy"
            margin="normal"
            label="Date"
            value={date}
            onChange={handleDateChange}
            onError={handlePicherError}
            KeyboardButtonProps={{
              'aria-label': 'change date',
            }}
          />
        </MuiPickersUtilsProvider>

        <DialogActions className={classes.dialogAction}>
          <Button
            className={classes.actionButton}
            color="secondary"
            onClick={handleOpen}
          >
            Cancel
          </Button>
          <Button
            className={classes.actionButton}
            disabled={doneDisabled}
            color="primary"
            onClick={handleEditBudget}
          >
            Done
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

EditHistory.propTypes = {
  budget: propTypes.shape({
    id: propTypes.string.isRequired,
    type: propTypes.string.isRequired,
    name: propTypes.string.isRequired,
    category: propTypes.string.isRequired,
    amount: propTypes.number.isRequired,
    date: propTypes.instanceOf(Date),
  }),
};

EditHistory.defaultProps = {
  budget: {
    id: propTypes.string.isRequired,
    type: propTypes.string.isRequired,
    name: propTypes.string.isRequired,
    category: propTypes.string.isRequired,
    amount: propTypes.number.isRequired,
    date: propTypes.instanceOf(Date),
  },
};
