import React, { useState } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

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
import useStyles from './Categories.style';

export default function Categories() {
  const classes = useStyles();
  const { state } = useStoreContext();
  const [filterType, setFilterType] = useState('all');
  const [openDelete, setOpenDelete] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [openCancel, setOpenCancel] = useState(false);
  const [openAdd, setOpenAdd] = useState(false);

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
          setOpenAdd={setOpenAdd}
          setOpenCancel={setOpenCancel}
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
                    setOpenEdit={setOpenEdit}
                    setOpenCancel={setOpenCancel}
                  />
                  <DeleteCategory
                    category={category}
                    setOpenDelete={setOpenDelete}
                    setOpenCancel={setOpenCancel}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Snackbar open={openAdd} autoHideDuration={3000} onClose={() => { setOpenAdd(false); }}>
        <MuiAlert variant="filled" severity="success" onClose={() => { setOpenAdd(false); }}>
          Category successfully added
        </MuiAlert>
      </Snackbar>
      <Snackbar open={openDelete} autoHideDuration={3000} onClose={() => { setOpenDelete(false); }}>
        <MuiAlert variant="filled" severity="success" onClose={() => { setOpenDelete(false); }}>
          Deleted successfully!
        </MuiAlert>
      </Snackbar>
      <Snackbar open={openEdit} autoHideDuration={3000} onClose={() => { setOpenEdit(false); }}>
        <MuiAlert variant="filled" severity="success" onClose={() => { setOpenEdit(false); }}>
          Edited successfully!
        </MuiAlert>
      </Snackbar>
      <Snackbar open={openCancel} autoHideDuration={3000} onClose={() => { setOpenCancel(false); }}>
        <MuiAlert variant="filled" severity="info" onClose={() => { setOpenCancel(false); }}>
          Аction was canceled
        </MuiAlert>
      </Snackbar>
    </div>
  );
}
