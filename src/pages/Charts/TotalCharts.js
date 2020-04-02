import React from 'react';
import { Line } from 'react-chartjs-2';
import { useStoreContext } from '../../store/storeContext';
import useStyles from './Charts.style';

export default function TotalChart() {
  const classes = useStyles();
  const { state } = useStoreContext();
  const date = state.budget.sort((a, b) => a.date.split('.').join('') - b.date.split('.').join(''));
  const expenses = date.map((el) => (el.type === 'expense' ? el.amount : 0));
  const incomes = date.map((el) => (el.type === 'income' ? el.amount : 0));

  const data = {
    labels: date.map((el) => el.date),
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
      <article className={classes.content}>
        <Line data={data} />
      </article>
    </div>
  );
}
