import React, { useState } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { ReactComponent as ArrowDownwardIcon } from '../../assets/icons/Arrow-down.svg';
import { ReactComponent as ArrowUpwardIcon } from '../../assets/icons/Arrow-up.svg';
import {FormattedMessage} from 'react-intl';

import { useStoreContext } from '../../store/storeContext';

import Header from '../../components/Header/Header';
import Sort from '../../components/Sort/Sort';
import FilterType from '../../components/FilterType/FilterType';
import Show from '../../components/Show/Show';
import useStyles from './Summary.style';

export default function Categories() {
  const classes = useStyles();
  const { state } = useStoreContext();
  const [filterType, setFilterType] = useState('all');
  const [isAscending, setIsAscending] = useState(true);
  const [isCurrent, setIsCurrent] = useState(true);

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

  const amounts = uniqueCategories.map((category) => {
    const amount = state.budget.reduce(
      (acc, budget) => (
        budget.category === category.category && budget.type === category.type
          ? acc + +budget.amount
          : acc),
      0,
    );
    return { ...category, amount };
  });

  const filteredAmounts = filterType === 'all'
    ? [...amounts]
    : amounts.filter((amount) => amount.type === filterType);

  filteredAmounts.sort((a, b) => (
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
        <Show isCurrent={isCurrent} setIsCurrent={setIsCurrent} />
      </div>

      <TableContainer component={Paper} className={classes.tableContainer}>
        <Typography className={classes.title}>
        <FormattedMessage id="Summary"  />
        </Typography>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell className={classes.head}>
              <FormattedMessage id="Category"  />
              </TableCell>
              <TableCell className={classes.head} align="center">
              <FormattedMessage id="Type"  />
                </TableCell>
              <TableCell className={classes.head} align="right">
              <FormattedMessage id="Amount"  />
                </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredAmounts.map((amount) => (
              <TableRow key={amount.id} className={classes.tableRow}>
                <TableCell className={classes.category}>
                  {amount.category}
                </TableCell>
                <TableCell className={classes.content} align="center">
                  {amount.type === 'expense'
                    ? <ArrowDownwardIcon className={classes.icon} />
                    : <ArrowUpwardIcon className={classes.icon} />}
                  {amount.type}
                </TableCell>
                <TableCell className={classes.content} align="right">
                  {(amount.type === 'expense' ? '-' : '+') + amount.amount}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
