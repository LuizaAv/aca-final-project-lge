import React from 'react';
import Typography from '@material-ui/core/Typography';
import clsx from 'clsx';

import { useStoreContext } from '../../store/storeContext';
import AddBudget from '../AddBudget/AddBudget';
import useStyles from './Header.style';

export default function Header() {
  const classes = useStyles();
  const { state } = useStoreContext();

  const income = state.budget.reduce((acc, budget) => (
    budget.type === 'income'
      ? acc + +budget.amount
      : acc
  ), 0);

  const expense = state.budget.reduce((acc, budget) => (
    budget.type === 'expense'
      ? acc + +budget.amount
      : acc
  ), 0);

  const balance = income - expense;
  const addComma = (count) => count.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  const count = [
    {
      name: 'Current balance',
      amount: addComma(balance),
      className: 'balance',
    },
    {
      name: 'Overall income',
      amount: income !== 0
        ? `+${addComma(income)}`
        : 0,
      className: 'income',
    },
    {
      name: 'Overall expense',
      amount: expense !== 0
        ? `-${addComma(expense)}`
        : 0,
      className: 'expense',
    },
  ];

  return (
    <div className={classes.root}>
      <div className={classes.total}>
        {count.map((item) => (
          <div key={item.name} className={classes.count}>
            <Typography className={clsx(classes.amount, classes[item.className])}>
              {item.amount}
            </Typography>
            <Typography className={classes.name}>
              {item.name}
            </Typography>
          </div>
        ))}
      </div>

      <AddBudget />
    </div>
  );
}
