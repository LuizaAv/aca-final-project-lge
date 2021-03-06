import React, { useState } from 'react';
import { Line, Doughnut } from 'react-chartjs-2';
import { FormattedMessage, injectIntl } from 'react-intl';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import { useStoreContext } from '../../store/storeContext';
import Header from '../../components/Header/Header';
import View from '../../components/View/View';
import ChartType from './ChartType/ChartType';
import useStyles from './Charts.style';

export default function Charts() {
  const classes = useStyles();
  const { state } = useStoreContext();
  const [isCurrent, setIsCurrent] = useState(true);
  const [type, setType] = useState('date');

  const currentBudget = state.budget.filter((item) => item.date.getTime() <= new Date().getTime());
  const upcomingBudget = state.budget.filter((item) => item.date.getTime() > new Date().getTime());
  const showItems = isCurrent ? currentBudget : upcomingBudget;

  const uniqueIdCategories = showItems.reduce((acc, item) => (
    acc.some((categoryId) => (categoryId === item.categoryId))
      ? acc
      : [...acc, item.categoryId]
  ), []);

  const amounts = uniqueIdCategories.map((categoryId) => (
    showItems.reduce((acc, item) => (
      item.categoryId === categoryId
        ? acc + +item.amount
        : acc
    ), 0)
  ));

  const labelsDoughnut = uniqueIdCategories.map((categoryId) => (
    state.categories.find((category) => (
      category.id === categoryId
    )).name
  ));

  const colors = uniqueIdCategories.map((categoryId) => (
    state.categories.find((category) => (
      category.id === categoryId
    )).color
  ));

  const sortedBudgetByDate = showItems.sort((a, b) => a.date.getTime() - b.date.getTime());
  const labelsLine = sortedBudgetByDate.map((el) => el.date.toLocaleDateString());
  const expenses = sortedBudgetByDate.map((el) => (el.type === 'expense' ? el.amount : 0));
  const incomes = sortedBudgetByDate.map((el) => (el.type === 'income' ? el.amount : 0));

  if (!isCurrent) {
    labelsLine.unshift(new Date().toLocaleDateString());
    expenses.unshift(0);
    incomes.unshift(0);
  }

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

  const LineChart = injectIntl(({ intl }) => (
    <Line data={{
      labels: labelsLine,
      datasets: [
        {
          label: intl.formatMessage({ id: 'income' }),
          data: incomes,
          fill: true,
          backgroundColor: '#76ff0335',
          borderColor: '#76ff03',
        },
        {
          label: intl.formatMessage({ id: 'expense' }),
          data: expenses,
          fill: true,
          backgroundColor: '#ff525235',
          borderColor: '#FF5D5D',
        },
      ],
    }}
    />
  ));

  return (
    <div className={classes.container}>
      <Header />

      <div className={classes.tools}>
        <View isCurrent={isCurrent} setIsCurrent={setIsCurrent} />
        <ChartType type={type} setType={setType} />
      </div>

      <Typography
        align="center"
        variant="h4"
        className={classes.title}
      >
        <FormattedMessage id="chartsHeader" />
      </Typography>


      <Paper className={classes.paper} elevation={5}>
        {type === 'date'
          ? <LineChart />
          : <Doughnut data={dataDoughnut} />}
      </Paper>
    </div>
  );
}
