import React, { useState } from 'react';
import { FormattedMessage } from 'react-intl';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';

import { useStoreContext } from '../../store/storeContext';
import { useMainContext } from '../Main/mainContext';
import Header from '../../components/Header/Header';
import Sort from '../../components/Sort/Sort';
import FilterType from '../../components/FilterType/FilterType';
import View from '../../components/View/View';
import { ReactComponent as ArrowDownwardIcon } from '../../assets/icons/Arrow-down.svg';
import { ReactComponent as ArrowUpwardIcon } from '../../assets/icons/Arrow-up.svg';
import { currencySign } from '../../globals/constants';
import { formatingAmount } from '../../globals/helpers';
import useStyles from './Summary.style';

export default function Categories() {
  const classes = useStyles();
  const { state } = useStoreContext();
  const { loading, currency } = useMainContext();
  const [filterType, setFilterType] = useState('all');
  const [isAscending, setIsAscending] = useState(true);
  const [isCurrent, setIsCurrent] = useState(true);

  const currentBudget = state.budget.filter((item) => item.date.getTime() <= new Date().getTime());
  const upcomingBudget = state.budget.filter((item) => item.date.getTime() > new Date().getTime());
  const showItems = isCurrent ? currentBudget : upcomingBudget;

  const uniqueCategoriesItems = showItems.reduce((acc, item) => (
    acc.some((accItem) => (
      accItem.category === item.category && accItem.type === item.type
    ))
      ? acc
      : [...acc, item]
  ), []);

  const sumAmounts = uniqueCategoriesItems.map((uniqueItem) => {
    const amount = showItems.reduce(
      (acc, item) => (
        item.category === uniqueItem.category && item.type === uniqueItem.type
          ? acc + +item.amount
          : acc),
      0,
    );
    return { ...uniqueItem, amount };
  });

  const filteredItems = filterType === 'all'
    ? [...sumAmounts]
    : sumAmounts.filter((amount) => amount.type === filterType);

  filteredItems.sort((a, b) => (
    isAscending
      ? a.amount - b.amount
      : b.amount - a.amount
  ));

  return (
    <div className={classes.root}>
      <Header />

      <div className={classes.tools}>
        <Sort isAscending={isAscending} setIsAscending={setIsAscending} />
        <FilterType filterType={filterType} setFilterType={setFilterType} />
        <View isCurrent={isCurrent} setIsCurrent={setIsCurrent} />
      </div>

      {loading
        ? (
          <div className={classes.progress}>
            <CircularProgress size={50} />
          </div>
        )
        : (
          <TableContainer component={Paper} className={classes.tableContainer}>
            <Typography className={classes.title}>
              <FormattedMessage id="summary" />
            </Typography>
            <Table className={classes.table}>
              <TableHead>
                <TableRow>
                  <TableCell className={classes.head}>
                    <FormattedMessage id="category" />
                  </TableCell>
                  <TableCell className={classes.head} align="center">
                    <FormattedMessage id="type" />
                  </TableCell>
                  <TableCell className={classes.head} align="right">
                    <FormattedMessage id="amount" />
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredItems.map((item) => (
                  <TableRow key={item.id} className={classes.tableRow}>
                    <TableCell className={classes.category}>
                      {item.category}
                    </TableCell>
                    <TableCell className={classes.content} align="center">
                      {item.type === 'expense'
                        ? <ArrowDownwardIcon className={classes.icon} />
                        : <ArrowUpwardIcon className={classes.icon} />}
                      <FormattedMessage id={item.type} />
                    </TableCell>
                    <TableCell className={classes.content} align="right">
                      {(item.type === 'expense' ? '-' : '+')}
                      {formatingAmount(item.amount)}
                      {currencySign[currency]}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}

    </div>
  );
}
