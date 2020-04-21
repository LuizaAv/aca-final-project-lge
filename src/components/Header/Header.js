import React from 'react';
import Typography from '@material-ui/core/Typography';
import clsx from 'clsx';

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

  const futureAmountIncome = income.reduce((acc, item) => (
    item.date.getTime() > new Date().getTime()
      ? acc + +item.amount
      : acc
  ), 0);

  const totalAmountIncome = currentAmountIncome + futureAmountIncome;

  const currentAmountExpense = expense.reduce((acc, item) => (
    item.date.getTime() <= new Date().getTime()
      ? acc + +item.amount
      : acc
  ), 0);

  const futureAmountExpense = expense.reduce((acc, item) => (
    item.date.getTime() > new Date().getTime()
      ? acc + +item.amount
      : acc
  ), 0);

  const totalAmountExpense = currentAmountExpense + futureAmountExpense;

  const currentBalance = currentAmountIncome - currentAmountExpense;
  const futureBalance = futureAmountIncome - futureAmountExpense;
  const totalBalance = currentBalance + futureBalance;

  const addComma = (amount) => amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  const amount = [
    {
      name: 'balance',
      currentAmount: addComma(currentBalance),
      futureAmount: addComma(futureBalance),
      totalAmount: addComma(totalBalance),
    },
    {
      name: 'income',
      currentAmount: currentAmountIncome === 0
        ? currentAmountIncome
        : `+${addComma(currentAmountIncome)}`,
      futureAmount: futureAmountIncome === 0
        ? futureAmountIncome
        : `+${addComma(futureAmountIncome)}`,
      totalAmount: totalAmountIncome === 0
        ? totalAmountIncome
        : `+${addComma(totalAmountIncome)}`,
    },
    {
      name: 'expense',
      currentAmount: currentAmountExpense === 0
        ? currentAmountExpense
        : `-${addComma(currentAmountExpense)}`,
      futureAmount: futureAmountExpense === 0
        ? futureAmountExpense
        : `-${addComma(futureAmountExpense)}`,
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
                Future:
              </Typography>
              <Typography className={classes.text}>
                {item.futureAmount}
              </Typography>
            </div>
            <div className={classes.span}>
              <Typography className={classes.text}>
                Total:
              </Typography>
              <Typography className={classes.text}>
                {item.totalAmount}
              </Typography>
            </div>
          </div>
        ))}
      </div>

      <AddBudget />
    </div>
  );
}
