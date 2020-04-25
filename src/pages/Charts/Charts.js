import React, { useState } from 'react';
import { Line, Doughnut } from 'react-chartjs-2';
import { FormattedMessage } from 'react-intl';
import CircularProgress from '@material-ui/core/CircularProgress';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import { useStoreContext } from '../../store/storeContext';
import Header from '../../components/Header/Header';
import View from '../../components/View/View';
import CartType from './ChartType/ChartType';
import useStyles from './Charts.style';

export default function Charts() {
  const classes = useStyles();
  const { state, loading } = useStoreContext();
  const [isCurrent, setIsCurrent] = useState(true);
  const [type, setType] = useState('date');

  const currentBudget = state.budget.filter((item) => item.date.getTime() <= new Date().getTime());
  const futureBudget = state.budget.filter((item) => item.date.getTime() > new Date().getTime());

  const showItems = isCurrent ? currentBudget : futureBudget;

  const uniqueCategories = showItems.reduce((acc, item) => (
    acc.some((accItem) => (
      accItem.category === item.category
      && accItem.type === item.type
    ))
      ? acc
      : [...acc, item]
  ), []);

  const sortedBudgetByDate = showItems.sort((a, b) => a.date.getTime() - b.date.getTime());
  const labelsLine = sortedBudgetByDate.map((el) => el.date.toLocaleDateString());
  const expenses = sortedBudgetByDate.map((el) => (el.type === 'expense' ? el.amount : 0));
  const incomes = sortedBudgetByDate.map((el) => (el.type === 'income' ? el.amount : 0));
  const labelsDoughnut = uniqueCategories.map((item) => item.name);
  const amounts = uniqueCategories.map((item) => item.amount);
  const colors = uniqueCategories.map((item) => item.color);

  if (!isCurrent) {
    labelsLine.unshift(new Date().toLocaleDateString());
    expenses.unshift(0);
    incomes.unshift(0);
  }

  const dataLine = {
    labels: labelsLine,
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

  const dataDoughnut = {
    labels: labelsDoughnut,
    datasets: [
      {
        data: amounts,
        backgroundColor: colors,
      },
    ],
    display: true,
    position: 'top',
    fullWidth: true,
    reverse: false,
  };

  return (
    <div className={classes.container}>
      <Header />

      <div className={classes.tools}>
        <View isCurrent={isCurrent} setIsCurrent={setIsCurrent} />
        <CartType type={type} setType={setType} />
      </div>

      <Typography
        align="center"
        variant="h4"
        className={classes.title}
      >
        <FormattedMessage id="chartsHeader" />
      </Typography>

      {loading
        ? (
          <div className={classes.progress}>
            <CircularProgress size={50} />
          </div>
        )
        : (
          <Paper className={classes.paper} elevation={5}>
            {type === 'date'
              ? <Line data={dataLine} />
              : <Doughnut data={dataDoughnut} />}
          </Paper>
        )}
    </div>
  );
}