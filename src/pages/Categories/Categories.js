import React, { useState } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import MoneyOffIcon from '@material-ui/icons/MoneyOff';

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
<<<<<<< HEAD
    <>
      <div className={classes.flexContainer}>
        <AddCategory />
        <Filter filterType={filterType} setFilterType={setFilterType} />
      </div>
      <div className={classes.flexContainer}>
        <TableContainer component={Paper} className={classes.table}>
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
                <TableRow key={category.id} className={classes.tableRow}>
                  <TableCell align="center">{category.name}</TableCell>
                  <TableCell align="center">
                    {category.type}
                    <div className={classes.flexContainer}>
                      {category.type === 'income' ? (
                        <AttachMoneyIcon className={classes.moneyIcon} />
                      ) : (
                        <MoneyOffIcon className={classes.moneyIcon} />
                      )}
                    </div>
                  </TableCell>
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
    </>
=======
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
>>>>>>> 9fb9dc6389b649591db991d3dd6e85599dfb9918
  );
}
