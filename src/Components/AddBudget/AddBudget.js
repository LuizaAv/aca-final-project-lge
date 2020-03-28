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


import { useStoreContext } from '../../store/storeContext';
import { addBudget } from '../../store/actions';
import useStyles from './AddBudget.style';

export default function AddBudget() {
  const classes = useStyles();
  const { state, dispatch } = useStoreContext();
  const [type, setType] = useState('');
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState(new Date());
  const [picherError, setPicherError] = useState('');
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleClickExpense = () => {
    setType('expense');
    handleOpen();
  };

  const handleClickIncome = () => {
    setType('income');
    handleOpen();
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

  const handlePicherError = (e) => {
    setPicherError(e);
  };

  const handleStateReset = () => {
    setOpen(!open);
    setType('');
    setName('');
    setCategory('');
    setAmount('');
    setDate(new Date());
  };

  const handleAddingBudget = () => {
    const id = uuidv4();
    const addedBudget = {
      id, type, name, category, amount: +amount, date: date.toLocaleDateString(),
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
    <div className={classes.flexContainer}>
      <div className={classes.buttons}>
        <Button
          variant="outlined"
          value="Expense"
          onClick={handleClickExpense}
          className={classes.button}
        >
          Add Expense
        </Button>
      </div>
      <div className={classes.buttons}>
        <Button
          variant="outlined"
          value="Income"
          onClick={handleClickIncome}
          className={classes.button}
        >
          Add Income
        </Button>
      </div>
      <div className={classes.addbudget}>
      <Dialog fullWidth maxWidth="xs" open={open} onClose={handleOpen}>
        <DialogTitle className={classes.title}>{`Add ${type}`}</DialogTitle>

        
        <FormControl className={classes.itemSize}>
          <InputLabel >Category</InputLabel>
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

        <DialogActions>
          <Button
            disabled={doneDisabled}
            variant="outlined"
            onClick={handleAddingBudget}
            className={classes.buttons}
          >
            Done
          </Button>
        </DialogActions>
      </Dialog>
      </div>
    </div>
  );
}
