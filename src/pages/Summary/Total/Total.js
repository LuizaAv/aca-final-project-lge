import React from 'react';

import Typography from '@material-ui/core/Typography';
import clsx from 'clsx';

import { useStoreContext } from '../../../store/storeContext';

import useStyles from './Total.style';

export default function Total() {
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

  const addComma = (count) => count.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ', ');

  const count = [
    { name: 'Current balance', amount: addComma(balance), className: 'balance' },
    { name: 'Overall income', amount: `+${addComma(income)}`, className: 'income' },
    { name: 'Overall expense', amount: `-${addComma(expense)}`, className: 'expense' },
  ];

  return (
    <div className={classes.root}>
      {count.map((item) => (
        <Typography key={item.name} className={clsx(classes.count, classes[item.className])}>
          {item.amount}
          <Typography className={classes.name}>
            {item.name}
          </Typography>
        </Typography>
      ))}
    </div>
  );
}
