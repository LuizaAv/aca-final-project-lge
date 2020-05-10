import React, { useState } from 'react';
import { FormattedMessage } from 'react-intl';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';

import { ReactComponent as ArrowDownwardIcon } from '../../assets/icons/Arrow-down.svg';
import { ReactComponent as ArrowUpwardIcon } from '../../assets/icons/Arrow-up.svg';
import { useStoreContext } from '../../store/storeContext';
import { useMainContext } from '../Main/mainContext';

import Header from '../../components/Header/Header';
import AddCategory from './AddCategory/AddCategory';
import DeleteCategory from './DeleteCategory/DeleteCategory';
import EditCategory from './EditCategory/EditCategory';
import FilterType from '../../components/FilterType/FilterType';
import Snackbars from '../../components/Snackbars/Snackbars';
import useStyles from './Categories.style';

export default function Categories() {
  const classes = useStyles();
  const { state } = useStoreContext();
  const { loading } = useMainContext();
  const [filterType, setFilterType] = useState('all');

  const filteredCategories = filterType === 'all'
    ? [...state.categories]
    : state.categories.filter((categories) => categories.type === filterType);

  return (
    <div className={classes.root}>
      <Header />

      <div className={classes.tools}>
        <AddCategory />
        <FilterType filterType={filterType} setFilterType={setFilterType} />
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
              <FormattedMessage id="categories" />
            </Typography>
            <Table className={classes.table}>
              <TableHead>
                <TableRow>
                  <TableCell className={classes.head}>
                    <FormattedMessage id="name" />
                  </TableCell>
                  <TableCell className={classes.head} align="center">
                    <FormattedMessage id="type" />
                  </TableCell>
                  <TableCell className={classes.head} align="right">
                    <FormattedMessage id="action" />
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
                      <FormattedMessage id={category.type} />
                    </TableCell>
                    <TableCell className={classes.content} align="right">
                      <EditCategory category={category} />
                      <DeleteCategory category={category} />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}

      <Snackbars />
    </div>
  );
}
