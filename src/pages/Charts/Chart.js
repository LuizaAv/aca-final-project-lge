import React from 'react';
import { Line } from 'react-chartjs-2';
import Paper from '@material-ui/core/Paper';

import { useStoreContext } from '../../store/storeContext';
import useStyles from './Charts.style';

export default function MainChart() {
  const classes = useStyles();
  const { state } = useStoreContext();
  const budget = [...state.budget];
  const sortedBudgetByDate = budget.sort((a, b) => a.date.getTime() - b.date.getTime());
  const expenses = sortedBudgetByDate.map((el) => (el.type === 'expense' ? el.amount : 0));
  const incomes = sortedBudgetByDate.map((el) => (el.type === 'income' ? el.amount : 0));

  const data = {
    labels: sortedBudgetByDate.map((el) => el.date.toLocaleDateString()),
    datasets: [
      {
        label: 'income',
        data: incomes,
        fill: true, // Don't fill area under the line
        backgroundColor: '#DAF7A6', // fill color
        borderColor: '#2EE152', // Line color
      },
      {
        label: 'expense',
        data: expenses,
        fill: true, // Don't fill area under the line
        backgroundColor: '#FF9B9B', // fill color
        borderColor: '#FF5D5D', // Line color
      },
    ],
  };

  return (
    <div className={classes.container}>
      <header className={classes.header}>
        <h1>Total expenses and income</h1>
      </header>
      <Paper className={classes.paper} elevation={5}>
        <Line data={data} />
      </Paper>
    </div>
  );
}
