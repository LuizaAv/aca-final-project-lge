import React from 'react';
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

  return (
    <>
      <div>
        <Sort />
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
            {state.budget.map((budgetItem) => (
              <TableRow key={budgetItem.id}>
                <TableCell align="center">{budgetItem.category}</TableCell>
                <TableCell align="center">{budgetItem.amount}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
