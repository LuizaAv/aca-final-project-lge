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
import clsx from 'clsx';

import useStyles from './AddBudget.style';
import { addBudget } from '../../store/actions';
import { useStoreContext } from '../../store/storeContext';


export default function AddBudget() {
  const classes = useStyles();
  const { state, dispatch } = useStoreContext();
  const [type, setType] = useState('');
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState(new Date());
  const [picherError, setPicherError] = useState('');
  const [dialogOpen, setDialogOpen] = useState(false);

  console.log(state.budget)

  const handleDialogOpen = () => { setDialogOpen(!dialogOpen); };

  const handleClickExpense = () => { setType('expense'); setDialogOpen(!dialogOpen); };

  const handleClickIncome = () => { setType('income'); setDialogOpen(!dialogOpen); };

  const handleNameChange = (e) => { setName(e.target.value); };

  const handleCategoryChange = (e) => { setCategory(e.target.value); };

  const handleAmountChange = (e) => {
    const { value } = e.target;
    const firstChar = /^[1-9]/.test(value);
    const allChar = firstChar ? /^[0-9]+$/.test(value) : false;
    const text = allChar ? value : value.slice(0, -1);
    setAmount(text);
  };

  const handleDateChange = (newDate) => { setDate(newDate); };

  const handlePicherError = (e) => { setPicherError(e); };

  const handleStateReset = () => {
    setDialogOpen(!dialogOpen);
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
    dispatch(addBudget(addedBudget));
  };

  const doneDisabled = !(
    category !== ''
    && name !== ''
    && amount !== ''
    && date !== null
    && picherError === ''
  );

  return (
    <div className={classes.root}>
      <Button
        className={clsx(classes.addButton, classes.income)}
        onClick={handleClickIncome}
      >
        Add income
      </Button>
      <Button
        className={clsx(classes.addButton, classes.expense)}
        onClick={handleClickExpense}
      >
        Add expense
      </Button>

      <Dialog
        classes={{ paper: classes.dialog }}
        fullWidth
        maxWidth="xs"
        open={dialogOpen}
        onClose={handleDialogOpen}
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
          label="Name"
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
            onError={handlePicherError}
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
            variant="outlined"
            onClick={handleDialogOpen}
          >
            Cancel
          </Button>
          <Button
            className={classes.actionButton}
            disabled={doneDisabled}
            variant="outlined"
            onClick={handleAddingBudget}
          >
            Done
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
