import React, { useState } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import { useStoreContext } from '../../store/storeContext';

import Sort from '../../components/Sort/Sort';
import Filter from '../../components/Filter/Filter';

const useStyles = makeStyles({
  table: {
    width: '80%',
  },
});

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
}))(TableCell);

export default function Categories() {
  const classes = useStyles();
  const { state } = useStoreContext();
  const [filterType, setFilterType] = useState('all');
  const [isAscending, setIsAscending] = useState(true);

  const amounts = state.categories.map((c) => {
    const count = state.budget.reduce(
      (acc, b) => (b.category === c.name ? acc + +b.amount : acc),
      0,
    );
    return { ...c, amount: count };
  });

  const filteredAmounts = filterType === 'all'
    ? [...amounts]
    : amounts.filter((amaunt) => amaunt.type === filterType);

  filteredAmounts.sort((a, b) => (
    isAscending
      ? a.amount - b.amount
      : b.amount - a.amount
  ));

  return (
    <>
      <div>
        <Sort isAscending={isAscending} setIsAscending={setIsAscending} />
        <Filter filterType={filterType} setFilterType={setFilterType} />
      </div>

      <TableContainer className={classes.table} component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <StyledTableCell align="center">Category</StyledTableCell>
              <StyledTableCell align="center">Amount</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredAmounts.map((amount) => (
              <TableRow key={amount.id}>
                <TableCell align="center">{amount.name}</TableCell>
                <TableCell align="center">{amount.amount}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
