import React from 'react';
import uuid from 'uuid/v4';
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
  const [budget, setBudget] = React.useState(state.budget);

  return (
    <>
      <div>
        <Sort />
        <Filter filterItems={budget} setfilterItems={setBudget} />
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
            {budget.map((budgetItem) => (
              <TableRow key={uuid()}>
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
