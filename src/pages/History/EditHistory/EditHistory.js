import React, { useState, useEffect } from 'react';
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
import {FormattedMessage} from 'react-intl';

import { useStoreContext } from '../../../store/storeContext';
import { editBudget } from '../../../store/actions';
import { dbEditBudget } from '../../../API/dbActions';
import useStyles from './EditHistory.style';

export default function EditHistory({
  budget, setSnackbarType, setSnackbarOpen,
}) {
  const classes = useStyles();
  const {
    state, dispatch, rate, currency,
  } = useStoreContext();
  const [type, setType] = useState(budget.type);
  const [name, setName] = useState(budget.name);
  const [category, setCategory] = useState(budget.category);
  const [amount, setAmount] = useState(budget.amount);
  const [date, setDate] = useState(budget.date);
  const [picherError, setPicherError] = useState('');
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setAmount(budget.amount);
  }, [budget]);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSnackbarEdit = () => {
    setSnackbarType('edit');
    setSnackbarOpen(true);
  };

  const handleSnackbarErroe = () => {
    setSnackbarType('error');
    setSnackbarOpen(true);
  };

  const handleCancel = () => {
    setOpen(false);
    setSnackbarType('cancel');
    setSnackbarOpen(true);
  };

  const handleTypeChange = (e) => {
    setCategory('');
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
    const { id, color } = budget;
    const editedBudget = {
      id, type, name, category, amount: +amount, date, color,
    };
    handleClose();
    dbEditBudget({
      ...editedBudget, amount: Math.ceil(editedBudget.amount / rate[currency]),
    })
      .then(() => dispatch(editBudget(editedBudget)))
      .then(() => handleSnackbarEdit())
      .catch(() => handleSnackbarErroe());
  };

  const doneDisabled = (
    type === ''
    || category === ''
    || name === ''
    || amount === ''
    || date === null
    || picherError !== ''
    || (
      type === budget.type
      && category === budget.category
      && name === budget.name
      && +amount === +budget.amount
      && date.getTime() === budget.date.getTime()
    )
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
        onClose={handleClose}
        open={open}
      >
        <DialogTitle className={classes.title}>
         <FormattedMessage id='EditBudget'/>
          </DialogTitle>

        <FormControl className={classes.itemSize}>
          <InputLabel>
          <FormattedMessage id='Type'/>
          </InputLabel>
          <Select value={type} onChange={handleTypeChange}>
            <MenuItem value="expense">
            <FormattedMessage id='Expense'/>
            </MenuItem>
            <MenuItem value="income">
            <FormattedMessage id='Income'/>
            </MenuItem>
          </Select>
        </FormControl>

        <FormControl className={classes.itemSize}>
          <InputLabel>
          <FormattedMessage id='Category'/>
          </InputLabel>
          <Select value={category} onChange={handleCategoryChange}>
            {state.categories
              .filter((stateCategory) => stateCategory.type === type)
              .map((stateCategory) => (
                <MenuItem value={stateCategory.name} key={stateCategory.id}>
                 <FormattedMessage id={stateCategory.name}/>
                </MenuItem>
              ))}
          </Select>
          
        </FormControl>

      
      <TextField 
      className={classes.itemSize}
      label={<FormattedMessage id='Name' />}
      value={name}
      onChange={handleNameChange}
      />

      
   

        <TextField
          className={classes.itemSize}
          label={<FormattedMessage id='Amount' />}
          value={amount}
          onChange={handleAmountChange}
        />

        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <KeyboardDatePicker
            className={classes.date}
            format="dd/MM/yyyy"
            margin="normal"
            label={<FormattedMessage id='Date' />}
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
            onClick={handleCancel}
          >
            <FormattedMessage id='Cancel' />
          </Button>
          <Button
            className={classes.actionButton}
            disabled={doneDisabled}
            color="primary"
            onClick={handleEditBudget}
          >
             <FormattedMessage id='Done' />
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
    color: propTypes.string.isRequired,
    amount: propTypes.number.isRequired,
    date: propTypes.instanceOf(Date),
  }),
  setSnackbarType: propTypes.func.isRequired,
  setSnackbarOpen: propTypes.func.isRequired,
};

EditHistory.defaultProps = {
  budget: {
    id: propTypes.string.isRequired,
    type: propTypes.string.isRequired,
    name: propTypes.string.isRequired,
    category: propTypes.string.isRequired,
    color: propTypes.string.isRequired,
    amount: propTypes.number.isRequired,
    date: propTypes.instanceOf(Date),
  },
};
