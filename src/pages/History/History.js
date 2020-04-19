/* eslint-disable react/no-unescaped-entities */
import React, { useState, useEffect } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Pagination from '@material-ui/lab/Pagination';

import { useStoreContext } from '../../store/storeContext';
import Header from '../../components/Header/Header';
import Sort from '../../components/Sort/Sort';
import FilterType from '../../components/FilterType/FilterType';
import FilterDate from '../../components/FilterDate/FilterDate';
import EditHistory from './EditHistory/EditHistory';
import DeleteHistory from './DeleteHistory/DeleteHistory';
import Search from '../../components/Search/Search';
import Show from '../../components/Show/Show';
import Snackbars from '../../components/Snackbars/Snackbars';
import useStyles from './History.style';

function filterByDate(budget, date) {
  const dayCheck = () => budget.filter((item) => (
    item.date.getDate() === new Date().getDate()
    && item.date.getMonth() === new Date().getMonth()
    && item.date.getFullYear() === new Date().getFullYear()
  ));
  const monthCheck = () => budget.filter((item) => (
    item.date.getMonth() === new Date().getMonth()
    && item.date.getFullYear() === new Date().getFullYear()
  ));
  const yearCheck = () => budget.filter((item) => (
    item.date.getFullYear() === new Date().getFullYear()
  ));

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
  const [searchValue, setSearchValue] = useState('');
  const [snackbarType, setSnackbarType] = useState('');
  const [isCurrent, setIsCurrent] = useState(true);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [page, setPage] = useState(1);

  const currentBudget = state.budget.filter((item) => item.date.getTime() <= new Date().getTime());
  const futureBudget = state.budget.filter((item) => item.date.getTime() > new Date().getTime());

  useEffect(() => {
    setPage(1);
  }, [filterType, isAscending, filterDate, searchValue]);

  const showItems = isCurrent ? currentBudget : futureBudget;

  const budgetFilteredByType = filterType === 'all'
    ? [...showItems]
    : showItems.filter((budget) => budget.type === filterType);

  const budgetFilteredByDate = filterByDate(budgetFilteredByType, filterDate);

  const budgetSorted = budgetFilteredByDate.sort((a, b) => (
    isAscending ? a.amount - b.amount : b.amount - a.amount
  ));

  const budgetSearched = searchValue === ''
    ? budgetSorted
    : budgetSorted.filter((item) => item.name.toLowerCase().startsWith(searchValue.toLowerCase()));

  const elementsPerPage = 6;
  const countPages = Math.ceil(budgetSearched.length / elementsPerPage);
  const indexMin = (page - 1) * elementsPerPage;
  const indexMax = indexMin + elementsPerPage;

  return (
    <div className={classes.root}>
      <Header />

      <div className={classes.tools}>
        <Sort isAscending={isAscending} setIsAscending={setIsAscending} />
        <FilterType filterType={filterType} setFilterType={setFilterType} />
        <FilterDate filterDate={filterDate} setFilterDate={setFilterDate} />
        <Show isCurrent={isCurrent} setIsCurrent={setIsCurrent} />
        <Search searchValue={searchValue} setSearchValue={setSearchValue} />
      </div>

      <div className={classes.flexContainer}>
        {budgetSearched.length === 0
          ? (
            <Typography align="center" variant="h3" color="textSecondary">
              There isn't any post yet !!!
            </Typography>
          ) : (
            budgetSearched
              .filter((item, index) => index >= indexMin && index < indexMax)
              .map((item) => (
                <Card key={item.id} className={classes.card}>
                  <CardContent>
                    <div className={classes.cardItem}>
                      <Typography className={classes.name}>{item.name}</Typography>
                      <div className={classes.amount}>
                        <EditHistory
                          budget={item}
                          setSnackbarType={setSnackbarType}
                          setSnackbarOpen={setSnackbarOpen}
                        />
                        <DeleteHistory
                          budget={item}
                          setSnackbarType={setSnackbarType}
                          setSnackbarOpen={setSnackbarOpen}
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
              )))}
      </div>

      <Pagination
        count={countPages}
        page={page}
        onChange={(e, vlaue) => setPage(vlaue)}
        variant="outlined"
        color="secondary"
        className={classes.pagination}
      />

      <Snackbars type={snackbarType} open={snackbarOpen} setOpen={setSnackbarOpen} />
    </div>
  );
}
