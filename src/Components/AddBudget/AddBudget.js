import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
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
});

export default function AddBudget() {
  const classes = useStyles();
  const { state, dispatch } = useStoreContext();
  const [type, setType] = useState('');
  const [name, setName] = useState('');
  const [category, setCategory] = React.useState('');
  const [amount, setAmount] = useState(0);
  const [date, setDate] = useState('');
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

  const handleStateReset = () => {
    setType('');
    setName('');
    setCategory('');
    setAmount('');
    setDate('');
    setOpen(!open);
  };

  const handleAddingBudget = () => {
    const id = state.budget.reduce(
      (acc, budget) => (budget.id > acc ? budget.id : acc),
      0,
    ) + 1;
    const newDate = new Date();
    setDate(`${newDate.getDay()}.${newDate.getMonth()}.${newDate.getYear()}`);
    const addedBudget = {
      id, type, name, category, amount, date,
    };
    handleStateReset();
    dispatch(addBudget(addedBudget));
  };

  const handleChangeSelect = (e) => {
    setCategory(e.target.value);
  };

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
          <InputLabel>{category}</InputLabel>
          <Select value={category} onChange={handleChangeSelect}>
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

        <DialogActions>
          <Button variant="outlined" onClick={handleAddingBudget}>
            Done
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
