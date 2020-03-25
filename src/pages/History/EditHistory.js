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
import EditIcon from '@material-ui/icons/Edit';
import { makeStyles } from '@material-ui/core/styles';

import { useStoreContext } from '../../store/storeContext';
import { editBudget } from '../../store/actions';

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
  icon: {
    color: '#fff',
    borderRadius: '100%',
    padding: 10,
    '&:hover': {
      backgroundColor: '#ffffff10',
    },
  },
});

export default function EditHistory({ budget }) {
  const classes = useStyles();
  const { state, dispatch } = useStoreContext();
  const [type, setType] = useState(budget.type);
  const [name, setName] = useState(budget.name);
  const [category, setCategory] = useState(budget.category);
  const [amount, setAmount] = useState(budget.amount);
  const [date, setDate] = useState(new Date(budget.date.split('.').reverse()));
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
    setAmount(e.target.value);
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
      id, type, name, category, amount: +amount, date: date.toLocaleDateString(),
    };
    handleOpen();
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

      <EditIcon fontSize="large" className={classes.icon} onClick={handleOpen} />

      <Dialog fullWidth maxWidth="xs" onClose={handleOpen} open={open}>
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
            onError={handlePicherError}
            KeyboardButtonProps={{
              'aria-label': 'change date',
            }}
          />
        </MuiPickersUtilsProvider>

        <DialogActions>
          <Button
            disabled={doneDisabled}
            variant="outlined"
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
    date: propTypes.string.isRequired,
  }),
};

EditHistory.defaultProps = {
  budget: {
    id: propTypes.string.isRequired,
    type: propTypes.string.isRequired,
    name: propTypes.string.isRequired,
    category: propTypes.string.isRequired,
    amount: propTypes.number.isRequired,
    date: propTypes.string.isRequired,
  },
};
