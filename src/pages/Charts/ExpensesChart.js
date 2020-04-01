import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { useStoreContext } from '../../store/storeContext';
import useStyles from './Charts.style';

export default function ExpenseChart() {
  const classes = useStyles();
  const { state } = useStoreContext();
  const labels = state.budget.map((item) => (item.type === 'expense' ? item.name : ''));
  const amount = state.budget.map((item) => (item.type === 'expense' ? item.amount : ''));

  const chartData = {
    type: 'doughnut',
    labels,
    datasets: [
      {
        label: 'Expense on each thing',
        data: amount,
        maxBarThickness: 55,
        backgroundColor: [
          'hsl(0, 100%, 10%)',
          'hsl(0, 100%, 20%)',
          'hsl(0, 100%, 30%)',
          'hsl(0, 100%, 40%)',
          'hsl(0, 100%, 50%)',
          'hsl(0, 100%, 60%)',
          'hsl(0, 100%, 70%)',
          'hsl(0, 100%, 80%)',
          'hsl(0, 100%, 90%)',
        ],
      },
    ],
  };

  return (
    <div className={classes.flexContainer}>
      <Doughnut
        data={chartData}
        options={{
          legend: {
            labels: {
              fontSize: 18,
            },
          },
        }}
      />
      <div className={classes.total}>
        Overall expenses
        -
        {
            state.budget.reduce((acc, budget) => (
              budget.type === 'expense'
                ? acc + +budget.amount
                : acc
            ), 0)
          }
      </div>
    </div>
  );
}
