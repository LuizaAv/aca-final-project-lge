import React from 'react';
import Typography from '@material-ui/core/Typography';
import clsx from 'clsx';
import {FormattedMessage} from 'react-intl';

import { useStoreContext } from '../../store/storeContext';
import AddBudget from '../AddBudget/AddBudget';
import useStyles from './Header.style';

export default function Header() {
  const classes = useStyles();
  const { state } = useStoreContext();

  const income = state.budget.filter((item) => item.type === 'income');
  const expense = state.budget.filter((item) => item.type === 'expense');

  const currentAmountIncome = income.reduce((acc, item) => (
    item.date.getTime() <= new Date().getTime()
      ? acc + +item.amount
      : acc
  ), 0);

  const upcomingAmountIncome = income.reduce((acc, item) => (
    item.date.getTime() > new Date().getTime()
      ? acc + +item.amount
      : acc
  ), 0);

  const totalAmountIncome = currentAmountIncome + upcomingAmountIncome;

  const currentAmountExpense = expense.reduce((acc, item) => (
    item.date.getTime() <= new Date().getTime()
      ? acc + +item.amount
      : acc
  ), 0);

  const upcomingAmountExpense = expense.reduce((acc, item) => (
    item.date.getTime() > new Date().getTime()
      ? acc + +item.amount
      : acc
  ), 0);

  const totalAmountExpense = currentAmountExpense + upcomingAmountExpense;

  const currentBalance = currentAmountIncome - currentAmountExpense;
  const upcomingBalance = upcomingAmountIncome - upcomingAmountExpense;
  const totalBalance = currentBalance + upcomingBalance;

  const addComma = (amount) => amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  const amount = [
    {
      name: 'balance',
      currentAmount: addComma(currentBalance),
      upcomingAmount: addComma(upcomingBalance),
      totalAmount: addComma(totalBalance),
    },
    {
      name: 'income',
      currentAmount: currentAmountIncome === 0
        ? currentAmountIncome
        : `+${addComma(currentAmountIncome)}`,
      upcomingAmount: upcomingAmountIncome === 0
        ? upcomingAmountIncome
        : `+${addComma(upcomingAmountIncome)}`,
      totalAmount: totalAmountIncome === 0
        ? totalAmountIncome
        : `+${addComma(totalAmountIncome)}`,
    },
    {
      name: 'expense',
      currentAmount: currentAmountExpense === 0
        ? currentAmountExpense
        : `-${addComma(currentAmountExpense)}`,
      upcomingAmount: upcomingAmountExpense === 0
        ? upcomingAmountExpense
        : `-${addComma(upcomingAmountExpense)}`,
      totalAmount: totalAmountExpense === 0
        ? totalAmountExpense
        : `-${addComma(totalAmountExpense)}`,
    },
  ];

  return (
    <div className={classes.root}>
      <div className={classes.amounts}>
        {amount.map((item) => (
          <div key={item.name} className={classes.item}>
            <Typography className={classes.name}>
              {item.name}
            </Typography>
            <Typography className={clsx(classes.current, classes[item.name])}>
              {item.currentAmount}
            </Typography>
            <div className={classes.span}>
              <Typography className={classes.text}>
                <FormattedMessage id='Future'/>
              </Typography>
              <Typography className={classes.text}>
                {item.upcomingAmount}
              </Typography>
            </div>
            <div className={classes.span}>
              <Typography className={classes.text}>
              <FormattedMessage id='Total'/>
              </Typography>
              <Typography className={classes.text}>
                {item.totalAmount}
              </Typography>
            </div>
            <Typography className={classes.name}>
            <FormattedMessage id={item.name} />
            </Typography>
          </div>
        ))}
      </div>

      <AddBudget />
    </div>
  );
}
