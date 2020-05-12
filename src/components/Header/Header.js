import React from 'react';
import { FormattedMessage } from 'react-intl';

import Typography from '@material-ui/core/Typography';
import clsx from 'clsx';

import { useStoreContext } from '../../store/storeContext';
import { useMainContext } from '../../pages/Main/mainContext';
import AddBudget from '../AddBudget/AddBudget';
import { currencySign } from '../../globals/constants';
import { formatingAmount } from '../../globals/helpers';
import useStyles from './Header.style';

export default function Header() {
  const classes = useStyles();
  const { state } = useStoreContext();
  const { currency } = useMainContext();

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

  const amount = [
    {
      name: 'balance',
      currentAmount: formatingAmount(currentBalance),
      upcomingAmount: formatingAmount(upcomingBalance),
      totalAmount: formatingAmount(totalBalance),
    },
    {
      name: 'income',
      currentAmount: currentAmountIncome === 0
        ? currentAmountIncome
        : `+${formatingAmount(currentAmountIncome)}`,
      upcomingAmount: upcomingAmountIncome === 0
        ? upcomingAmountIncome
        : `+${formatingAmount(upcomingAmountIncome)}`,
      totalAmount: totalAmountIncome === 0
        ? totalAmountIncome
        : `+${formatingAmount(totalAmountIncome)}`,
    },
    {
      name: 'expense',
      currentAmount: currentAmountExpense === 0
        ? currentAmountExpense
        : `-${formatingAmount(currentAmountExpense)}`,
      upcomingAmount: upcomingAmountExpense === 0
        ? upcomingAmountExpense
        : `-${formatingAmount(upcomingAmountExpense)}`,
      totalAmount: totalAmountExpense === 0
        ? totalAmountExpense
        : `-${formatingAmount(totalAmountExpense)}`,
    },
  ];

  return (
    <div className={classes.root}>
      <div className={classes.amounts}>
        {amount.map((item) => (
          <div key={item.name} className={classes.item}>
            <Typography className={classes.name}>
              <FormattedMessage id={item.name} />
            </Typography>
            <Typography className={clsx(classes.current, classes[item.name])}>
              {item.currentAmount}
              {` ${currencySign[currency]}`}
            </Typography>
            <div className={classes.span}>
              <Typography className={classes.text}>
                <FormattedMessage id="upcoming" />
              </Typography>
              <Typography className={classes.text}>
                {item.upcomingAmount}
              </Typography>
            </div>
            <div className={classes.span}>
              <Typography className={classes.text}>
                <FormattedMessage id="total" />
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
