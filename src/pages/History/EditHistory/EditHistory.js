import React, { useState, useEffect } from 'react';
import propTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

import Tooltip from '@material-ui/core/Tooltip';
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
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';

import { useStoreContext } from '../../../store/storeContext';
import { useMainContext } from '../../Main/mainContext';
import { useLanguageContext } from '../../../languages/languageContext';
import { useLoadingContext } from '../../../components/Loading/loadingContext';
import { dbEditBudget } from '../../../API/dbActions';
import { editBudget } from '../../../store/actions';
import { currencySign } from '../../../globals/constants';
import { useSnackbarContext } from '../../../components/Snackbars/snackbarContext';
import { EDIT, CANCEL, ERROR } from '../../../components/Snackbars/snackbarActions';
import useStyles from './EditHistory.style';

const localeMap = {
  EN: enLocale,
  RU: ruLocale,
  HY: hyLocale,
};

export default function EditHistory({ budget }) {
  const classes = useStyles();
  const { state, dispatch } = useStoreContext();
  const { rate, currency } = useMainContext();
  const { locale } = useLanguageContext();
  const { setLoading } = useLoadingContext();
  const initialCategory = state.categories.find((category) => category.id === budget.categoryId);
  const [categoryName, setCategoryName] = useState(initialCategory.name);
  const [type, setType] = useState(budget.type);
  const [name, setName] = useState(budget.name);
  const [amount, setAmount] = useState(budget.amount);
  const [date, setDate] = useState(budget.date);
  const [datePicherError, setDatePicherError] = useState('');
  const [open, setOpen] = useState(false);
  const { snackbarDispatch } = useSnackbarContext();

  useEffect(() => {
    setAmount(budget.amount);
  }, [budget]);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCancel = () => {
    setOpen(false);
    snackbarDispatch(CANCEL);
    setCategoryName(initialCategory.name);
    setType(budget.type);
    setName(budget.name);
    setAmount(budget.amount);
    setDate(budget.date);
    setDatePicherError('');
  };

  const handleTypeChange = (e) => {
    setType(e.target.value);
    setCategoryName('');
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setCategoryName(e.target.value);
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
    setDatePicherError(e);
  };

  const handleEditBudget = async () => {
    const { id } = budget;
    const categoryId = state.categories.find((category) => category.name === categoryName).id;
    const editedBudget = {
      id, type, name, categoryId, amount: +amount, date,
    };
    handleClose();
    setLoading(true);
    try {
      await dbEditBudget({
        ...editedBudget, amount: Math.ceil(editedBudget.amount / rate[currency]),
      });
      dispatch(editBudget(editedBudget));
      snackbarDispatch(EDIT);
      setLoading(false);
    } catch (err) {
      snackbarDispatch(ERROR);
      setLoading(false);
    }
  };

  const isPreviousValue = (
    type === budget.type
    && categoryName === initialCategory.name
    && name === budget.name
    && +amount === +budget.amount
    && date.getTime() === budget.date.getTime()
  );

  const isEmpty = (
    type === ''
    || categoryName === ''
    || name === ''
    || amount === ''
    || date === null
    || datePicherError !== ''
  );

  const doneDisabled = (isEmpty || isPreviousValue);

  return (
    <>
      <Tooltip
        arrow
        title={<FormattedMessage id="edit" />}
      >
        <IconButton
          className={classes.iconButton}
          onClick={handleOpen}
        >
          <EditIcon className={classes.icon} />
        </IconButton>
      </Tooltip>
      <Dialog
        classes={{ paper: classes.dialog }}
        fullWidth
        maxWidth="xs"
        onClose={handleClose}
        open={open}
      >
        <DialogTitle className={classes.title}>
          <FormattedMessage id="editItem" />
        </DialogTitle>

        <FormControl className={classes.itemSize}>
          <InputLabel>
            <FormattedMessage id="type" />
          </InputLabel>
          <Select value={type} onChange={handleTypeChange}>
            <MenuItem value="expense">
              <FormattedMessage id="expense" />
            </MenuItem>
            <MenuItem value="income">
              <FormattedMessage id="income" />
            </MenuItem>
          </Select>
        </FormControl>

        <FormControl className={classes.itemSize}>
          <InputLabel>
            <FormattedMessage id="category" />
          </InputLabel>
          <Select value={categoryName} onChange={handleCategoryChange}>
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
          className={classes.itemSize}
          label={<FormattedMessage id="name" />}
          value={name}
          onChange={handleNameChange}
        />

        <TextField
          className={classes.itemSize}
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
            value={date}
            onChange={handleDateChange}
            onError={handlePicherError}
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
            color="secondary"
            onClick={handleCancel}
          >
            <FormattedMessage id="cancel" />
          </Button>
          <Button
            className={classes.actionButton}
            disabled={doneDisabled}
            color="primary"
            onClick={handleEditBudget}
          >
            <FormattedMessage id="done" />
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
    categoryId: propTypes.string.isRequired,
    amount: propTypes.number.isRequired,
    date: propTypes.instanceOf(Date),
  }),
};

EditHistory.defaultProps = {
  budget: {
    id: propTypes.string.isRequired,
    type: propTypes.string.isRequired,
    name: propTypes.string.isRequired,
    categoryId: propTypes.string.isRequired,
    amount: propTypes.number.isRequired,
    date: propTypes.instanceOf(Date),
  },
};
