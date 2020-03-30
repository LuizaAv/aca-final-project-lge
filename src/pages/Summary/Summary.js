import React, { useState } from 'react';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';

import { useStoreContext } from '../../store/storeContext';

import Total from './Total/Total';
import Sort from '../../components/Sort/Sort';
import Filter from '../../components/Filter/Filter';
import AddBudget from '../../components/AddBudget/AddBudget';
import useStyles from './Summary.style';

export default function Categories() {
  const classes = useStyles();
  const { state } = useStoreContext();
  const [filterType, setFilterType] = useState('all');
  const [isAscending, setIsAscending] = useState(true);

  const amounts = state.categories.map((category) => {
    const count = state.budget.reduce(
      (acc, budget) => (
        budget.category === category.name && budget.type === category.type
          ? acc + +budget.amount
          : acc),
      0,
    );
    return { ...category, amount: count };
  }).filter((amount) => amount.amount !== 0);

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

      <div className={classes.total}>
        <Total />
        <AddBudget />
      </div>

      <div className={classes.tools}>
        <Sort isAscending={isAscending} setIsAscending={setIsAscending} />
        <Filter filterType={filterType} setFilterType={setFilterType} />
      </div>

      <TableContainer component={Paper} className={classes.tableContainer}>
        <Typography className={classes.title}>
          Summary
        </Typography>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell className={classes.head}>Category</TableCell>
              <TableCell className={classes.head} align="center">Type</TableCell>
              <TableCell className={classes.head} align="right">Amount</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredAmounts.map((amount) => (
              <TableRow key={amount.id}>
                <TableCell className={classes.category}>
                  {amount.name}
                </TableCell>
                <TableCell className={classes.content} align="center">
                  {amount.type === 'expense'
                    ? <span><ArrowDownwardIcon className={classes.down} /></span>
                    : <ArrowUpwardIcon className={classes.up} />}
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
