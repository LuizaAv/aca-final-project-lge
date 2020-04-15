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
import { useStoreContext } from '../../store/storeContext';

import AddBudget from '../../components/AddBudget/AddBudget';
import AddCategory from './AddCategory/AddCategory';
import DeleteCategory from './DeleteCategory/DeleteCategory';
import EditCategory from './EditCategory/EditCategory';
import FilterType from '../../components/FilterType/FilterType';
import Total from '../../components/Total/Total';
import Snackbars from '../../components/Snackbars/Snackbars';
import useStyles from './Categories.style';

export default function Categories() {
  const classes = useStyles();
  const { state } = useStoreContext();
  const [filterType, setFilterType] = useState('all');
  const [snackbarType, setSnackbarType] = useState('');
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const filteredCategories = filterType === 'all'
    ? [...state.categories]
    : state.categories.filter((categories) => categories.type === filterType);

  return (
    <div className={classes.root}>

      <div className={classes.header}>
        <Total />
        <AddBudget />
      </div>

      <div className={classes.tools}>
        <AddCategory
          setSnackbarType={setSnackbarType}
          setSnackbarOpen={setSnackbarOpen}
        />
        <FilterType filterType={filterType} setFilterType={setFilterType} />
      </div>

      <TableContainer component={Paper} className={classes.tableContainer}>
        <Typography className={classes.title}>
          Category
        </Typography>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell className={classes.head}>
                Name
              </TableCell>
              <TableCell className={classes.head} align="center">
                Type
              </TableCell>
              <TableCell className={classes.head} align="right">
                Action
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredCategories.map((category) => (
              <TableRow key={category.id} className={classes.tableRow}>
                <TableCell className={classes.name}>
                  {category.name}
                </TableCell>
                <TableCell className={classes.content} align="center">
                  {category.type === 'expense'
                    ? <ArrowDownwardIcon className={classes.icon} />
                    : <ArrowUpwardIcon className={classes.icon} />}
                  {category.type}
                </TableCell>
                <TableCell className={classes.content} align="right">
                  <EditCategory
                    category={category}
                    setSnackbarType={setSnackbarType}
                    setSnackbarOpen={setSnackbarOpen}
                  />
                  <DeleteCategory
                    category={category}
                    setSnackbarType={setSnackbarType}
                    setSnackbarOpen={setSnackbarOpen}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Snackbars type={snackbarType} open={snackbarOpen} setOpen={setSnackbarOpen} />
    </div>
  );
}
