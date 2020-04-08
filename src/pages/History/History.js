import React, { useState } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import AddBudget from '../../components/AddBudget/AddBudget';
import Total from '../../components/Total/Total';
import { useStoreContext } from '../../store/storeContext';

import Sort from '../../components/Sort/Sort';
import FilterType from '../../components/FilterType/FilterType';
import FilterDate from '../../components/FilterDate/FilterDate';
import EditHistory from './EditHistory/EditHistory';
import DeleteHistory from './DeleteHistory/DeleteHistory';
import useStyles from './History.style';
import HistorySearch from '../../components/HistorySearch/HistorySearch';

function filterByDate(budget, date) {
  const dayCheck = () => budget.filter(
    (item) => item.date.toLocaleDateString() === new Date().toLocaleDateString(),
  );
  const monthCheck = () => budget.filter(
    (item) => item.date.toLocaleDateString().slice(3)
        === new Date().toLocaleDateString().slice(3),
  );
  const yearCheck = () => budget.filter(
    (item) => item.date.toLocaleDateString().slice(6)
      === new Date().toLocaleDateString().slice(6),
  );

  if (date === 'daily') return dayCheck();
  if (date === 'monthly') return monthCheck();
  if (date === 'yearly') return yearCheck();
  return [...budget];
}

export default function History() {
  const classes = useStyles();
  const { state } = useStoreContext();
  const [filterType, setFilterType] = useState('all');
  const [isAscending, setIsAscending] = useState(true);
  const [filterDate, setFilterDate] = useState('all');
  const [search, setSearch] = useState('');
  const [openDelete, setOpenDelete] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [openCancel, setOpenCancel] = useState(false);

  const budgetFilteredByType = filterType === 'all'
    ? [...state.budget]
    : state.budget.filter((budget) => budget.type === filterType);

  const budgetFilteredByDate = filterByDate(budgetFilteredByType, filterDate);

  const budgetSorted = budgetFilteredByDate.sort((a, b) => (
    isAscending ? a.amount - b.amount : b.amount - a.amount
  ));

  const budgetSearched = search === ''
    ? budgetSorted
    : budgetSorted.filter((item) => item.name.toLowerCase().startsWith(search.toLowerCase()));

  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <Total />
        <AddBudget />
      </div>

      <div className={classes.tools}>
        <Sort isAscending={isAscending} setIsAscending={setIsAscending} />
        <FilterType filterType={filterType} setFilterType={setFilterType} />
        <FilterDate filterDate={filterDate} setFilterDate={setFilterDate} />
        <HistorySearch search={search} setSearch={setSearch} />
      </div>

      <div className={classes.flexContainer}>
        {budgetSearched.map((item) => (
          <Card key={item.id} className={classes.card}>
            <CardContent>
              <div className={classes.cardItem}>
                <Typography className={classes.name}>{item.name}</Typography>
                <div className={classes.amount}>
                  <EditHistory
                    budget={item}
                    setOpenEdit={setOpenEdit}
                    setOpenCancel={setOpenCancel}
                  />
                  <DeleteHistory
                    budget={item}
                    setOpenDelete={setOpenDelete}
                    setOpenCancel={setOpenCancel}
                  />
                </div>
              </div>

              <hr className={classes.hr} />

              <div className={classes.cardItem}>
                <Typography className={classes.category}>
                  {item.category}
                </Typography>

                <Typography>
                  {item.type === 'expense'
                    ? `- ${item.amount}`
                    : `+ ${item.amount}`}
                </Typography>

                <Typography className={classes.date}>
                  {item.date.toLocaleDateString()}
                </Typography>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
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
