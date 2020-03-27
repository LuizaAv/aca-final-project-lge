import React, { useState } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import { useStoreContext } from '../../store/storeContext';

import AddCategory from './AddCategory';
import DeleteCategory from './DeleteCategory';
import EditCategory from './EditCategory';
import Filter from '../../components/Filter/Filter';
import useStyles from './Categories.style';

export default function Categories() {
  const classes = useStyles();
  const { state } = useStoreContext();
  const [filterType, setFilterType] = useState('all');

  const filteredCategories = filterType === 'all'
    ? [...state.categories]
    : state.categories.filter((categories) => categories.type === filterType);

  return (
    <div>
      <AddCategory />
      <Filter filterType={filterType} setFilterType={setFilterType} />
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell className={classes.head} align="center">
                Name
              </TableCell>
              <TableCell className={classes.head} align="center">
                Type
              </TableCell>
              <TableCell className={classes.head} align="center">
                Action
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredCategories.map((category) => (
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
    </div>
  );
}
