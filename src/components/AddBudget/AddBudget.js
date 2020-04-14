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
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

import useStyles from './AddBudget.style';
import { addBudget } from '../../store/actions';
import { useStoreContext } from '../../store/storeContext';
import { dbAddBudget } from '../../API/dbActions';


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
  const [openCancel, setOpenCancel] = useState(false);
  const [openAdd, setOpenAdd] = useState(false);

  const handleDialogOpen = () => { setDialogOpen(!dialogOpen); };

  const handleCancel = () => { setDialogOpen(false); setOpenCancel(true); };

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
    setOpenAdd(true);
    handleStateReset();
    dbAddBudget(addedBudget);
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

      <Snackbar open={openAdd} autoHideDuration={3000} onClose={() => { setOpenAdd(false); }}>
        <MuiAlert variant="filled" severity="success" onClose={() => { setOpenAdd(false); }}>
          Successfully added
        </MuiAlert>
      </Snackbar>
      <Snackbar open={openCancel} autoHideDuration={3000} onClose={() => { setOpenCancel(false); }}>
        <MuiAlert variant="filled" severity="warning" onClose={() => { setOpenCancel(false); }}>
          Аction was canceled
        </MuiAlert>
      </Snackbar>
    </div>
  );
}
