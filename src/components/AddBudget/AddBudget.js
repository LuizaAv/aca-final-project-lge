import React, { useState } from 'react';
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
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';

import useStyles from './AddBudget.style';
import { addBudget } from '../../store/actions';
import { useStoreContext } from '../../store/storeContext';
import { dbAddBudget } from '../../API/dbActions';
import Snackbars from '../Snackbars/Snackbars';

export default function AddBudget() {
  const classes = useStyles();
  const { state, dispatch } = useStoreContext();
  const [type, setType] = useState('');
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState(new Date());
  const [datePickerError, setDatePickerError] = useState('');
  const [dialogOpen, setDialogOpen] = useState(false);
  const [snackbarType, setSnackbarType] = useState('');
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const handleDialogClose = () => {
    setDialogOpen(false);
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

  const handleClickExpense = () => {
    setType('expense');
    setDialogOpen(true);
  };

  const handleClickIncome = () => {
    setType('income');
    setDialogOpen(true);
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

  const handleDateChange = (newDate) => {
    setDate(newDate);
  };

  const handleDatePickerError = (e) => {
    setDatePickerError(e);
  };

  const handleStateReset = () => {
    setDialogOpen(false);
    setType('');
    setName('');
    setCategory('');
    setAmount('');
    setDate(new Date());
  };

  const handleAddingBudget = () => {
    const id = uuidv4();
    const addedBudget = {
      id, type, name, category, amount: +amount, date,
    };
    handleStateReset();
    dbAddBudget(addedBudget)
      .then(() => dispatch(addBudget(addedBudget)))
      .then(() => handleSnackbarAdd())
      .catch(() => handleSnackbarErroe());
  };

  const doneDisabled = (
    category === ''
    || name === ''
    || amount === ''
    || date === null
    || datePickerError !== ''
  );

  return (
    <div>
      <Button
        className={classes.addIncome}
        onClick={handleClickIncome}
        color="primary"
        variant="outlined"
      >
        Add income
      </Button>
      <Button
        className={classes.addExpense}
        onClick={handleClickExpense}
        color="secondary"
        variant="outlined"
      >
        Add expense
      </Button>

      <Dialog
        fullWidth
        maxWidth="xs"
        open={dialogOpen}
        onClose={handleDialogClose}
      >
        <DialogTitle
          className={
            type === 'expense'
              ? classes.titleExpence
              : classes.titleIncome
          }
        >
          {`Add ${type}`}
        </DialogTitle>

        <FormControl className={classes.item}>
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
          className={classes.item}
          label="Name"
          value={name}
          onChange={handleNameChange}
        />

        <TextField
          className={classes.item}
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
            onError={handleDatePickerError}
            value={date}
            onChange={handleDateChange}
            KeyboardButtonProps={{
              'aria-label': 'change date',
            }}
          />
        </MuiPickersUtilsProvider>

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
            onClick={handleAddingBudget}
            color="primary"
          >
            Done
          </Button>
        </DialogActions>
      </Dialog>

      <Snackbars type={snackbarType} open={snackbarOpen} setOpen={setSnackbarOpen} />
    </div>
  );
}
