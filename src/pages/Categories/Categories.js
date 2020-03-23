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

import AddCategory from './AddCategory';
import DeleteCategory from './DeleteCategory';
import EditCategory from './EditCategory';
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
  const [categories, setCategories] = React.useState(state.categories);

  return (
    <>
      <AddCategory />
      <Filter filterItems={categories} setfilterItems={setCategories} />
      <TableContainer className={classes.table} component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <StyledTableCell align="center">Name</StyledTableCell>
              <StyledTableCell align="center">Type</StyledTableCell>
              <StyledTableCell align="center">Action</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {categories.map(category => (
              <TableRow key={category.id}>
                <TableCell align="center">{category.name}</TableCell>
                <TableCell align="center">{category.type}</TableCell>
                <TableCell align="center">
                  <EditCategory category={category} />
                  <DeleteCategory category={category} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
