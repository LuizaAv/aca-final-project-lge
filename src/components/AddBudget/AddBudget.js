import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { FormattedMessage } from 'react-intl';

import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import enLocale from 'date-fns/locale/en-US';
import ruLocale from 'date-fns/locale/ru';
import hyLocale from 'date-fns/locale/hy';

import useStyles from './AddBudget.style';
import Snackbars from '../Snackbars/Snackbars';
import { addBudget } from '../../store/actions';
import { useStoreContext } from '../../store/storeContext';
import { useMainContext } from '../../pages/Main/mainContext';
import { useLanguageContext } from '../../languages/languageContext';
import { dbAddBudget } from '../../API/dbActions';
import { currencySign } from '../../globals/constants';
import { useSnackbarContext } from '../Snackbars/snackbarContext';
import { ADD, CANCEL, ERROR } from '../Snackbars/snackbarActions';
import { useLoadingContext } from '../Loading/loadingContext';

const localeMap = {
  EN: enLocale,
  RU: ruLocale,
  HY: hyLocale,
};

export default function AddBudget() {
  const classes = useStyles();
  const { state, dispatch } = useStoreContext();
  const { rate, currency } = useMainContext();
  const { locale } = useLanguageContext();
  const { setLoading } = useLoadingContext();
  const [type, setType] = useState('');
  const [name, setName] = useState('');
  const [categoryName, setCategoryName] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState(new Date());
  const [datePickerError, setDatePickerError] = useState('');
  const [dialogOpen, setDialogOpen] = useState(false);
  const { snackbarDispatch } = useSnackbarContext();

  const handleDialogClose = () => {
    setDialogOpen(false);
  };

  const handleCancel = () => {
    setDialogOpen(false);
    snackbarDispatch(CANCEL);
  };

  const handleClickExpense = () => {
    if (type === 'income') {
      setCategoryName('');
    }
    setType('expense');
    setDialogOpen(true);
  };

  const handleClickIncome = () => {
    if (type === 'expense') {
      setCategoryName('');
    }
    setType('income');
    setDialogOpen(true);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleCategoryNameChange = (e) => {
    setCategoryName(e.target.value);
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
    setCategoryName('');
    setAmount('');
    setDate(new Date());
  };

  const handleAddingBudget = async () => {
    const id = uuidv4();
    const categoryId = state.categories.find((category) => (
      category.name === categoryName
    )).id;
    const addedBudget = {
      id, name, type, amount: +amount, date, categoryId,
    };
    handleStateReset();
    setLoading(true);
    try {
      await dbAddBudget({
        ...addedBudget,
        amount: Math.ceil(addedBudget.amount / rate[currency]),
      });
      dispatch(addBudget(addedBudget));
      snackbarDispatch(ADD);
      setLoading(false);
    } catch (err) {
      snackbarDispatch(ERROR);
      setLoading(false);
    }
  };

  const doneDisabled = (
    categoryName === ''
    || name === ''
    || amount === ''
    || date === null
    || datePickerError !== ''
  );

  return (
    <div>
      <div className={classes.addButtons}>
        <Button
          className={classes.addIncome}
          onClick={handleClickIncome}
          color="primary"
          variant="outlined"
        >
          <FormattedMessage id="addIncome" />
        </Button>
        <Button
          className={classes.addExpense}
          onClick={handleClickExpense}
          color="secondary"
          variant="outlined"
        >
          <FormattedMessage id="addExpense" />
        </Button>
      </div>

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
          {type === 'expense'
            ? <FormattedMessage id="addExpense" />
            : <FormattedMessage id="addIncome" />}
        </DialogTitle>

        <FormControl className={classes.item}>
          <InputLabel>
            <FormattedMessage id="category" />
          </InputLabel>
          <Select value={categoryName} onChange={handleCategoryNameChange}>
            {state.categories
              .filter((category) => category.type === type)
              .map((category) => (
                <MenuItem value={category.name} key={category.id}>
                  {category.name}
                </MenuItem>
              ))}
          </Select>
        </FormControl>

        <TextField
          className={classes.item}
          label={<FormattedMessage id="name" />}
          value={name}
          onChange={handleNameChange}
        />

        <TextField
          className={classes.item}
          label={<FormattedMessage id="amount" />}
          value={amount}
          onChange={handleAmountChange}
          InputProps={{
            endAdornment: <InputAdornment position="end">{currencySign[currency]}</InputAdornment>,
          }}
        />

        <MuiPickersUtilsProvider utils={DateFnsUtils} locale={localeMap[locale]}>
          <KeyboardDatePicker
            className={classes.date}
            format="dd/MM/yyyy"
            margin="normal"
            label={<FormattedMessage id="date" />}
            onError={handleDatePickerError}
            value={date}
            onChange={handleDateChange}
            cancelLabel={<FormattedMessage id="cancel" />}
            okLabel={<FormattedMessage id="ok" />}
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
            <FormattedMessage id="cancel" />
          </Button>
          <Button
            className={classes.actionButton}
            disabled={doneDisabled}
            onClick={handleAddingBudget}
            color="primary"
          >
            <FormattedMessage id="done" />
          </Button>
        </DialogActions>
      </Dialog>

      <Snackbars />
    </div>
  );
}
