import React from 'react';
import ExpenseChart from './ExpensesChart';
import TotalChart from './TotalCharts';
import useStyles from './Charts.style';

export default function MainChart() {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.flexContainer}>
      <TotalChart/>
      </div>
      <div className={classes.flexContainer}>
      <ExpenseChart/>
      </div>
    </div>
  );
}
