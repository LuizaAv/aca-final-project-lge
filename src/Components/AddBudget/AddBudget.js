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
import { makeStyles } from '@material-ui/core/styles';

import { useStoreContext } from '../../store/storeContext';
import { addBudget } from '../../store/actions';


const useStyles = makeStyles({
  title: {
    margin: 'auto',
  },
  itemSize: {
    width: '80%',
    margin: 'auto',
    marginBottom: 15,
  },
  date: {
    width: '40%',
    margin: 'auto',
  },
});

export default function AddBudget() {
  const classes = useStyles();
  const { state, dispatch } = useStoreContext();
  const [type, setType] = useState('');
  const [name, setName] = useState('');
  const [category, setCategory] = React.useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = React.useState(false);

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

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const handleDateChange = (dat) => {
    setDate(dat);
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

  const handleChangeSelect = (e) => {
    setCategory(e.target.value);
  };

  const doneDisabled = !(category !== '' && name !== '' && amount !== '');

  return (
    <div>
      <Button variant="outlined" value="Expense" onClick={handleClickExpense}>
        Add Expense
      </Button>
      <Button variant="outlined" value="Income" onClick={handleClickIncome}>
        Add Income
      </Button>

      <Dialog fullWidth maxWidth="xs" open={open} onClose={handleOpen}>
        <DialogTitle className={classes.title}>{`Add ${type}`}</DialogTitle>

        <FormControl className={classes.itemSize}>
          <InputLabel>Category</InputLabel>
          <Select value={category} onChange={handleChangeSelect}>
            {state.categories
              .filter(stateCategory => stateCategory.type === type)
              .map(stateCategory => (
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
          type="number"
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
            KeyboardButtonProps={{
              'aria-label': 'change date'
            }}
          />
        </MuiPickersUtilsProvider>

        <DialogActions>
          <Button
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
