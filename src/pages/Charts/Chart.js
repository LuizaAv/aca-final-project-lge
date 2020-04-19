import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import Paper from '@material-ui/core/Paper';

import { useStoreContext } from '../../store/storeContext';
import Show from '../../components/Show/Show';
import useStyles from './Charts.style';

export default function MainChart() {
  const classes = useStyles();
  const { state } = useStoreContext();
  const [isCurrent, setIsCurrent] = useState(true);

  const currentBudget = state.budget.filter((item) => item.date.getTime() <= new Date().getTime());
  const futureBudget = state.budget.filter((item) => item.date.getTime() > new Date().getTime());

  const showItems = isCurrent ? currentBudget : futureBudget;

  const sortedBudgetByDate = showItems.sort((a, b) => a.date.getTime() - b.date.getTime());
  const labels = sortedBudgetByDate.map((el) => el.date.toLocaleDateString());
  const expenses = sortedBudgetByDate.map((el) => (el.type === 'expense' ? el.amount : 0));
  const incomes = sortedBudgetByDate.map((el) => (el.type === 'income' ? el.amount : 0));

  if (!isCurrent) {
    labels.unshift(new Date().toLocaleDateString());
    expenses.unshift(0);
    incomes.unshift(0);
  }

  const data = {
    labels,
    datasets: [
      {
        label: 'income',
        data: incomes,
        fill: true, // Don't fill area under the line
        backgroundColor: '#76ff0335', // fill color
        borderColor: '#76ff03', // Line color
      },
      {
        label: 'expense',
        data: expenses,
        fill: true, // Don't fill area under the line
        backgroundColor: '#ff525235', // fill color
        borderColor: '#FF5D5D', // Line color
      },
    ],
  };

  return (
    <div className={classes.container}>
      <header className={classes.header}>
        <h1>Total expenses and income</h1>
      </header>

      <div className={classes.tools}>
        <Show isCurrent={isCurrent} setIsCurrent={setIsCurrent} />
      </div>

      <Paper className={classes.paper} elevation={5}>
        <Line data={data} />
      </Paper>
    </div>
  );
}
